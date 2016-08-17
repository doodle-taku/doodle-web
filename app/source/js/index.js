// index.js

// doodleのランダム表示
var randomDoodleSrc = [
	'takeda.gif',
	'semmu.gif',
	'ikebe.png',
	'cheese.png',
	'mei.png',
	'mun.png',
	'eguchi.png',
	'paul.png'
]
var randomNum = Math.floor(Math.random()*8);

var randomDoodle = './images/doodle/' + randomDoodleSrc[randomNum];
$('.js-main-logo').attr('src', randomDoodle);