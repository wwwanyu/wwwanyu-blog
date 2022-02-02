const rotateEng = document.querySelector('#rotateEng');
const header = document.querySelector('.header');
const heading = document.querySelector('.heading');
const globalnav = document.querySelector('.global-nav');
const lazyTarget = document.querySelectorAll('.ioLazyload');
const front = gsap.utils.toArray('.front');
const cave = gsap.utils.toArray('.cave');
const caveCaption = gsap.utils.toArray('#cave figure figcaption');
let tl = gsap.timeline();

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('loaded');

        observer.disconnect();
      }
    });
  });
  io.observe(target)
};

lazyTarget.forEach(lazyLoad);

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
    header.classList.add('position-fixed', 'scrolled', 'z-index-1');
    heading.classList.add('scrolled');
    globalnav.classList.add('scrolled');
  }else{
    header.classList.remove('position-fixed', 'scrolled', 'z-index-1');
    heading.classList.remove('scrolled');
    globalnav.classList.remove('scrolled');
  }
}

gsap.registerPlugin(ScrollTrigger);

front.forEach(front => {
  gsap.to(front,{
    scrollTrigger: {
      trigger: front,
      scrub: true,
    },
    scale: 2,
    xPercent: 20,
    duration: 3,
  })
});

gsap.to(".back", {
  scrollTrigger: {
    trigger: ".back",
    scrub: true,
  },
  x: "+=50",
  duration: 3,
  xPercent: 50,
  opacity: 0.8
});

cave.forEach((cave, i) => {
  gsap.to(cave,{
    scrollTrigger: {
      trigger: cave,
      start: 'top 50px',
      end: 'bottom 50px',
      toggleActions: "play none reverse none",
      scrub: true,
    },
    duration: 8,
    scale: 0,
    opacity: 0,
  })
});

tl.to(caveCaption,{
  opacity:0,
  x: -100
}).to(caveCaption,{
  opacity:1,
  x: 0,
})

caveCaption.forEach((caveCaption, i) => {
  gsap.to(caveCaption,{
    scrollTrigger: {
      trigger: caveCaption,
      scrub: true,
      start: 'top center',
      end: '+=200',
      markers:true,
      anticipatePin: 1,
    },
    duration: 8,
    xPercent: 30,
  })
});

gsap.to('.cave-cover img', {
  scrollTrigger: {
    trigger: '.cave-cover',
    start: 'top center',
    end: '+=200',
    scrub: true,
  },
  duration: 3,
  scale: 0.3,
  opacity: 1,
  yPercent: -10,
})
