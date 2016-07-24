// common.js

var selection = ' '; // 選択中の検索ワード
var parameter = ''; // ページ遷移時のパラメータ
var d_word = '';

$('.js-input').on('click', function() {
	$('.js-form').css('border-color', '#3b99fc');
	// 単語候補の位置合わせ
	$('.js-words').css({
		top: $('.js-form').offset().top + $('.js-form').outerHeight(),
		left: $('.js-form').offset().left,
		display: 'block'
	});
});

// WordListからwordを選択
$(window).on('click', function(e) {
	var target = $(e.target);
	if (target.hasClass('js-input')) {
		$('.js-words').show();
	} else if (target.offsetParent().hasClass('js-word-list')) {
		d_word = target.context.dataset.word;
		selection = target.context.innerHTML;
		$('.js-input').val(selection);
		$('.js-words').hide();
	}  else { // 候補ワードリスト以外を触った時
		$('.js-words').hide();
		$('.js-form').css('border-color', '#d9d9d9');
	}
});

// パラメータをもたせてページ遷移
$('.js-searchBtn').on('click', function() {
	parameter = selection;
	window.location.href = './s.html?p=' + parameter;

	// SessionStrageにdata-wordを一時保存
	window.sessionStorage.setItem('word' , d_word);
});
