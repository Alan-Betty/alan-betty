// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler")
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})


// hide style-switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

//*! light and dark mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("light")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("light"))
    {
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})

//**storing light mode and dark mode in local storage

function LightDarkSelector(){
var SetTheme = document.body;
    SetTheme.classList.toggle("light")
    var theme;
    if(SetTheme.classList.contains("light")){
        console.log("Light mode");
        theme = "Light";
    }else{
        console.log("Dark mode");
        theme = "Dark";
    }
    // save to localStorage
    localStorage.setItem("PageMode", JSON.stringify(theme));
    // ensure you convert to JSON like i have done -----JSON.stringify(theme)
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageMode"));
    console.log(GetTheme);
    if(GetTheme === "Light"){
        document.body.classList = "light";
        icon.querySelector("i").classList.remove("fa-sun")
        icon.querySelector("i").classList.add("fa-moon");
    }else{
        document.body.classList = "";
        icon.querySelector("i").classList.remove("fa-moon"); 
        icon.querySelector("i").classList.add("fa-sun");
    }
}, 5);

//*!Light and Dark mode end



//*! Theme colors start
// Theme colors

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
    // Save the selected color to localStorage
    localStorage.setItem("selectedColor", color);
}

// Load the selected color from localStorage on page load
window.onload = function() {
    let selectedColor = localStorage.getItem("selectedColor");
    if (selectedColor) {
        setActiveStyle(selectedColor);
    } else {
        setActiveStyle("color-1"); // Set the default color if no color is selected
    }
}