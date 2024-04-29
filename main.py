import eel
import random
import wiki_parser

capitals = wiki_parser.get_capitals()


@eel.expose
def get_random_capital():
    random_country = random.choice(list(capitals.keys()))
    random_capital = capitals[random_country]

    return [random_country, random_capital]


if __name__ == "__main__":
    eel.init('web')
    eel.start('index.html', size=(800, 500))
