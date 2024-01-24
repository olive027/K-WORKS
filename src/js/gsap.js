
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


//======================== mvアニメーション=====================
//=====================================================================
//初期値
gsap.set('.mv__title', {
	y: 50,
});
gsap.set('.header', {
	y: -50,
});

//timeline
var tl = gsap.timeline();

tl.to(".mv__bg-circle",{
	autoAlpha: 1,
	delay: 0.3,
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
.to(".mv__title", 1.3,{ //MVタイトルアニメーション
  	autoAlpha: 1,
		y: '0px',
  },"-=5%")
.to('.header', {
	autoAlpha: 1,
	y: 0,
});

	//======================== section-titleアニメーション====================================================================
//=====================================================================
var sectionTitle = document.querySelectorAll('.js-section-title');
sectionTitle.forEach((target) => {
	// h2タグ内のテキストを一文字ずつ分割
	target.innerHTML = target.textContent.replace(/\S/g,'<span>$&</span>')
});

gsap.utils.toArray(sectionTitle).forEach((t) => {

	gsap.fromTo( t.querySelectorAll("span"),{ //アニメーションを適用するspan要素を取得
		autoAlpha: 0,
		x: -50,
	},{
		autoAlpha: 1,
		x: 0,
		stagger: 0.1,
		scrollTrigger: {
			trigger: t,
			start: "top 80%",
			// markers: true,
		}
	});
});

//======================== bg-text アニメーション=====================
//=====================================================================
gsap.utils.toArray('.bg-text').forEach((t) => {

	gsap.fromTo( t,{
		autoAlpha: 0,
		x: "-100%",
	},{
		autoAlpha: 1,
		x: 0,
		scrollTrigger: {
			trigger: t,
			start: "70% 80%",
			// markers: true,
		}
	});
});

//======================== about本文テキストアニメーション=======================================================================
//=====================================================================

gsap.utils.toArray('.about__text-p').forEach((t) => {

	gsap.fromTo(t,{
		yPercent: 100,
		// autoAlpha: 0,
	},{
		yPercent: -100,
		// autoAlpha: 1,
		// ease: "none",
		scrollTrigger: {
			trigger: t,
			start: "top 70%",
			end: "bottom top",
			scrub: 1,
		}
	});
	gsap.fromTo(t,{
		autoAlpha: 0,
	},{
		autoAlpha: 1,
		// ease: "none",
		scrollTrigger: {
			trigger: t,
			start: "top 70%",
			end: "bottom 60%",
			scrub: 1,
		}
	});
});

// var tl_2 = gsap.timeline();

gsap.fromTo('.about__text-main', {
	autoAlpha: 0,
	y: "100%",
},{
	autoAlpha: 1,
	y: 0,
	duration: 1.5,
	scrollTrigger: {
		trigger: ".about__text-main",
		start: "top 80%",
		// scrub: true,
	}
});

//======================== service背景色アニメーション=====================================================================
//=====================================================================
gsap.from(".service", {
	duration: 1,
	backgroundColor: "transparent",
	ease: "none",
	scrollTrigger: {
		trigger: ".service",
		start: "top 90%",
		end: "bottom bottom",
		scrub: true,
	},
});

// セレクタ ".js-image" で要素を取得
// const items = gsap.utils.toArray(".js-image");

// 各要素に対してアニメーションを設定
// items.forEach((item) => {
//   gsap.fromTo(
//     item.querySelector("img"), // アニメーションを適用する画像要素を取得
//     {
//       yPercent: 0, // パララックス前の要素の位置
//     },
//     {
//       yPercent: -30, // 上に要素の幅の1/5分移動
//       ease: "none", // イージングなし
//       scrollTrigger: {
//         trigger: item, // アニメーションのトリガー要素
//         start: "top bottom", // アニメーション開始位置
//         end: "bottom top", // アニメーション終了位置
//         scrub: 1, // 動作を遅らせる
//       },
//     }
//   );
// });
//======================== service-body アニメーション=====================================================================
//=====================================================================
gsap.utils.toArray('.js-body').forEach((t) => {

	gsap.fromTo( t,{
		autoAlpha: 0,
		y: 100,
	},{
		autoAlpha: 1,
		y: 0,
		duration: 1,
		scrollTrigger: {
			trigger: t,
			start: "top 70%",
			// markers: true,
		}
	});
});



});

