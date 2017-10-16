window.addEventListener('keydown', playSound );

function removeTransition(e) {
	var elementTransitioned = e.target;

	if(e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}

function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	
	if(!audio) return;

	audio.currentTime=0;
	key.classList.add("playing");
	audio.play();
}

const keyList = document.querySelector('.keys');
keyList.addEventListener('transitionend', removeTransition);

console.log(keyList);

// const keys = document.querySelectorAll('.keys');
// keys.forEach(key => addEventListener('transitionend', removeTransition));

