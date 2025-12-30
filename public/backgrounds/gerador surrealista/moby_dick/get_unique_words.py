file = "unique_words.txt"
output = "unique_words.txt"

text = ""
with open(file, 'r', encoding='utf-8') as f:
    text = f.read()

words = text.split()
unique_words = set(words)

with open(output, 'w', encoding='utf-8') as f:
    for word in sorted(unique_words):
        # Exclude words that dont start with a letter
        if word[0].isalpha() and not "—" in word:
            f.write(word.lower().replace("!", "").replace(",", "").replace(".", "").replace(";", "").replace("?", "").replace("\"", "").replace(":", "").replace("(", "").replace(")", "") + '\n')