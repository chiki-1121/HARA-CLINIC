
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




});
