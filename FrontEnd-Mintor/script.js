let features = document.querySelector(".features");
let company = document.querySelector(".company");
let downbar = document.querySelector(".downbar");
let downbar2 = document.querySelector(".downbar2");
let svg1 = document.querySelector(".svg1");
let svg2 = document.querySelector(".svg2");
let svg3 = document.querySelector(".svg3");
let svg4 = document.querySelector(".svg4");
let svg5 = document.querySelector(".sidebar-icon");
let svg6 = document.querySelector(".close-icon");
let nav = document.getElementsByTagName("div");
let navigator = document.querySelector(".navigator");

let nav3 = nav[3];
let width = screen.width;

if (width > 375) {
  nav3.classList.add("desktop-menu");

  // Features hover
  features.addEventListener("mouseover", () => {
    downbar.setAttribute("style", "display: block;");
    svg1.setAttribute("style", "display: none;");
    svg2.setAttribute("style", "display: block;");
  });

  features.addEventListener("mouseout", () => {
    downbar.setAttribute("style", "display: none;");
    svg1.setAttribute("style", "display: block;");
    svg2.setAttribute("style", "display: none;");
  });

  //Company hover
  company.addEventListener("mouseover", () => {
    downbar2.setAttribute("style", "display: block;");
    svg3.setAttribute("style", "display: none;");
    svg4.setAttribute("style", "display: block;");
  });

  company.addEventListener("mouseout", () => {
    downbar2.setAttribute("style", "display: none;");
    svg3.setAttribute("style", "display: block;");
    svg4.setAttribute("style", "display: none;");
  });
} else {

  nav3.classList.remove("desktop-menu");

  // //Phone section
  svg5.addEventListener("click", () => {
    navigator.setAttribute("style", "display: block;");
    svg5.setAttribute("style", "display: none;");
    svg6.setAttribute("style", "display: block;");
  });

  svg6.addEventListener("click", () => {
    navigator.setAttribute("style", "display: none;");
    svg6.setAttribute("style", "display: none;");
    svg5.setAttribute("style", "display: block;");
  });
}

// if (width <= 375) {
//   features.addEventListener("click", () => {
//     if (!downbar.classList.contains("active")) {
//       downbar.classList.add("active");
//       downbar.setAttribute("style", "display: none;");
//       svg1.setAttribute("style", "display: block;");
//       svg2.setAttribute("style", "display: none;");
//     } else {
//       downbar.classList.remove("active");
//     }
//   });
//   company.addEventListener("click", () => {
//     if (!downbar2.classList.contains("active")) {
//       downbar2.classList.add("active");
//       downbar2.setAttribute("style", "display: none;");
//       svg3.setAttribute("style", "display: block;");
//       svg4.setAttribute("style", "display: none;");
//     } else {
//       downbar2.classList.remove("active");
//     }
//   });
// }