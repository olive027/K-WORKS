
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
				slidesPerView: 3,
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
	$('html').toggleClass('is-fixed');　//ハンバーガー展開時に背景を固定
	$('.js-sp-nav').toggleClass('is-active'); //右からメニューが出てくる等の場合はこっちの記述
});

// mv アニメーション
// 対象の要素を取得
const paragraph = document.querySelector(".mv__title-left");

// テキストコンテンツを取得
const textContent = paragraph.textContent;

// テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
const newTextContent = [...textContent]
  .map((char) => `<span>${char}</span>`)
  .join("");
// 新しい文字列をHTMLに挿入
paragraph.innerHTML = newTextContent;
const jsText = ".mv__title-left span";

gsap.set(".mv__bg-circle", {
  autoAlpha: 0
});
gsap.set(jsText, {
	autoAlpha: 0, // アニメーション開始前は透明
	y: 50, // 20px下に移動
});

var tl = gsap.timeline({repeat: -1});

tl.to(".mv__bg-circle",{
	autoAlpha: 1,
	delay: 2,
	ease: "power4.inOut",
  stagger: {
		// each: 0.5, // 0.5秒遅れて順番に再生
		amount: 2,
		from: "random",
  }
})
.to(jsText, {
	  autoAlpha: 1, // アニメーション後は出現(透過率0)
    // y: 0, // 20px上に移動
    // repeat: -1, // リピート無限
    // repeatDelay: 2, // 1.2秒遅れでリピート
    stagger: 0.1, // 0.2秒遅れて順番に再生
  },	"-=1");

});

