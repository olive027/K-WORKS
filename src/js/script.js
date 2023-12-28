
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
	// swiper
	// const swiper = new Swiper(".swiper1", {
	// 	loop: true,
	// 	autoplay: {
	// 		delay: 2500,
	// 		disableOnInteraction: false,
	// 	},
	// 	effect: 'fade',
	// 	speed: 2500,
	// 	allowTouchMove: false,
	// });

	// recruitのswiper
	const swiper = new Swiper(".swiper", {
		loop: true, // ループ有効
		slidesPerView: 2, // 一度に表示する枚数
		spaceBetween: 10,  //カード間のpx
		breakpoints: {
			// スライドの表示枚数：767px以上の場合
			767: {
				slidesPerView: 4,
			}
		},
		speed: 4000, // ループの時間
		allowTouchMove: false, // スワイプ無効
		autoplay: {
			delay: 0, // 途切れなくループ
			pauseOnMouseEnter: true,
      disableOnInteraction: false,
		},
	});

	// headerのスクロールが止まったら背景色
let timeout;
$(window).scroll(function(){
	$(".header").addClass('active');

	clearTimeout(timeout);

	timeout = setTimeout(function(){
		$(".header").removeClass('active');
	},300);
});

// hamburger
$('.js-hamburger').click(function(){
	$('.js-hamburger').toggleClass('is-active');
	// $('.js-sp-nav').fadeToggle(600);
	$('html').toggleClass('is-fixed'); //ハンバーガー展開時に背景を固定
	$('.js-sp-nav').toggleClass('is-active'); //右からメニューが出てくる等の場合はこっちの記述
});














});

