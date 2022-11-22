
const header = document.querySelector("header");
const navBar = document.querySelector(".navbar");
const cursor = document.querySelector(".cursor");
const navBag = document.querySelector(".nav-bag");
const hammburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-ul");
const navItem = document.querySelectorAll(".nav-item")
const navLogo = document.querySelector(".nav-logo");
const heading = document.querySelector(".h1");
const heading2 = document.querySelector(".h2");
const fenty = document.querySelector(".fenty");

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




hammburger.addEventListener("click",(e)=>{
    hammburger.classList.toggle("active");
    navBar.classList.toggle("black")
    header.classList.toggle("black")
    navmenu.classList.toggle("active");
    document.body.classList.toggle('fixed-position');
})
// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click"),()=>{
//     hammburger.classList.remove("active");
//     navmenu.classList.remove("active")
// })
