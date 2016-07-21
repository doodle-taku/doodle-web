// common.js

var selection = ' '; // 選択中の検索ワード
var parameter = 'none'; // ページ遷移時のパラメータ

$('.js-form').on('click', function() {
	$(this).css('border-color', '#3b99fc');
	// 単語候補の位置合わせ
	$('.js-words').css({
		top: $('.js-form').offset().top + $('.js-form').outerHeight(),
		left: $('.js-form').offset().left
	});
	$('.js-words').show();
});

// WordListからwordを選択
$('.js-word-list li').on('click', function() {
	selection = $(this).context.innerHTML;
	$('.js-form input').val(selection);
	$('.js-words').hide();
});

// パラメータをもたせてページ遷移
$('.js-searchBtn').on('click', function() {
	parameter = selection;
	window.location.href = './s.html?p=' + parameter;
});
