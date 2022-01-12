const rotateEng = document.querySelector('#rotateEng');
const header = document.querySelector('.header');
const heading = document.querySelector('.heading');
const globalnav = document.querySelector('.global-nav');

if(rotateEng){
  rotateEng.addEventListener('click', function () {
    rotateEng.classList.toggle('rotate-intro');
  });
}

$('.intro').mousemove(function(e) {
  $('.intro-cursor').eq(0).css({ left: e.pageX, top: e.pageY }); });
  $('.intro').on("mousemove", function(e) { mouseX = e.pageX; mouseY = e.pageY; }
);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('position-fixed', 'scrolled');
    heading.classList.add('scrolled');
    globalnav.classList.add('scrolled');
  }else{
    header.classList.remove('position-fixed', 'scrolled');
    heading.classList.remove('scrolled');
    globalnav.classList.remove('scrolled');
  }
}
