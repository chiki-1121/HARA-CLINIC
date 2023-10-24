jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    //ドロワーメニュー
    $(".js-hamburger").click(function () {
        if ($(".js-hamburger").hasClass('is-active')) {
            $(".js-hamburger").removeClass("is-active");
            $("body").removeClass("is-active");
            $(".js-sp-nav").fadeOut(300);
        } else {
            $(".js-hamburger").addClass("is-active");
            $("body").addClass("is-active");
            $(".js-sp-nav").fadeIn(300);
        };
    });

    // トップへ戻るボタン
    let topBtn = $('.to-top');
    topBtn.hide();

    // ボタンの表示設定
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    //ドロワーメニューを開いたまま画面幅が768px以上になった時にメニューを閉じる
    $(window).resize(function () { // ウィンドウがリサイズされたら
                var $window = $(this).width();
                var bp = 767;
                if ($window > bp) {
                if ($(".sp-nav").show()){
                                $(".sp-nav").hide();
                                // $(".sp-nav").css("display","none");
                                $(".js-hamburger").removeClass("is-active"); // ×印をハンバーガーに戻す
                        $("body").removeClass("is-active");
                    } else {
                        //何もしない
                    }
}});

});
//767以下のみtelリンク
var telLink = document.getElementById('telLink');

// 画面幅に基づいて href 属性を設定
function setHrefBasedOnScreenWidth() {
    if (window.innerWidth >= 768) {
        telLink.href = "#footer";
    } else {
        telLink.href = "tel:000000000";
    }
}

// 初期設定と画面サイズ変更時に設定を更新
setHrefBasedOnScreenWidth();
window.addEventListener('resize', setHrefBasedOnScreenWidth);