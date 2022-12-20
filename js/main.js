$(".mainVisual .inner ").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
  pauseOnFocus: false,
  dots: false,
  fade: true,
  arrows: false,
});

var Name = ["CREATIVE", "COOPERATION", "MAKE A WONDERFUL WORLD", "SINCERITY"];
var Name02 = [
  "창의적 시각으로 건설 이상향을 만들어갑니다",
  "함께 멀리 가기 위한 협동과 상생의 건설을 빚어냅니다.",
  "아름다운 세상을 만들어 가는 KCC건설.",
  "땀의 진실로 만드는 감동의 건설을 짓습니다",
];

$(".mainVisual .inner").on("init reInit afterChange", function (e, s, c) {
  $(".main_slick .inner figure")
    .eq(c + 5)
    .addClass("on")
    .siblings()
    .removeClass("on");
  $(".Name").text(Name[c]);
  $(".Name02 ").text(Name02[c]);
});

var Name03 = [
  "MAKE A WONDERFUL WORLD",
  "김포 한강 2차 KCC스위첸",
  "동탄-수원 국도",
  "KCC 대죽3공장",
];

$(".mainVisual .inner").on("init reInit afterChange", function (e, s, c) {
  $(".main_slick .inner figure")
    .eq(c + 5)
    .addClass("on")
    .siblings()
    .removeClass("on");
  $(".Name03").text(Name03[c]);
});

$(".mainVisual .arrows i:first-child").on("click", function () {
  $(".inner").slick("slickPrev");
});
$(".mainVisual .arrows i:last-child").on("click", function () {
  $(".inner").slick("slickNext");
});

$(".mainVisual").on("init afterChange", function (e, s, c) {
  $(".num span").text(c ? c + 1 : 1);
  $(".num strong").text(s.slideCount);
});
