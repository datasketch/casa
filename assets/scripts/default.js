const menuTrigger = document.getElementById('menu-trigger')
const navMenu = document.getElementById('nav-menu')

menuTrigger.addEventListener('click', function() {
  navMenu.classList.toggle('hidden')
  navMenu.classList.toggle('flex')
})