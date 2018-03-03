/*
* This file adds functionality to all the window buttons
* */

// retrieve DOM elements
const max = document.getElementsByClassName("btn_max")[0];
const min = document.getElementsByClassName("btn_min")[0];
const question = document.getElementsByClassName("btn_question")[0];

// maximize button
function maximize () {
  const post = document.getElementsByClassName("content")[0];
  const cont = document.getElementsByClassName("post_content")[0];
  const wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;

	if (wid > 900) {
		widf = wid * 0.9;
		post.style.width = widf + "px";

		if (wid < 1400) {
			cont.style.width = "99%";
		} else {
			cont.style.width = "99.4%";
		}
	}
}

// minimize button
function minimize () {
  const post = document.getElementsByClassName("content")[0];
  const cont = document.getElementsByClassName("post_content")[0];
  const wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;

	if ( wid > 900 ) {
		post.style.width = "800px";
		cont.style.width = "98.5%";
	}
}

// blue screen button
function bluescreen() {
  // TODO: add blue screen feature
  console.log('blue');
}

// add click event to all buttons
if (max && min) {
  max.addEventListener('click', maximize, false);
  min.addEventListener('click', minimize, false);
}

question.addEventListener('click', bluescreen, false);
