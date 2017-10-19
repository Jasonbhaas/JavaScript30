function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegree = seconds*6 + 90;
	if (secondsDegree === 90) {
		moveMinuteAndHourHand(now);
	};
	const secondHand = document.querySelector('.second-hand');
	secondHand.style.transform = `rotate(${secondsDegree}deg)`;
}

function moveMinuteAndHourHand(now) {
	const minutes = now.getMinutes();
	const minutesDegree = minutes*6 + 90;
	const minutesHand = document.querySelector('.min-hand');
	minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

	const hours = now.getHours() % 12;
	const totalMinutes = hours*60 + minutes; 
	const hoursDegree = totalMinutes/2 + 90;
	const hourHand = document.querySelector('.hour-hand');
	hourHand.style.transform = `rotate(${hoursDegree}deg)`;
	
}

moveMinuteAndHourHand(new Date());
setDate();

setInterval(setDate, 1000);
