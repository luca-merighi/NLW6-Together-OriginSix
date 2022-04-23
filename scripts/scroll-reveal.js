const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
        #home .img, #home .text,
        #about .img, #about .text,
        #services .header-text, #services .cards,
        #testimonials .text, #testimonials .testimonials-container,
        #contact .text, #contact .contacts-list
    `, {interval: 100}
)