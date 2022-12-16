
const header = document.querySelector("header");
const navBar = document.querySelector(".navbar");
const cursor = document.querySelector(".cursor");
const navBag = document.querySelector(".nav-bag");
const cartBox = document.querySelector(".cart-box");
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
hammburger.addEventListener("click",()=>{
  hammburger.classList.toggle("active");
  // navBar.classList.toggle("black")
  header.classList.toggle("black")
  navmenu.classList.toggle("active");
  document.body.classList.toggle('fixed-position');
})

//fixed header on scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
  
  let currentScroll = window.pageYOffset;
  
  if (prevScrollpos > currentScroll) {
    navBar.style.top = "0";
    navBar.classList.add("back-filter");
  } 
  if (prevScrollpos < currentScroll){
    navBar.style.top = "-80px";
    navBar.classList.remove("back-filter");
  }
  if(currentScroll == 0)
  {
    navBar.classList.remove("back-filter");
  }
  
  prevScrollpos = currentScroll;
}





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

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})
navLogo.addEventListener("mouseenter", (e) => {
    cursor.classList.add("hover");
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


  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".review1",{
      x: 130,
      duration:3,
      start: "",
      stop: "top",
      scrollTrigger: {
          trigger: ".review2",
          
          scrub: true,
          toggleActions: "restart none none none",
          
      },
     
  })
  gsap.to(".review2",{
      x: -130,
      duration:3,
      scrollTrigger: {
          trigger: ".review2",
          // start : "top 80%",
          // end: "top 30%",
          scrub: true,
          toggleActions: "restart none none none",
         
      }
  })
  
  navBag.addEventListener("click",()=>{
    cartBox.classList.toggle("enter");
  })