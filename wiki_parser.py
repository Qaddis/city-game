import requests
from bs4 import BeautifulSoup

st_accept = "text/html"
st_useragent = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 12_3_1) "
                "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15")
headers = {
    "Accept": st_accept,
    "User-Agent": st_useragent
}
path = "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D1%86_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2"


def get_capitals():
    req = requests.get(path, headers)
    soup = BeautifulSoup(req.text, 'html.parser')
    inf = {}

    for tr in soup.find_all('tr'):
        tds = tr.find_all_next('td')

        if str(tds[0].text).strip() != "—":
            try:
                country_name = tds[1].span["data-sort-value"]
            except:
                country_name = tds[1].a.text

            if tds[2].a: city_name = tds[2].a.text
            else: city_name = "none"

            inf[country_name] = city_name

    inf = {key: value for key, value in inf.items() if value != "none"}

    return inf
