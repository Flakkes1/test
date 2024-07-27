// ==UserScript==
// @name         tzoni
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ;)
// @author       Me
// @include      http://*.grepolis.*/game/*
// @include      https://*.grepolis.*/game/*
// @exclude      view-source://*
// @grant        none
// ==/UserScript==


(function() {
	var script = document.createElement('script'),
		head = document.getElementsByTagName('head')[0];
	script.type = 'text/javascript';
	script.src = location.protocol+'//tzoni-timer.netlify.app/script.js?nocache=' + Math.random();
	head.appendChild(script);
	head.setAttribute('xhttps', 1);
})();

