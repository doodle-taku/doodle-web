/* スクロール時のエフェクト
------------------------------ */
// アニメーション前初期値と要素設定
var logo = document.getElementById('js-logo');
var rect = logo.getBoundingClientRect();
var logo_h = rect.top;
var logoMaxWidth = 600;
var logoMinWidth = 230;
var mv = document.getElementById('js-mv');
var logoMinTop = 25;

// ロゴの位置・幅の変更
function changeLogo(y) {
	var logoTop = ((1-y)*(logo_h-logoMinTop))+logoMinTop;
	var logoWidth = ((1-y)*( logoMaxWidth - logoMinWidth ))+logoMinWidth;

	// 最小値の制御
	if(logoTop < logoMinTop) {
		logo.style.top = logoMinTop + 'px';
	} else {
		logo.style.top = logoTop + 'px';
	}
	if(logoWidth < logoMinWidth) {
		logo.style.width = logoMinWidth + 'px';
	} else {
		logo.style.width = logoWidth + 'px';		
	}
}

// 背景透明度変更
function changeAlpha(y) {
	mv.style.backgroundColor = "rgba(255,255,255,"+ (1-y) +")";
}

window.addEventListener('scroll', function() {
	var y = Math.floor(window.pageYOffset / window.innerHeight * 100)/100;
	changeAlpha(y);
	changeLogo(y);
});

/* メインコンテンツの表示
------------------------------ */

