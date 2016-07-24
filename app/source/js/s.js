// s.js

// parameter から 文字列を抽出して検索フォームのValueにいれておく。
var param = window.location.search;
var decoded = decodeURIComponent(param); // URLデコード
decoded = decoded.substr(3); // ?p= を切り取る
$('.js-input').val(decoded); // 検索フォームに挿入


// 検索結果それぞれを適当に並び替える
var $rList = $('.js-article-list').find('article');
$rList = $rList.sort(function(){ return Math.random() - Math.random(); });
$('.js-article-list').find('article').remove();
$('.js-article-list').append($rList);

// 検索該当作品を一番上に
if(window.sessionStorage) { // ウェブストレージに対応している
	var s_storage = window.sessionStorage;
	var e_d_word = sessionStorage.getItem('word');

	$('.js-article-list').find('article').each(function() {
		if ($(this).data('word') == e_d_word) {
			// 記事とフォームvalueのdata属性が一致したら、そのDOMを移動
			$(this).prependTo('.js-article-list');
		}
	});
}
$('.js-article-list').css('opacity', '1');