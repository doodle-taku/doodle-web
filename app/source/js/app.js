/* コンテンツ表示アニメーション
************************* */
function fadeContents() {
	var delay = 6200;
	$('.js-type').t({
		speed: 100,
		caret: false
	});
	setTimeout(function(){
		$('.js-fadein').animate({
			opacity: 1,
		}, 500);
	}, 6200);
}
fadeContents();