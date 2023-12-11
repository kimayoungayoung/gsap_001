document.addEventListener("DOMContentLoaded", function () {
  Splitting(); // 텍스트 분활
  // 문서에 있는 모든 컨텐츠가 로드되면 실행
  luxy.init(); // luxy.js 실행
  gsap.registerPlugin(ScroolTrigger); // gsap 플러그인 등록

  // GSAP 애니메이션
  // 메인 텍스트 스크롤 업 효과
  const gTL = gsap.timeline(); // 타임라인이 등록이 되면 from to 효과에 이른 연속 효과 사용을 묶을 수 있음
  gTL.from(".title .char", 1, {
    opacity: 0,
    yPercent: 130,
    ease: "expo.out",
    stagger: 0.06,
  });

  // 글자 간격 줄어드는 효과
  //let chars = document.querySelectorAll('.title .char');
  //let marginStart = 30;
  //let marginEnd = 10;

  //gTl.from(chars, {
  //duration: 1,
  //opacity: 0,
  //ease: 'linear',
  //onUpdate: function () {
  //let progress = this.progress();
  //let currentMargin = marginStart + (marginEnd - marginStart) * progress;
  //chars.forEach((char) => {
  //char.style.margin = `0 ${currentMargin}px`;
  //});
  //},
  //});

  // 메인 이미지 애니메이션
  gTL.to(
    ".header__img",
    2, // 애니메이션 지속 시간 2초
    {
      // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      clipPath: "circle(140.7% at 0% 100%)",
      scale: 1.1,
      ease: "expo.out",
    },
    "1" // 선도에 진행된 효과가 끝나기 1초 전에 진행
  );

  // 하단 텍스트 애니메이션
  gTL.from(
    ".header__marq",
    2,
    {
      opacity: 0,
      yPercent: 100,
      ease: "expo.out",
    },
    "1,2"
  );

  // 화면 스크롤 시 애니메이션 효과
  gsap.to("");
});
