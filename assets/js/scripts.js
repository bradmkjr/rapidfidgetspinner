var spinners = document.getElementsByClassName('spinner');


// add on click to each spinner for testing
for (var i = 0; i < spinners.length; i++) {
	spinners[i].onclick = function(){
		this.classList.add('rotate');
		this.addEventListener("webkitAnimationEnd", removeRotateCallback, false);
		this.addEventListener("animationend", removeRotateCallback, false);
	}
}

function removeRotateCallback() {
    this.classList.remove('rotate'); // or modify div.className
}