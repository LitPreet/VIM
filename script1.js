const about = document.querySelector(".about");
const header = document.querySelector("header");
const about2 = document.querySelector(".about2");
const cursor = document.querySelector(".cursor");
const navItem = document.querySelectorAll(".nav-ul li")
const navLogo = document.querySelector(".nav-logo");
const navBag = document.querySelector(".nav-bag");
const hammburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-ul");
const navBar = document.querySelector(".navbar");
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})
about.addEventListener('mouseenter',(e)=>{
    console.log("hii")
    cursor.classList.add("circle")
    cursor.classList.add("hover1")
})
about.addEventListener('mouseleave',(e)=>{
    cursor.classList.remove("circle")
    cursor.classList.remove("hover1")
})
about2.addEventListener('mouseenter',(e)=>{
    console.log("hii")
    cursor.classList.add("circle")
    cursor.classList.add("hover1")
})
about2.addEventListener('mouseleave',(e)=>{
    cursor.classList.remove("circle")
    cursor.classList.remove("hover1")
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
  hammburger.addEventListener("click",(e)=>{
    hammburger.classList.toggle("active");
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