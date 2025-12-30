import sqlite3
import random

# Matchers
chaos = "chaos"
preposition = "prep."
adverb = "adv."
noun = "n."
adjective = "a."
verbs = "v."

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
        preposition: query_for_words(preposition),
        adverb: query_for_words(adverb),
        noun: query_for_words(noun),
        adjective: query_for_words(adjective),
        verbs: query_for_words(verbs),
        chaos: query_for_words(chaos)
    }

    for key, word_list in words.items():
        while f'[{key}]' in template:
            if word_list:
                chosen_word = random.choice(word_list)
                template = template.replace(f'[{key}]', chosen_word, 1)
            else:
                template = template.replace(f'[{key}]', '...', 1)

    # Fix object mistakes
    template = template.replace(' a a', ' an a')
    template = template.replace(' a i', ' an i')
    template = template.replace(' a u', ' an u')
    template = template.replace(' a e', ' an e')
    template = template.replace(' a o', ' an o')

    return template

templates = [
    "The [a.] [n.] [v.] [prep.] the [adv.] [n.].",
    "A [n.] [v.] [prep.] a [a.] [n.].",
    "In the [a.] [n.], a [n.] [v.] [adv.] [prep.] another [n.].",
    "When the [n.] [v.] [prep.] the [a.] [n.], everything changes.",
    "The [n.] that [v.] [adv.] is not what it seems.",
    "A [chaos] [n.] [v.] [prep.] the [n.] with [adv.] precision.",
]

for i in range(10):
    words = fill_template(random.choice(templates))
    print(words)