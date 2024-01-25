let features = document.querySelector('.features');
let company = document.querySelector('.company');
let downbar = document.querySelector('.downbar');
let downbar2 = document.querySelector('.downbar2');
let svg1 = document.querySelector('.svg1');
let svg2 = document.querySelector('.svg2');
let svg3 = document.querySelector('.svg3');
let svg4 = document.querySelector('.svg4');


// Features hover
features.addEventListener("mouseover", () => {
  downbar.setAttribute("style", "display: block;");
  svg1.setAttribute("style", "display: none;");
  svg2.setAttribute("style", "display: block;");
})

features.addEventListener("mouseout", () => {
  downbar.setAttribute("style", "display: none;");
  svg1.setAttribute("style", "display: block;");
  svg2.setAttribute("style", "display: none;");
})

//Company hover
company.addEventListener("mouseover", () => {
  downbar2.setAttribute("style", "display: block;");
  svg3.setAttribute("style", "display: none;");
  svg4.setAttribute("style", "display: block;");
})

company.addEventListener("mouseout", () => {
  downbar2.setAttribute("style", "display: none;");
  svg3.setAttribute("style", "display: block;");
  svg4.setAttribute("style", "display: none;");
})