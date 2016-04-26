/* ロゴアニメーション
************************* */
var x = 100;
var speed = 9;

var de = document.getElementById('deviation-element');

function removeBlur () {
	x--;
	if(x == 0){
		$('#js-svg').fadeOut();
		setTimeout(fadeContents, 1000);
		return;
	}
	de.setAttribute('stdDeviation', x);
}
setInterval(removeBlur, speed);

/* コンテンツ表示アニメーション
************************* */
function fadeContents() {
	$('#js-contents').fadeIn(1000, function() {
		$('.js-type').t({
			speed: 100,
			caret: false
		});
	});
}
