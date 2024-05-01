<h2 align="center">Игра "Угадай столицу"</h1>

Простенькая игра, смысл которой - угадать столицу рандомно выбранной страны.
Список стран и столиц парсится с **[википедии](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D1%86_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2)**.
Есть сохранение рекорда между сессиями (рекорд сохраняется в текстовый файл).

Реализовано на **Python** (парсинг и сохранение рекорда), **HTML** & **CSS** (интерфейс) и **JavaScript** (логика и взаимодействие с интерфейсом).

Для парсинга используются **requests** и **BeautifulSoup4**, для связывания Python и HTML используется **Eel**.

### Установка

❗Рекомедуется использовать Python 3.11, так как версиях новее могут возникать ошибки.

1. Создайте новое вирутальное окружение Python и активируйте его;
2. Откройте папку в терминале и введите `git clone https://github.com/Qaddis/city-game.git`;
3. После того, как файлы из репозитория будут скопированны, в том же терминале введите `pip install -r requirements.txt`;
4. После установки всех зависимостей запустите скрипт **main.py**.

<h2 align="center">"Guess The Capital" Game</h1>

### ❗At the moment the game is only in Russian

A simple game, the point of which is to guess the capital of a randomly selected country. The list of countries and capitals is parsed from **[Wikipedia](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D1%86_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2)**. There is saving of the record between sessions (the record is saved in a text file).

Implemented in **Python** (parsing and saving records), **HTML** & **CSS** (interface) and **JavaScript** (logic and interaction with the interface).

**requests** and **BeautifulSoup4** are used for parsing; **Eel** is used to link Python and HTML.

### Installation

❗It is recommended to use Python 3.11, as newer versions may have errors.

1. Create a new Python virtual environment and activate it;
2. Open the folder in terminal and type `git clone https://github.com/Qaddis/city-game.git`;
3. After the files from the repository have been copied, in the same terminal enter `pip install -r requirements.txt`;
4. After installing all dependencies, run the **main.py** script.
