from dataclasses import dataclass
from typing import Callable, List, Set
import random

# This is an example Python 'regex without the parsing part' implementation.
# It uses Thompson's Construction and simulates the non-deterministic finite
# automaton (NFA).

# ---------------------------------- MODEL ---------------------------------- #

# I've given this State class the extra feature that it numbers itself, so that
# it's a bit easier to understand if you need to print and debug
state_number = 0
class State:
  def __init__(self):
    global state_number
    self.number = state_number
    state_number += 1

  def __repr__(self):
    return f"S{self.number}"

@dataclass
class Rule:
  start: State
  matcher: Callable[[str], bool]
  end: State

  def match(self, character: str) -> bool:
    return self.matcher(character)

  def is_epsilon(self) -> bool:
    return self.matcher == EPSILON

  def __repr__(self):
    return f"{self.start} -{self.matcher}-> {self.end}"

@dataclass
class Graph:
  label: str
  start: State
  end: State
  rules: List[Rule]

  # This helpful function will print a graphviz graph that you can paste into
  # https://dreampuf.github.io/GraphvizOnline/ to visualize the graph
  def to_graph(self):
    formatted = f"digraph \"{self.label}\" {{\n"
    for rule in self.rules:
      formatted += f"  {rule.start} -> {rule.end} [label=\"{rule.matcher}\"];\n"
    formatted += f"{self.start} [shape=square];\n"
    formatted += f"{self.end} [shape=doublecircle];\n"
    formatted += "}"
    return formatted


# ------------------------------- EVALUATION -------------------------------- #

@dataclass
class Evaluator():
  graph: Graph

  def explore(self, exploration_algorithm, state_from: State = None, depth: int = 0, result_builder = None) -> list[str]:

    # mutable default argument or whatever
    if result_builder is None: 
      result_builder = []

    # Limit the depth of exploration to avoid infinite loops
    # If current state is the end state, stop exploring
    if depth == 100 or state_from == self.graph.end:
      return

    options: Set = self.find_options(state_from)
    # print("You are at " + (str(state_from) if state_from else "the start") + f" (depth {depth})")
    # print(options)

    next_path = exploration_algorithm(options, depth)
    if next_path[1] != EPSILON:
      result_builder.append(str(next_path[1]))

    self.explore(exploration_algorithm, next_path[0], depth + 1, result_builder)

    return result_builder

  def find_options(self, state_from: State = None) -> Set:
    states = self.follow_epsilons(state_from or self.graph.start)
    next_states = set()
    for rule in self.graph.rules:
      if (rule.start in states and not rule.is_epsilon()) or rule.end == self.graph.end:
        next_states.add((rule.end,rule.matcher))

    return next_states

  def match(self, string: str) -> bool:
    states = self.follow_epsilons(self.graph.start)
    for char in string:
      next_states = set()
      for rule in self.matching_rules(states, char):
        next_states.update(self.follow_epsilons(rule.end))
      states = next_states
    return self.graph.end in states

  def follow_epsilons(self, state: State) -> Set[State]:
    resolved = {state}
    for rule in self.graph.rules:
      if rule.is_epsilon() and rule.start == state:
        resolved.update(self.follow_epsilons(rule.end))
    return resolved

  def matching_rules(self, states: Set[State], char: str):
    matching_rules = []
    for rule in self.graph.rules:
      if rule.start in states and rule.match(char):
        matching_rules.append(rule)
    return matching_rules


# -------------------------------- MATCHERS --------------------------------- #

# This is an optional class I've added to make it easier to debug when you print
# out the rules in the terminal.
class NamedLambda:
  def __init__(self, func, name=None):
    self.func = func
    self.name = name or func.__name__

  def __call__(self, *args, **kwargs):
    return self.func(*args, **kwargs)

  def __repr__(self):
    return self.name


EPSILON = NamedLambda(lambda _: False, "E")


def match_eq(c: str):
  return NamedLambda(lambda x: x == c, f"{c}")


def match_any():
  return NamedLambda(lambda _: True, "ANY")


# ------------------------------ CONSTRUCTORS ------------------------------- #

def single_char(character: str):
  start, end = State(), State()
  return Graph(character, start, end, [
    Rule(start, match_eq(character), end)
  ])


def any_char(_: str):
  start, end = State(), State()
  return Graph(".", start, end, [
    Rule(start, match_any(), end)
  ])


def zero_or_more(subj):
  start, end = State(), State()
  return Graph(f"({subj.label})*", start, end, [
    *subj.rules,
    Rule(start, EPSILON, end),
    Rule(start, EPSILON, subj.start),
    Rule(subj.end, EPSILON, end),
    Rule(subj.end, EPSILON, subj.start),
  ])

def zero_until_x(subj, x):
  start, end = State(), State()
  rules = [
    *subj.rules,
    Rule(start, EPSILON, end),
    Rule(start, EPSILON, subj.start),
    Rule(subj.end, EPSILON, end),
  ]
  for _ in range(x - 1):
    rules.append(Rule(subj.end, EPSILON, subj.start))
  return Graph(f"({subj.label}){{0,{x}}}", start, end, rules)

def alt(left, right):
  start, end = State(), State()
  return Graph(f"({left.label}|{right.label})", start, end, [
    *left.rules,
    *right.rules,
    Rule(start, EPSILON, left.start),
    Rule(start, EPSILON, right.start),
    Rule(left.end, EPSILON, end),
    Rule(right.end, EPSILON, end),
  ])

def one_or_more(subj):
  start, end = State(), State()
  return Graph(f"({subj.label})+", start, end, [
    *subj.rules,
    Rule(start, EPSILON, subj.start),
    Rule(subj.end, EPSILON, end),
    Rule(subj.end, EPSILON, subj.start),
  ])

def concat(left, right):
  return Graph(f"{left.label}{right.label}", left.start, right.end, [
    *left.rules,
    *right.rules,
    Rule(left.end, EPSILON, right.start),
  ])

def concat_many(subjs: List[Graph]):
  if len(subjs) < 2:
    raise ValueError("concat_many requires at least two subgraphs")
  
  current = concat(subjs[0], subjs[1])
  for subj in subjs[2:]:
    current = concat(current, subj)
  
  return current