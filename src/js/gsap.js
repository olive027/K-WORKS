
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

//======================== mvタイトルアニメーション=====================
//=====================================================================
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

//======================== 背景円アニメーション=====================
//=====================================================================
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
.fromTo(".mv__title span", { //MVタイトルアニメーション
    autoAlpha: 0,
		y: '50px',
},{
		autoAlpha: 1,
		y: '0px',
		stagger: 0.07, // 0.1秒遅れて順番に再生
  },"-=5%")
	.fromTo('.header', {
		autoAlpha: 0,
		y: 50,
	},{
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
			scrub: 2,
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
			scrub: 2,
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

// セレクタ ".js-trigger" で要素を取得
// const items = gsap.utils.toArray(".js-image");

// 各要素に対してアニメーションを設定
// items.forEach((item) => {
//   gsap.fromTo(
//     item.querySelector("img"), // アニメーションを適用する画像要素を取得
//     {
//       yPercent: 50, // パララックス前の要素の位置
//     },
//     {
//       yPercent: -50, // 上に要素の幅の1/5分移動
//       ease: "none", // イージングなし
//       scrollTrigger: {
//         trigger: item, // アニメーションのトリガー要素
//         start: "top bottom", // アニメーション開始位置
//         end: "bottom top", // アニメーション終了位置
//         scrub: 3, // 動作を遅らせる
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
			start: "top 60%",
			markers: true,
		}
	});
});



});

