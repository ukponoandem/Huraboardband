
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

var typed = new Typed(".text-header", {
  strings: [" A Limitless Speed. Endless Possibilities.", 
    " Always on. Always reliable.",
    "Is Beyond Boundaries.", 
    "Your connection to a boundless world.",
    " At your Reach.", "Is the Connectivity you can Trust." ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
  });

let progress = 0;
const bars = document.querySelectorAll('.progress-bar1');

const interval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(interval);
  } else {
    progress++;

    bars.forEach(bar => {
      bar.style.width = progress + '%';
      bar.textContent = progress + '%';
    });
  }
}, 60);

const popupImage = document.querySelector('.About-image');
const observer = new IntersectionObserver((entries) =>{
      if (entries[0].isIntersecting){
        entries[0].target.classList.add('show')
      }else{
         entries[0].target.classList.remove('show')
      }
},

{})

observer.observe(popupImage);

const progressBar = document.querySelectorAll('.progress-container1');
const progressObserver = new IntersectionObserver((entries) =>{
       entries.forEach(entry=>{
        if (entry.isIntersecting){
          entry.target.classList.add('show')
        }else{
          entry.target.classList.remove('show')
        }
       })
},
  {

rootMargin: "0px 0px 0px 400px"
  })
  progressBar.forEach(img =>(progressObserver.observe(img)))

  const serviceContainner = document.querySelectorAll('.service-box');
  const serviceObserver = new IntersectionObserver((entries) =>{
            entries.forEach(entry =>{
              if (entry.isIntersecting){
                entry.target.classList.add('show')
              }else{
                 entry.target.classList.remove('show')
              }
            })
  },{

    rootMargin:"0px 0px 0px 500px"
  })
serviceContainner.forEach(containner =>(serviceObserver.observe(containner)))

const testimonialContainner = document.querySelectorAll('.testimonial-item');
const testimonialObserver = new IntersectionObserver((entries) =>{
      entries.forEach(entry =>{
         if(entry.isIntersecting){
          entry.target.classList.add('show')
         }else{
           entry.target.classList.remove('show')
         }
})

},{

  rootMargin:"0px 0px 0px 200px"
})

testimonialContainner.forEach(section =>(testimonialObserver.observe(section)));

function togglebar() {
    const toggle = document.getElementById('Navbar-list');
    toggle.classList.toggle('show');

    // Toggle icons
    document.querySelector('.menu-icon').style.display =
        toggle.classList.contains('show') ? 'none' : 'block';

    document.querySelector('.close-icon').style.display =
        toggle.classList.contains('show') ? 'block' : 'none';
}
