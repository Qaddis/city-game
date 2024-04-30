const marquee = document.getElementById("mq");
const scoreOutput = document.getElementById("score");
const countryOutput = document.getElementById("contry");
const capitalInput = document.getElementById("capital");
const hintLabel = document.querySelector(".hint-lbl");

let answer = "";
let score = 0;

const changeTheme = () => {
	document.body.classList.add("false");
	setTimeout(() => document.body.classList.remove("false"), 1500);
};

const checkAnswer = () => {
	let userAnswer = capitalInput.value.trim();

	if (userAnswer.length >= 3) {
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
			getRandomCapital();
		}
	}
};

const showHint = () => {
	document.querySelector(".hint-btn").classList.add("d-none");
	hintLabel.innerHTML =
		answer[0] + "*".repeat(answer.length - 2) + answer.slice(-1);
	hintLabel.classList.remove("d-none");
};

function getRandomCapital() {
	eel
		.get_random_capital()()
		.then((value) => {
			countryOutput.innerHTML = value[0];
			answer = value[1];
			marquee.innerHTML = `Рекорд: ${value[2]}`;
		});

	hintLabel.innerHTML = "";
	hintLabel.classList.add("d-none");
	document.querySelector(".hint-btn").classList.remove("d-none");
}

window.addEventListener("beforeunload", () => {
	eel.save_score(score)();
});

getRandomCapital();
