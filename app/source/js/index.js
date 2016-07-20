// index.js

var selection; // 選択中の検索ワード
var parameter = 'none'; // ページ遷移時のパラメータ

$('.js-form').on('click', function() {
    $('.js-words').show();
});

// WordListのクリックでそのwordを選択する

$('.js-word-list li').on('click', function() {
    selection = $(this).context.innerHTML;
    $('.js-form input').val(selection);
    $('.js-words').hide();
});


$('.js-searchBtn').on('click', function() {
    parameter = selection;
    console.log(parameter);
    window.location.href = './s.html?p='+parameter;
});
