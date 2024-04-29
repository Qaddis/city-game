import eel
import random
import wiki_parser

capitals = wiki_parser.get_capitals()


@eel.expose
def get_random_capital():
    random_country = random.choice(list(capitals.keys()))
    random_capital = capitals[random_country]

    with open('score.txt', 'r') as file:
        score = file.read()

    return [random_country, random_capital, score]


@eel.expose
def save_score(new_score):
    with open('score.txt', 'r') as file:
        old_score = int(file.read())

    if new_score > old_score:
        with open('score.txt', 'w') as file:
            file.write(str(new_score))


if __name__ == "__main__":
    eel.init('web')
    eel.start('index.html', size=(800, 500))
