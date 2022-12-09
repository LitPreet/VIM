
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
const more = document.querySelector(".more");
const MyBTN = document.getElementById("myBtn");
const minBtn = document.querySelector(".min");
const plusBtn = document.querySelector(".plus");

MyBTN.addEventListener("click",()=>{
more.classList.toggle("none");
})
  
hammburger.addEventListener("click",()=>{
    hammburger.classList.toggle("active");
    // navBar.classList.toggle("black")
    header.classList.toggle("black")
    navmenu.classList.toggle("active");
    document.body.classList.toggle('fixed-position');
  })
  
  //fixed header on scroll
  
  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function(){
    
  //   let currentScroll = window.pageYOffset;
    
  //   if (prevScrollpos > currentScroll) {
  //     navBar.style.top = "0";
  //     navBar.classList.add("back-filter");
  //   } 
  //   if (prevScrollpos < currentScroll){
  //     navBar.style.top = "-80px";
  //     navBar.classList.remove("back-filter");
  //   }
  //   if(currentScroll == 0)
  //   {
  //     navBar.classList.remove("back-filter");
  //   }
    
  //   prevScrollpos = currentScroll;
  // }
  
  
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

minBtn.addEventListener("mouseenter", (e) => {
  cursor.classList.add("hover4")
})
minBtn.addEventListener("mouseleave", (e) => {
  cursor.classList.remove("hover4")
})
plusBtn.addEventListener("mouseenter", (e) => {
  cursor.classList.add("hover4")
})
plusBtn.addEventListener("mouseleave", (e) => {
  cursor.classList.remove("hover4")
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