// JavaScript code for the hamburger menu.
const mobileMenu = document.querySelector(".hamburger__menu")
const navMenu = document.querySelector(".nav__menu")
const navButton = document.querySelector(".nav__button")
const navIcon = document.querySelector('.icon')
const hero = document.querySelector('.mobile-hero')

mobileMenu.addEventListener("click", event => {
    navIcon.classList.toggle("open")
    if (navIcon.classList.contains("open")) {
        navIcon.src = "/assets/icons/close.svg"
        hero.classList.add('overlay')
    } else {
        navIcon.src = "/assets/icons/hamburger.svg"
        hero.classList.remove('overlay')
    }

    navMenu.classList.toggle("nav__open")
    navButton.classList.toggle("active")
    //hero.classList.add('overlay')

   
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