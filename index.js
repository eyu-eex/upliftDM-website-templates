const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', (e)=>{
    menu.classList.toggle('hidden')
})