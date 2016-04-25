/* Resize,Load時にcanvasを全画面表示
------------------------------ */
function fitWindow() {
	var ww = $(window).width();
	var wh = $(window).height();
	$('#stage').get(0).width = ww;
	$('#stage').get(0).height = wh;
}
// $(window).on('load resize', fitWindow);
