// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!");

let hit = new Audio("/whack-a-mole/whack-audio.wav");
let counter = document.getElementById("counter");
let highScoreCounter = document.getElementById("highscore");
let highscore = 0;
let time = 10;

document.getElementById("countdown").innerHTML = time;
highScoreCounter.innerHTML = highscore;

let rows = [];
let history = [];
let lastMole = [];

const getRows = () => {
	//did this before reading the rest haha
	rows = Array.prototype.slice
		.call(document.getElementsByTagName("tr"))
		.map((row) => {
			return Array.prototype.slice
				.call(row.getElementsByTagName("td"))
				.map((cell) => {
					return cell;
				});
		});
};

getRows();

const randomMole = () => {
	let randomRow = Math.floor(Math.random() * 5);
	let randomCell = Math.floor(Math.random() * 5);

	if (lastMole == [randomRow, randomCell]) {
		lastMole = [randomRow, randomCell];
		randomMole();
	} else {
		placeMole(rows[randomRow][randomCell]);
		lastMole = [randomRow, randomCell];
	}
};

const placeMole = (cell) => {
	cell.style.backgroundImage = "url('/whack-a-mole/mole.PNG')";
	cell.style.backgroundSize = "contain";
	cell.setAttribute("onclick", "hitMole()");
	history.push(cell);
};

const hitMole = () => {
	hit.pause();
	hit.currentTime = 0;
	hit.play();
	updateCounter();

	let mole = history[history.length - 1];
	mole.setAttribute("onclick", "");
	mole.style.backgroundImage = "";
	randomMole();
};

const updateCounter = () => {
	counter.innerHTML = history.length;
};

const resetBoard = () => {
	time = 10;
	history[history.length - 1].setAttribute("onclick", "");
	history[history.length - 1].style.backgroundImage = "";
	history.splice(0, history.length);

	updateCounter();
	countdownTimer = setInterval(countdown, 1000);
	randomMole();
};

const countdown = () => {
	if (time <= 0) {
		clearInterval(countdownTimer);

		if (history.length - 1 >= highscore) {
			highscore = history.length - 1;
			highScoreCounter.innerHTML = highscore;
			alert(
				"New highscore! You hit " +
					highscore +
					" moles!"
			);
		} else {
			alert("Your score was " + history.length - 1);
		}
		resetBoard();
	}
	console.log(history);
	document.getElementById("countdown").innerHTML = time;
	time -= 1;
};

let countdownTimer = setInterval(countdown, 1000);

updateCounter();

randomMole();
