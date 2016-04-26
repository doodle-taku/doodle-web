/* ロゴアニメーション
************************* */
var speed = 1000;
var svg = Snap(600,300).remove().attr({viewBox: [0, 0, 600, 300]});

Object.keys(paths).forEach(function (key) {

	var path = svg.path(paths[key].from);

	(function () {
		path.attr({
			path: paths[key].from,
			fill: '#5782B2',
		}).animate({
			path: paths[key].to
		}, speed, function() {
			$('#logo').fadeOut(1000, fadeContents);
		});
	}());
});

svg.prependTo(logo);

/* コンテンツ表示アニメーション
************************* */
function fadeContents() {
	$('#js-contents').fadeIn(1000, function() {
		$('.js-typeAnime').t();
	});
}
