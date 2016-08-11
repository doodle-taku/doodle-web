// common.js

var parameter = ''; // ページ遷移時のパラメータ
var d_word = '';

$('.js-input').on('click', function() {
	$('.js-form').css('border-color', '#3b99fc');
	// 単語候補の位置合わせ
	$('.js-words').css({
		top: $('.js-form').offset().top + $('.js-form').outerHeight(),
		left: $('.js-form').offset().left,
		width: $('.js-form').width(),
		display: 'block'
	});
	console.log();
});

// WordListからwordを選択
$(window).on('click', function(e) {
	var target = $(e.target);
	if (target.hasClass('js-input')) {
		$('.js-words').show();
	} else if (target.offsetParent().hasClass('js-word-list')) {
		d_word = target.context.dataset.word;
		parameter = target.context.innerHTML;
		$('.js-input').val(parameter);
		$('.js-words').hide();
		window.location.href = './s.html?p=' + parameter;

		// SessionStrageにdata-wordを一時保存
		window.sessionStorage.setItem('word' , d_word);
	}  else { // 候補ワードリスト以外を触った時
		$('.js-words').hide();
		$('.js-form').css('border-color', '#d9d9d9');
	}
});

$('.js-searchBtn').on('click', function() {
	window.location.href = './s.html?p=' + parameter;
});


// navigation(アプリケーション選択window)
$('.js-nav').on('click', function(){
	if($(this).hasClass('js-nav-open')) {
		$(this).removeClass('js-nav-open');
		$('.js-nav-application').hide();
	} else {
		$(this).addClass('js-nav-open');
		$('.js-nav-application').show();
	}
});