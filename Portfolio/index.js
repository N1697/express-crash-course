const header = document.querySelector("header");
const heartIcons = document.querySelectorAll(".fa-heart");
let heartIconClicked = false;

/*Header animation*/
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

/*Heart icon changes color when clicked*/
heartIcons.forEach(element => {
    element.addEventListener("click", () => {
        if(heartIconClicked == false){
            heartIconClicked = true;
            element.style.color = "red";
        }
        else if(heartIconClicked == true){
            heartIconClicked = false;
            element.style.color = "white";
        }
    })
});

/*3D text animation*/
let typingEffect = new Typed(".multiText", {
    strings: ["Nghi", "Coder", "Designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});


/*Menu icon on small screen*/
let menuIcon = document.querySelector("#menuIcon");
let navBar = document.querySelector(".navBar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navBar.classList.remove("active");
}

/*Hide [Hire Me] button on small screen*/
let hireMe = document.querySelector(".hireMe-btn");
hireMe.style.position = "absolute";
hireMe.style.display = "none";


/*Scroll reveal effect*/
const scrollReveal = ScrollReveal({
    distance: "20px",
    duration: 2000,
    reset: true
});
scrollReveal.reveal(".home", {delay: 150, origin: "bottom"});
scrollReveal.reveal(".aboutMe, .services, .portfolio, .contact", {delay: 200, origin: "bottom"});
