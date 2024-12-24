let autoDirection = document.querySelectorAll('.auto-direction');
autoDirection.forEach((el)=>{
  el.addEventListener('keyup',()=>{
    if(el.value.charCodeAt() < 200){
      el.style.direction = 'ltr';
    }else{
      el.style.direction = 'rtl';
      el.setAttribute("placeholder",el.dataset.ar)
    }
  })
})


const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const openNavBtn = document.querySelector('#menu-bar');
const closeNavBtn = document.querySelector('#x');

navLinks.forEach((link)=>{
  if (window.innerWidth < 800) {
    link.addEventListener('click',()=>{
      nav.style.display = "none";
      closeNavBtn.style.display = "none";
      openNavBtn.style.display = "block";
    })
  }
  link.addEventListener('click',closeNav)
})
function openNav() {
  nav.style.display = 'block';
  closeNavBtn.style.display = 'inline-block';
  openNavBtn.style.display = 'none';
}
openNavBtn.addEventListener('click',openNav)

function closeNav() {
  nav.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click',closeNav)



















let btnTop = document.querySelector(".scroll-to-top");
window.addEventListener('scroll',()=>{
  if(window.scrollY > 300){
    btnTop.style.display = 'block'
  }else{
    btnTop.style.display = 'none'
  }
})

btnTop.addEventListener('click',()=>{
  window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth"
  })
})

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
  document.body.style.overflow = "hidden";
}

function fadeOut(){
  setInterval(loader, 3000)
}
window.addEventListener('load',fadeOut)


