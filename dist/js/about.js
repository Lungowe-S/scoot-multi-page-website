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