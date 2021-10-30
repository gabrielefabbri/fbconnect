const gabriele = document.querySelector("h1");
const jack = document.querySelector(".jack");


document.addEventListener("scroll", (evt) => {
  evt.preventDefault();
  var w = document.documentElement.scrollTop;
  gabriele.style.transform = ("translateX(-" + w * 0.30 + "px)");
  
  let scale = 1+(w/2000);
  jack.style.transform = ("scale(" + scale + ")");
  console.log(scale);
});