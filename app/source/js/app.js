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

// ランダムで並び替えたものを、入れ直す
for(var i=0; i<randomMembers.length; i++) {
    $('.js-random').append(randomMembers[i]);
}

// 順番にフェードインさせる処理
function fadeIn () {
    for (var i=0; i<$('.js-fadein').length; i++) {
        fade(i);
    }

    function fade (i) {
        setTimeout(function() {
            $('.js-fadein').eq(i).animate({
                opacity: 1
            }, 300);
        }, i*100);
    }
}

/* ページ遷移アニメーション */
$('.js-page-fade').animate({
    top: '-100vh'
}, 1000, fadeIn);