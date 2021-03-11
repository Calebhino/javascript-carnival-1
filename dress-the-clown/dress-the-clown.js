// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!");

let head = document.getElementById("head");
let body = document.getElementById("body");
let shoes = document.getElementById("shoes");
let currentlySelected = document.getElementById("selectedItem");
currentlySelected.innerHTML = "head";

let headIndex = 3;
let bodyIndex = 4;
let shoeIndex = 4;
let clothingIndex = 0;

const changeClothes = (direction) => {
	if (clothingIndex == 0) {
		if (headIndex > 4 && direction == "right") {
			headIndex = 0;
		} else if (headIndex < 1 && direction == "left") {
			headIndex = 5;
		} else {
			direction == "right" ? headIndex++ : headIndex--;
		}
		head.src = "/dress-the-clown/images/head" + headIndex + ".png";
	} else if (clothingIndex == 1) {
		if (bodyIndex > 4 && direction == "right") {
			bodyIndex = 0;
		} else if (bodyIndex < 1 && direction == "left") {
			bodyIndex = 5;
		} else {
			direction == "right" ? bodyIndex++ : bodyIndex--;
		}
		body.src = "/dress-the-clown/images/body" + bodyIndex + ".png";
	} else if (clothingIndex == 2) {
		if (shoeIndex > 4 && direction == "right") {
			shoeIndex = 0;
		} else if (shoeIndex < 1 && direction == "left") {
			shoeIndex = 5;
		} else {
			direction == "right" ? shoeIndex++ : shoeIndex--;
		}

		shoes.src =
			"/dress-the-clown/images/shoes" + shoeIndex + ".png";
	}
};

const highlightSelected = () => {
	if (clothingIndex == 0) {
		currentlySelected.innerHTML = "head";
	} else if (clothingIndex == 1) {
		currentlySelected.innerHTML = "body";
	} else if (clothingIndex == 2) {
		currentlySelected.innerHTML = "shoes";
	}
};

window.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "ArrowRight":
			changeClothes("right");
			break;
		case "ArrowLeft":
			changeClothes("left");
			break;
		case "ArrowUp":
			if (clothingIndex == 0) {
				clothingIndex = 2;
			} else {
				clothingIndex--;
			}
			highlightSelected();
			break;
		case "ArrowDown":
			if (clothingIndex == 2) {
				clothingIndex = 0;
			} else {
				clothingIndex++;
			}
			highlightSelected();
			break;
	}
});
