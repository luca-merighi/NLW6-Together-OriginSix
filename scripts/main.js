function changeHeaderWhenScrolling() {
    const header = document.querySelector('.header')
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight) {
        header.classList.add('shadow')
    } else {
        header.classList.remove('shadow')
    }
}

function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top-button')

    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

const sections = document.querySelectorAll('main section[id]')
function activateLinkAtCurrentSection() {
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop 
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
        
        if(checkpointStart && checkpointEnd) {
            document
            .querySelector('.header .nav .menu-links li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
            document
            .querySelector('.header .nav .menu-links li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

window.addEventListener('scroll', () => {
    changeHeaderWhenScrolling()
    backToTop()
    activateLinkAtCurrentSection()
})