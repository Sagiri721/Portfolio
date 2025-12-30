import regex_almost as ra

import sqlite3
import random

# Matchers
chaos = "chaos"
prep = "prep."
adverb = "adv."
noun = "n."
adjective = "a."
verb = "v."
past_tense_verbs = "p. p."
article = "defa."
punct = "punctuation."
conj = "conj."
pronoun = "pron."
relative = "rel."
determiner = "det."

# Full grammar
s0, s1, s2, s3, s4, s5, s6 = ra.State(), ra.State(), ra.State(), ra.State(), ra.State(), ra.State(), ra.State()
g = ra.Graph(
    "English more or less",
    s1, s0,
    [
        ra.Rule(s0, ra.match_eq("[defa.]"), s1),
        ra.Rule(s0, ra.match_eq("[n.]"), s2),
        ra.Rule(s1, ra.match_eq("[a.]"), s1),
        ra.Rule(s1, ra.match_eq("[n.]"), s2),
        ra.Rule(s2, ra.match_eq("[punctuation.]"), s0),
        ra.Rule(s2, ra.match_eq("[v.]"), s3),
        ra.Rule(s2, ra.match_eq("[conj.]"), s6),
        ra.Rule(s6, ra.match_eq("[v.]"), s3),
        ra.Rule(s3, ra.match_eq("[prep.]"), s4),
        ra.Rule(s3, ra.match_eq("[adv.]"), s5),
        ra.Rule(s5, ra.match_eq("[prep.]"), s4),
        ra.Rule(s4, ra.match_eq("[n.]"), s2),
        ra.Rule(s4, ra.match_eq("[defa.]"), s1)
        # Rule(s1, )
    ]
)
# print(g.to_graph())
regex = ra.Evaluator(g)

# Random Walkers Money Gang, we love randomness
random_walk = lambda options, depth: random.choice(list(options))

# Dont pick end state until x depth
def non_empty_random_walk(options, depth, x=4):
    if depth < x:
        non_end_options = [opt for opt in options if opt[0] != regex.graph.end]
        # print(options)
        if non_end_options:
            options = non_end_options
    
    return random.choice(list(options));

# Generator

WORD_SOURCE = "moby_dick_dictionary.db"

def query_for_words(pos_tag):

    conn = sqlite3.connect(WORD_SOURCE)
    cursor = conn.cursor()

    if pos_tag == chaos:
        cursor.execute('SELECT word FROM entries WHERE wordtype IS NULL')
    else:
        cursor.execute('SELECT word FROM entries WHERE wordtype LIKE ?',(f'%{pos_tag}%',))
    words = [row[0] for row in cursor.fetchall()]
    conn.close()
    return words

def fill_template(template):
    words = {
        prep: query_for_words(prep),
        adverb: query_for_words(adverb),
        noun: query_for_words(noun),
        adjective: query_for_words(adjective),
        verb: query_for_words(verb),
        past_tense_verbs: query_for_words(past_tense_verbs),
        article: query_for_words(article),
        punct: query_for_words(punct),
        conj: query_for_words(conj),
        pronoun: query_for_words(pronoun),
        chaos: query_for_words(chaos),
        relative: query_for_words(relative),
        determiner: query_for_words(determiner),
    }

    for key, word_list in words.items():
        while f'[{key}]' in template:
            if word_list:
                chosen_word = random.choice(word_list)
                template = template.replace(f'[{key}]', chosen_word, 1)
            else:
                template = template.replace(f'[{key}]', '...', 1)

    # Fix object mistakes
    template = " " + template
    template = template.replace(' a a', ' an a')
    template = template.replace(' a i', ' an i')
    template = template.replace(' a u', ' an u')
    template = template.replace(' a e', ' an e')
    template = template.replace(' a o', ' an o')
    template = template.replace(' ,', ',')
    template = template.replace(' .', '.')
    template = template.replace(' ;', '.')
    template = template[:-1]

    return template + "."

for _i in range(10):
    sentence = ' '.join(regex.explore(non_empty_random_walk))
    print(fill_template(sentence))
