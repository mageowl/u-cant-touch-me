const game = open(
	"game.html",
	"bruh",
	"height=400,width=400,titlebar=false,menubar=false"
);

function moveGame() {
	const cx = game.screenX;
	const cy = game.screenY;
	const x = Math.floor(Math.random() * window.screen.width);
	const y = Math.floor(Math.random() * window.screen.height);

	if (Math.abs(x - cx) > 800 && Math.abs(y - cy) > 800) game.moveTo(x, y);
	else moveGame();
}

game.addEventListener("mousemove", () => {
	moveGame();
});
