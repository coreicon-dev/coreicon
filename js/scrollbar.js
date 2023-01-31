const progressBar = document.getElementById("progress");
const progressFill = progressBar.firstElementChild;

window.addEventListener("scroll", () => {
	updateProgress();
});

function updateProgress() {
	let width = progressBar.clientWidth;
	let progress =
		window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
	// fill progress bar
	progressFill.style.width = Math.ceil(100 * progress) + "%";
}

updateProgress();

