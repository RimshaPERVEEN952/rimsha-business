burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-List')
rightNav = document.querySelector('.rightNav')

burger.addEventlistener(' click ', ()=>{
    rightNav.classList.toggle('v-class-Resp');
    navList.classList.toggle('v-class-Resp');
    navbar.classList.toggle('h-class-Resp');
})