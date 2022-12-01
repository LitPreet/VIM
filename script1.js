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


  hammburger.addEventListener("click",(e)=>{
    hammburger.classList.toggle("active");
    navBar.classList.toggle("black")
    header.classList.toggle("black")
    navmenu.classList.toggle("active");
    document.body.classList.toggle('fixed-position');
})

