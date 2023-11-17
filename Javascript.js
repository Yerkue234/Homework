const about = document.querySelector('.about')
const skills = document.querySelector('.skills')
const contact = document.querySelector('.contact')
const home = document.querySelector('.home')
const section = document.getElementById('home')
const icon = document.querySelector('.icon')
const toggleIcon = document.querySelector('.toggle-icon')

const openSonud = new Audio ('./Sound/sound_sound-open.mp3')

about.addEventListener('click',addfunction)
skills.addEventListener('click',myfunction)
contact.addEventListener('click',yourfunction)
home.addEventListener('click',hisfunction)

toggleIcon.addEventListener('click', () =>{
    toggleIcon.classList.toggle('bx-sun')
})


function addfunction(){
    openSonud.play()
}
function myfunction(){
    openSonud.play()
}
function yourfunction(){
    openSonud.play()
}
function hisfunction(){
    openSonud.play()
}
function herfunction(){
    openSonud.play()
}
function open(){
    sun.src = openImg
}

// ICON MENU

function toggleMenu(){
    const menu = document.querySelector('.menu-liske')
    const  Icon= document.querySelector('.hahurger-icon')
    menu.classList.toggle('open')
    Icon.classList.toggle('open')
}