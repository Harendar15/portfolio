const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitchers = document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click", () => {
   styleSwitchers.classList.toggle("open");

})

window.addEventListener("scroll",() => {
    if(styleSwitchers.classList.contains("open"))
        {
            styleSwitchers.classList.remove("open");
        }
})



const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");  // enable selected
        } else {
            style.setAttribute("disabled", "true"); // disable others
        }
    });
}


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click" , () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
