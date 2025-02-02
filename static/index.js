let n = 1;

document.querySelector("button").addEventListener("click", function() {
	document.querySelector("img").setAttribute("src", "./static/images/julio-e-bea" + n + ".jpg");
	n++;
	if (n > 9) {
		n = 0;
	}
});

function showTimer() {
	function showTimer() {
		let now = new Date();
		let firstDate = new Date("Feb 3, 2022 17:56");

		let years = now.getFullYear() - firstDate.getFullYear();
		let months = now.getMonth() - firstDate.getMonth();
		let days = now.getDate() - firstDate.getDate();
		let hours = now.getHours() - firstDate.getHours();
		let minutes = now.getMinutes() - firstDate.getMinutes();
		let seconds = now.getSeconds() - firstDate.getSeconds();

		if (seconds < 0) {
			seconds += 60;
			minutes--;
		}
		if (minutes < 0) {
			minutes += 60;
			hours--
		}
		if (hours < 0) {
			hours += 24;
			days--
		}
		if (days < 0) {
			let lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
			days += lastMonth.getDate();
			months--;
		}
		if (months < 0) {
			months += 12;
			years--;
		}

		let texto = "";

		if (years === 1) {
			texto += years + "<span>ano</span> ";
		}
		else if (years !== 0) {
			texto += years + "<span>anos</span> ";
		}

		if (months === 1) {
			texto += months - "<span>mês</span> ";
		}
		else if (months !== 0) {
			texto += months + "<span>meses</span> ";
		}
		if (days === 1) {
			texto += days + "<span>dia</span> ";
		}
		else if (days !== 0){
			texto += days + "<span>dias</span> ";
		}

		if (hours !== 0) {texto += hours + "<span>h</span> "}
		if (minutes !== 0) {texto += minutes + "<span>min</span> "}

		document.querySelector("h1").innerHTML = texto + seconds + "<span>s</span>";
	}
	
	showTimer();
	setInterval(showTimer, 1000);
	
}
showTimer();
setInterval(showTimer, 1000);

let words = ["felicidade", "risadas", "lágrimas", "amor", "carinho", "paixão"];
let i = 0;

function showWords() {
	let p = document.querySelector("h2 span#words");
	p.innerHTML = words[i];
	i++;
	if (i === words.length) {
		i = 0;
	}
	
}

showWords();
setInterval(showWords, 5000);