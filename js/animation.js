window.addEventListener("scroll", reveal)

function reveal() {
    const reveals = document.querySelectorAll("[reveal-fade]")
    
    reveals.forEach(reveal => {
        let windowheight = window.innerHeight
        let revealTop = reveal.getBoundingClientRect().top
        let revealPoint = 150
        
        if(revealTop < windowheight - revealPoint) {
            reveal.classList.add("active")
        } else {
            reveal.classList.remove("active")
        }
        
    })

}

/*
for(let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight
    let revealTop = reveals[i].getBoundingClientRect().top
    let revealPoint = 150
    
    if(revealTop < windowheight - revealPoint) {
        reveals[i].classList.add("active")
    } else {
        reveals[i].classList.remove("active")
    }
    
} */






