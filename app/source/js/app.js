// まずは関連する配列を用意
var members = []; // 初期表示順
var randomMembers = []; // ランダム表示順

// 各要素を取得
$('.js-randomList').each(function() {
    members.push($(this).prop('outerHTML'));
});

// 配列を並び替える
var randomMembers = shuffle(members);
function shuffle(array) {
    for(var i = array.length - 1; i > 0; i--){
        var r = Math.floor(Math.random() * (i+1));
        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
    }
    return array;
}

// 元の表示をクリア（削除）
$('.js-randomList').remove();

// 順番にフェードインさせる処理
function fadeIn (n) {
    setTimeout(function() {
        $('.js-randomList').eq(n).animate({ opacity: 1 }, 500);
    }, n*50);
}

for(var i=0; i<randomMembers.length; i++) {
    $('.js-random').append(randomMembers[i]);
    fadeIn(i);
}