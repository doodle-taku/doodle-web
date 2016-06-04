/* コンテンツ表示アニメーション
************************* */
function fadeContents() {
	var delay = 6200;
	$('.js-fadein').animate({
		opacity: 1,
	}, 500);
}

setTimeout(fadeContents, 1000);
