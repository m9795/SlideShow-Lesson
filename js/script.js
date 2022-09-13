$(".theTarget").skippr({
  transition : 'fade', /* 画像の切り替わり方("fade" or "slide") */
  speed : 1000, /* 切り替わりに要する時間 */
  // ↓イージング関数 アニメーションの速度の強弱などの変化がつけられる
  easing : 'easeOutQuart',
  navType : 'block', /* 画像下部の枚数ナビの形("block" or "buble")*/
  childrenElementType : 'div', /* 子要素の種類("div" or "img") */
  arrows : true, /* ナビ矢印の有無 */
  autoPlay : false, /* 自動再生 */
  autoPlayDuration : 5000, /* 自動再生の切り替わる間隔 */
  keycoardOnAlways : true, /* キーボードの矢印キーでスライド送り */
  hidePrevious : false /* 1枚目のスライド表示時 戻る矢印を隠すか */
});
