"use strict";

var doc = window.document;

function $(query, el) {
	return el ? el.querySelector(query) : doc.querySelector(query);
}

function $$(query, el) {
	return el ? el.querySelectorAll(query) : doc.querySelectorAll(query);
}

function addClass(el, className) {
	return el.classList ? el.classList.add(className) : el.className += ' ' + className;
}

function removeClass(el, className) {
	return el.classList ? el.classList.remove(className) : el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function add_error(txt) {
	$('.error').innerHTML = txt;
}

$('form').onsubmit = function (e) {
	if (!$('input[name="name"]').value) {
		add_error('You must enter Name.');
		return false;
	}

	if (!$('input[name="email"]').value) {
		add_error('You must enter Email.');
		return false;
	} else if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test($('input[name="email"]').value)) {
		add_error('Wrong Email.');
		return false;
	}

	if (!$('input[name="city"]').value) {
		add_error('You must enter City.');
		return false;
	}

	if (!$('input[name="state"]').value) {
		add_error('You must enter State.');
		return false;
	}

	addClass(this, 'hidden');
	removeClass($('.success'), 'hidden');
	return false;
};