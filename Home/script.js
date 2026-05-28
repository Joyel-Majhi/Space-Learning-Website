//Active header sticky
const header = document.querySelector("header");
window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky",window.scrollY > 80)
})

// ACTIVE SCROLL MENU
const liLink = document.querySelectorAll("header,ul li a");
const section = document.querySelectorAll("section");

function activeMenu(){
    let secLength = section.length;
    while(--secLength && window.scrollY + 500 < section[secLength].offsetTop){}
    liLink.forEach(sec => sec.classList.remove("active"));
    liLink[secLength].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);