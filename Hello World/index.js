const hive = document.getElementById("hive");
const hiveLine = document.getElementById("hive-line");
const cursor = document.getElementById("cursor");
const beeWrapper = document.getElementById("bee-wrapper");
const water = document.getElementById("water");

let provoked = false;
const beeNumber = 30;

hive.addEventListener("click", () => {
	hive.classList.add("hive--provoked");
	hiveLine.classList.add("hive-line--provoked");
	cursor.classList.add("cursor--red");
	provoked = true;
	let beeCount = 0;

	const intervalID = setInterval(() => {
		if (beeCount >= beeNumber) {
			clearInterval(intervalID);
		}
		const bee = document.createElement("div");
		bee.classList.add("bee");
		beeWrapper.appendChild(bee);
		beeCount = beeCount + 1;
	}, 300);
});

const cursorFunction = (mouse) => {
	const clientX = mouse.clientX ? mouse.clientX : mouse.touches[0].clientX;
	const clientY = mouse.clientY ? mouse.clientY : mouse.touches[0].clientY;
	document.body.style = `--top: ${clientY}px; --left: ${clientX}px;`;
};

window.addEventListener("mousemove", cursorFunction);
window.addEventListener("touchstart", cursorFunction);

water.addEventListener("mouseover", () => {
	cursor.classList.remove("cursor--red");
});

water.addEventListener("mouseout", () => {
	if (provoked) {
		cursor.classList.add("cursor--red");
	}
});
