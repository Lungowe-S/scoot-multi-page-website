// JavaScript code for the hamburger menu.
const mobileMenu = document.querySelector(".hamburger__menu")
const navMenu = document.querySelector(".nav__menu")
const navButton = document.querySelector(".nav__button")
const navIcon = document.querySelector('.icon')

mobileMenu.addEventListener("click", event => {
    navIcon.classList.toggle("open")
    if (navIcon.classList.contains("open")) {
        navIcon.src = "/assets/icons/close.svg"
    } else {
        navIcon.src = "/assets/icons/hamburger.svg"
    }

    navMenu.classList.toggle("nav__open")
    navButton.classList.toggle("active")

   
})


// JavaScrip code for the accordion
const accordions = Array.from(document.querySelectorAll(".accordion"))
const accordionIndicator = document.querySelectorAll(".accordion__indicator");

accordions.forEach(accordion => {
    // Find the accordion header
    const accordionHeader = accordion.querySelector(".accordion__header")

    //Add event listener to the accordion headers
    accordionHeader.addEventListener("click", event => {
        //Toggle the is-open class
        accordion.classList.toggle("is-open")
    })
})