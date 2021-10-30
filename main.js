const gabriele = document.querySelector("h1");



let brcLeftPrev = gabriele.getBoundingClientRect().top;
let i = 0;

document.addEventListener("scroll", (evt) => {
  evt.preventDefault();
  var w = document.documentElement.scrollTop;
  gabriele.style.transform = ("translateX(-" + w*0.30 + "px)");
});