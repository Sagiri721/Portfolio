import sqlite3

conn = sqlite3.connect("../dictionary.db")
cursor = conn.cursor()

def query_for_word(word):

    cursor.execute('SELECT wordtype FROM entries WHERE word = ?',(word.lower(),))
    result = cursor.fetchone()

    return result

index = 1
file = "unique_words.txt"
export = "word_classifications.txt"

with open(file, 'r', encoding='utf-8') as f:
    with open(export, 'w', encoding='utf-8') as out_f:
        for line in f:

            # if index == 30:
            #     break

            word = line.strip()
            classification = query_for_word(word)

            if not classification and word.endswith("s"):
                singular_form = word[:-1]
                classification = query_for_word(singular_form)

            if not classification:
                print(f"{word}: NOT FOUND")
                continue    
            
            # print(f"{word}: {classification}")
            if not classification[0] is None and ("v." in classification[0] or "a." in classification[0] or "n." in classification[0] or "adv." in classification[0]):
                out_f.write(f"INSERT INTO entries VALUES(\"{word}\", \"{classification[0]}\");\n")
            # index += 1

conn.close()