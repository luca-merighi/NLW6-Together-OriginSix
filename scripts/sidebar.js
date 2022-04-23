const body = document.querySelector('body')
const sidebar = document.querySelector('#sidebar')

const toggleSidebar = document.querySelector('.toggle-sidebar-icons')
const openIcon = document.querySelector('.open-sidebar-icon')
const closeIcon = document.querySelector('.close-sidebar-icon')

toggleSidebar.addEventListener('click', () => {
    body.classList.toggle('lock-scroll')
    sidebar.classList.toggle('show')
    openIcon.classList.toggle('hide')
    closeIcon.classList.toggle('hide')
})

toggleSidebar.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        body.classList.toggle('lock-scroll')
        sidebar.classList.toggle('show')
        openIcon.classList.toggle('hide')
        closeIcon.classList.toggle('hide')
    }
})

const sidebarLinks = document.querySelectorAll('#sidebar .menu-links li a')

sidebarLinks.forEach((link) => {
    link.addEventListener('click', () => {
        body.classList.toggle('lock-scroll')
        sidebar.classList.toggle('show')
        openIcon.classList.toggle('hide')
        closeIcon.classList.toggle('hide')
    })
})

sidebarLinks.forEach((link) => {
    link.addEventListener('keypress', (event) => {
        if(event.keyCode === 13) {
            body.classList.toggle('lock-scroll')
            sidebar.classList.toggle('show')
            openIcon.classList.toggle('hide')
            closeIcon.classList.toggle('hide')
        }
    })
})