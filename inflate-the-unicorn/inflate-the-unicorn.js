// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!");

var neigh = new Audio("/inflate-the-unicorn/audio/neigh.m4a");

let state = [0, 0, 0];

const inflate = (num) => {
	let unicorn = document.getElementsByClassName("inflate-an-image")[
		num - 1
	];

	if (state[num] == 0) {
		unicorn.src = "images/unicorn-1.png";
	} else if (state[num] == 1) {
		unicorn.src = "images/unicorn-2.png";
	} else if (state[num] == 2) {
		unicorn.src = "images/unicorn-3.png";
	} else if (state[num] == 3) {
		neigh.play();
	}

	state[num]++;

	if (state[num] == 4) {
		unicorn.src = "images/unicorn-0.png";
		state[num] = 0;
	}
};
