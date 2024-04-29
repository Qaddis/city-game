const marquee = document.getElementById("mq");
const scoreOutput = document.getElementById("score");
const countryOutput = document.getElementById("contry");
const capitalInput = document.getElementById("capital");

let answer = "";
let score = 0;

const changeTheme = () => {
	document.body.classList.add("false");
	setTimeout(() => document.body.classList.remove("false"), 1500);
};

const checkAnswer = () => {
	let userAnswer = capitalInput.value.trim();

	if (userAnswer.length > 3) {
		if (userAnswer.toLowerCase() === answer.toLowerCase()) {
			capitalInput.value = "";
			score++;
			scoreOutput.innerHTML = `Счёт: ${score}`;

			getRandomCapital();
		} else {
			capitalInput.value = "";
			score--;
			scoreOutput.innerHTML = `Счёт: ${score}`;

			changeTheme();
		}
	}
};

function getRandomCapital() {
	eel
		.get_random_capital()()
		.then((value) => {
			countryOutput.innerHTML = value[0];
			answer = value[1];
			marquee.innerHTML = `Рекорд: ${value[2]}`;
		});
}

window.addEventListener("beforeunload", () => {
	eel.save_score(score)();
});

getRandomCapital();
