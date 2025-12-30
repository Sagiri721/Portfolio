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

WORD_SOURCE = "dictionary.db"

def query_for_words_with_only_a(pos_tag):
    conn = sqlite3.connect(WORD_SOURCE)
    cursor = conn.cursor()

    if pos_tag == chaos:
        cursor.execute('SELECT word FROM entries WHERE wordtype IS NULL')
    else:
        cursor.execute('SELECT word FROM entries WHERE wordtype LIKE ? AND word NOT LIKE \"%e%\" AND word NOT LIKE \"%i%\" AND word NOT LIKE \"%o%\" AND word NOT LIKE \"%u%\"',(f'%{pos_tag}%',))
    words = [row[0] for row in cursor.fetchall()]
    conn.close()
    return words

def query_for_4_letter_words(pos_tag):

    conn = sqlite3.connect(WORD_SOURCE)
    cursor = conn.cursor()

    if pos_tag == chaos:
        cursor.execute('SELECT word FROM entries WHERE wordtype IS NULL')
    else:
        cursor.execute('SELECT word FROM entries WHERE wordtype LIKE ? AND word LIKE \"____\"',(f'%{pos_tag}%',))
    words = [row[0] for row in cursor.fetchall()]
    conn.close()
    return words

def query_for_9_letter_words(pos_tag):
    conn = sqlite3.connect(WORD_SOURCE)
    cursor = conn.cursor()

    if pos_tag == chaos:
        cursor.execute('SELECT word FROM entries WHERE wordtype IS NULL')
    else:
        cursor.execute('SELECT word FROM entries WHERE wordtype LIKE ? AND word LIKE \"_________\"',(f'%{pos_tag}%',))
    words = [row[0] for row in cursor.fetchall()]
    conn.close()
    return words

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

acrostic_word = "example"
acrostic_index = 0
def query_for_words_acrostic(pos_tag):
    global acrostic_index
    conn = sqlite3.connect(WORD_SOURCE)
    cursor = conn.cursor()

    print(f"Acrostic index: {acrostic_index}, letter: {acrostic_word[acrostic_index]}")

    if pos_tag == chaos:
        cursor.execute('SELECT word FROM entries WHERE wordtype IS NULL AND word LIKE ?',(f'{acrostic_word[acrostic_index]}%',))
    else:
        cursor.execute('SELECT word FROM entries WHERE wordtype LIKE ? AND word LIKE ?',(f'%{pos_tag}%', f'{acrostic_word[acrostic_index]}%'))
    words = [row[0] for row in cursor.fetchall()]
    conn.close()
    acrostic_index = (acrostic_index + 1) % len(acrostic_word)
    return words

def fill_template(template, func=query_for_words):
    words = {
        prep: func(prep),
        adverb: func(adverb),
        noun: func(noun),
        adjective: func(adjective),
        verb: func(verb),
        past_tense_verbs: func(past_tense_verbs),
        article: func(article),
        punct: func(punct),
        conj: func(conj),
        pronoun: func(pronoun),
        chaos: func(chaos),
        relative: func(relative),
        determiner: func(determiner),
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

options = {
    "none": query_for_words,
    "four_letter": query_for_4_letter_words,
    "only_a": query_for_words_with_only_a,
    "nine_letter": query_for_9_letter_words,
    "acrostic": query_for_words_acrostic
}

print("Choose word source:")
for key in options.keys():
    print(f"- {key}")
choice = input("Your choice: ").strip().lower()

if choice not in options:
    print("Invalid choice")
    exit()

word_query_function = options.get(choice, query_for_words)

for _i in range(5):
    sentence = ' '.join(regex.explore(non_empty_random_walk))
    print(fill_template(sentence, word_query_function))
    acrostic_index = 0
