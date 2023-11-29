
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
	$('html').toggleClass('is-fixed'); //ハンバーガー展開時に背景を固定
	$('.js-sp-nav').toggleClass('is-active'); //右からメニューが出てくる等の場合はこっちの記述
});

// section-titleアニメーション
// 対象の要素を取得
// var paragraph = document.querySelector(".mv__title-left");

// // テキストコンテンツを取得
// var textContent = paragraph.innerText;

// // テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
// var newTextContent = textContent.split('').map((char) => `<span>${char}</span>`).join("");
// // 新しい文字列をHTMLに挿入
// paragraph.innerHTML = newTextContent;

// var paragraph2 = document.querySelector(".mv__title-right");

// // テキストコンテンツを取得
// var textContent2 = paragraph2.innerText;

// // テキストコンテンツを一文字ずつ分割して<span>タグで囲んで新しい文字列を作成
// var newTextContent2 = textContent2.split('').map((char) => `<span>${char}</span>`).join("");
// // 新しい文字列をHTMLに挿入
// paragraph2.innerHTML = newTextContent2;
// const jsText2 = ".mv__title-right span";
gsap.registerPlugin(ScrollTrigger);
// mvタイトルアニメーション(上段)
  const target = document.querySelectorAll(".mv__title");
  target.forEach( function (target) {
      let nodes = [...target.childNodes];
      let textBox = '';
      nodes.forEach( function (nodes) {
      if (nodes.nodeType == 3) { //テキストの場合
          let text = nodes.textContent.replace(/\r?\n/g, ''); //テキストから改行コード削除
					text.split('').forEach(function (t, i) {
						if (t !== " ") {
								textBox += '<span>' + t + '</span>';
						} else {
							textBox += t;
						}
					})
			} else if (nodes.contains(nodes) == true) { // テキストではなく、子ノード(=span要素)を持つ
				// そのまま連結
				textBox = textBox + nodes.outerHTML;
			} else { // テキストではなく、br要素などspan要素以外の要素を持つ
				// そのまま連結　※br要素などをspan要素とは別に処理する場合はここに書く
				textBox = textBox + nodes.outerHTML;
			}
		});
		target.innerHTML = textBox;
});

// mvタイトルアニメーション(下段)
// var text = document.querySelectorAll(".mv__title-right");
//   text.forEach( function (container) {
//       let nodes = [...container.childNodes];
//       let textBox = '';
//       nodes.forEach( function (node) {
//       if (node.nodeType == 3) { //テキストの場合
//           let text = node.textContent.replace(/\r?\n/g, ''); //テキストから改行コード削除
// 					text.split('').forEach(function (char, i) {
// 						if (char !== " ") {
// 								textBox += '<span>' + char + '</span>';
// 						} else {
// 							textBox += char;
// 						}
// 					});
// 			} else if (node.contains(nodes) == true) { // テキストではなく、子ノード(=span要素)を持つ
// 				// そのまま連結
// 				textBox = textBox + node.outerHTML;
// 			} else { // テキストではなく、br要素などspan要素以外の要素を持つ
// 				// そのまま連結　※br要素などをspan要素とは別に処理する場合はここに書く
// 				textBox = textBox + node.outerHTML;
// 			}
// 		});
// 		container.innerHTML = textBox;
// });

//circleの初期値
gsap.set(".mv__bg-circle", {
  autoAlpha: 0
});

//timeline
var tl = gsap.timeline();

tl.to(".mv__bg-circle",{
	autoAlpha: 1,
	delay: 1,
	ease: "power4.inOut",
  stagger: {
		// each: 0.5, // 0.5秒遅れて順番に再生
		amount: 4,
		from: "random",
  }
})
.to(".bg-circle-1",{
	y: -20,
  repeat: -1, // リピート無限
	yoyo: true,
	duration: 2.3,
	ease: "none",
}, "<")
.to(".bg-circle-2",{
	y: 20,
  repeat: -1, // リピート無限
	yoyo: true,
	duration: 1.8,
	ease: "none",
}, "<")
.to(".bg-circle-3",{
	y: 30,
  repeat: -1, // リピート無限
	yoyo: true,
	duration: 2.2,
	ease: "none",
}, "<")
.to(".bg-circle-5",{
	y: 10,
  repeat: -1, // リピート無限
	yoyo: true,
	duration: 1.8,
	ease: "none",
}, "<")
.to(".bg-circle-6",{
	y: -30,
  repeat: -1, // リピート無限
	yoyo: true,
	duration: 2,
	ease: "none",
}, "<")
.to(".bg-circle-8",{
	y: -20,
  repeat: -1, // リピート無限
	yoyo: true,
	duration: 1.9,
	ease: "none",
}, "<")
.to(".bg-circle-7",{
	y: -30,
  repeat: -1, // リピート無限
	yoyo: true,
	duration: 2.1,
	ease: "none",
}, "<")
.to(".bg-circle-4",{
	y: 10,
  repeat: -1, // リピート無限
	yoyo: true,
	duration: 1.8,
	ease: "none",
}, "<")
.to(".bg-circle-9",{
	y: -10,
  repeat: -1, // リピート無限
	yoyo: true,
	duration: 1.8,
	ease: "none",
}, "<")
.fromTo(".mv__title span", {
    autoAlpha: 0,
		y: '50px',
},{
		autoAlpha: 1,
		y: '0px',
		stagger: 0.1, // 0.2秒遅れて順番に再生
  },"-=5%");
// .fromTo(".mv__title-right span", {
// 		autoAlpha: 0,// アニメーション後は出現(透過率0)
//     y: '50px',
// },{
//     autoAlpha: 1,
// 		y: '0px',
// 		stagger: 0.1, // 0.2秒遅れて順番に再生
//   },"-=5%");

var sectionTitle = document.querySelectorAll('.js-section-title');
sectionTitle.forEach((target) => {
	// h2タグ内のテキストを一文字ずつ分割
	target.innerHTML = target.textContent.replace(/\S/g,'<span>$&</span>')
});

gsap.utils.toArray(sectionTitle).forEach((t) => {

	var tl2 = gsap.timeline();
	tl2({
		scrollTrigger: {
			trigger: t,
			start: "top 80%",
			// markers: true,
		}
	}).fromTo(t, {
		autoAlpha: 0,
		y: "100%",
	},{
		autoAlpha: 1,
		y: "0%",
		stagger: 0.2,
	});
});

gsap.from(".news", {
  scrollTrigger: {
    trigger: ".news",
    start: "top center",
    end: "bottom bottom",
    scrub: true,
  },
  duration: 5,
  backgroundColor: "#fff",
  ease: "none",
});











});

