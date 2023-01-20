const items = document.querySelectorAll("[data-slider-img]")
const nbSlide = items.length
const next = document.querySelector("#arrow_right")
const previous = document.querySelector("#arrow_left")

let count = 0

if(items) {

function nextSlide() {
    items[count].classList.remove("active")

    if(count < nbSlide - 1) {
        count++
    } else {
        count= 0
    }

    items[count].classList.add("active")
}

if(next) {

next.addEventListener("click", nextSlide)

}

function previousSlide() {
    items[count].classList.remove("active")

    if(count > 0) {
        count--;
    } else {
        count= nbSlide - 1;
    }

    items[count].classList.add("active")
}

if(previous) {

previous.addEventListener("click", previousSlide)

}

function keyPress(e){

    if(e.keyCode === 37){
        previousSlide()
    } else if(e.keyCode === 39){
        nextSlide()
    }
}

document.addEventListener("keydown", keyPress)

}
