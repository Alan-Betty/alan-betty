// typing Animation
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Video Editor", "YouTuber", "Web Designer", "Web Developer", "Video Editor", "YouTuber","Web Designer", "Web Developer", "Video Editor", "YouTuber", "Web Designer", "Web Developer", "Video Editor", "YouTuber", "Web Designer", "Web Developer", "Video Editor", "YouTuber", ",wait nvm ,{hello are you still here ?}", ",wait nvm ,{this is an easter egg}", ",wait nvm ,{the msg's in contact page go in my mail}" ,",wait nvm ,{I READ And Give REPLIES}" , "     "],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
// Aside
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (leti = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionToggleBtn();
        }
    })
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    showSection(this);
    updateNav(this);
})
const navToggleBtn = document.querySelector(".nav-toggle")
aside = document.querySelector(".aside");
navToggleBtn.addEventListener("click", () => {
    asideSectionToggleBtn();
})
function asideSectionToggleBtn()
{
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}

