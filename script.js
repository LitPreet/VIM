
const header = document.querySelector("header");
const navBar = document.querySelector(".navbar");
const cursor = document.querySelector(".cursor");
const navBag = document.querySelector(".nav-bag");
const hammburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-ul");
const navItem = document.querySelectorAll(".nav-ul li")
const navLogo = document.querySelector(".nav-logo");
const heading = document.querySelector(".h1");
const heading2 = document.querySelector(".h2");
const fenty = document.querySelector(".fenty");
const btns = document.querySelectorAll(".btn");
const hand = document.querySelectorAll(".hand1");

// const Locoscroll = new LocomotiveScroll({
//     el:document.querySelector("[data-scroll-container]"),
//     smooth:true,
//     smartphone:{
//      smooth:false
//     }
//  });

hammburger.addEventListener("click",(e)=>{
  hammburger.classList.toggle("active");
  console.log("hii")
  navBar.classList.toggle("black")
  header.classList.toggle("black")
  navmenu.classList.toggle("active");
  document.body.classList.toggle('fixed-position');
})



// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.ml13');
textWrapper.forEach(text=>{
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
})

anime.timeline({loop: false})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  })

let mm = new MagnetMouse({
    magnet: {
      element: '.magnet'
    }
  });
  
  mm.init();


//  const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = offset * 0.8 + "px";
//   DIV 1 background will move slower than other elements on scroll.
// });


document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})
navLogo.addEventListener("mouseenter", (e) => {
    cursor.classList.add("hover")
})
navLogo.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("hover")
})


navBag.addEventListener("mouseenter", (e) => {
    cursor.classList.add("hover")
})
navBag.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("hover")
})
heading.addEventListener('mouseenter',(e)=>{
    console.log("hii")
    cursor.classList.add("circle")
    cursor.classList.add("hover1")
})
heading.addEventListener('mouseleave',(e)=>{
    cursor.classList.remove("circle")
    cursor.classList.remove("hover1")
})
heading2.addEventListener('mouseenter',(e)=>{
    cursor.classList.add("circle")
    cursor.classList.add("hover1")
})
heading2.addEventListener('mouseleave',(e)=>{
    cursor.classList.remove("circle")
    cursor.classList.remove("hover1")
})
navItem.forEach(box => {
    box.addEventListener('mouseenter', (e)=>{
     cursor.classList.add("hover");
    });
  });
  navItem.forEach(box => {
    box.addEventListener('mouseleave', (e)=>{
     cursor.classList.remove("hover");
    });
  });


