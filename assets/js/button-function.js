/*
* This file adds functionality to all the window buttons
* */

// retrieve DOM elements
$(document).ready(function() {
  const max = document.getElementsByClassName('btn_max')[0];
  const min = document.getElementsByClassName('btn_min')[0];
  const question = document.getElementsByClassName('btn_question')[0];
  const start = document.getElementsByClassName('start')[0];
  const bluescreen = document.getElementsByClassName('bluescreen')[0];

  // add click event to all buttons
  question.addEventListener('click', bluescreenClick, false);
  start.addEventListener('click', startBtnClick, false);
  bluescreen.addEventListener('click', bluescreenClick, false);

  if (max && min) {
    max.addEventListener('click', maximizeClick, false);
    min.addEventListener('click', minimizeClick, false);
  }
});

// maximize button
function maximizeClick () {
  const post = document.getElementsByClassName('content')[0];
  const cont = document.getElementsByClassName('post_content')[0];
  const wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;

	if (wid > 900) {
		widf = wid * 0.9;
		post.style.width = widf + 'px';

		if (wid < 1400) {
			cont.style.width = '99%';
		} else {
			cont.style.width = '99.4%';
		}
	}
}

// minimize button
function minimizeClick () {
  const post = document.getElementsByClassName('content')[0];
  const cont = document.getElementsByClassName('post_content')[0];
  const wid = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;

	if ( wid > 900 ) {
		post.style.width = '800px';
		cont.style.width = '98.5%';
	}
}

// start button
function startBtnClick() {
  $('.bluescreen').show();
  $('.bluescreen').addClass('animated zoomIn');
}

// blue screen
function bluescreenClick() {
  alert(`Please refresh your browser to make it work again!\n\nDon't you remember you always need to reboot your PC after seeing this screen?!`)
}