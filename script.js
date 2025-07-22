// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

const num = 8;
const dots = [];

for (let i = 0; i < num; i++) {
  const d = document.createElement('div');
  d.classList.add('dot');
  document.body.appendChild(d);
  dots.push({el: d, x: 0, y: 0});
}

let mouse = {x: 0, y: 0};

document.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animate() {
  let x = mouse.x;
  let y = mouse.y;

  dots.forEach((dot, index) => {
    dot.el.style.left = x + 'px';
    dot.el.style.top = y + 'px';
    dot.x += (x - dot.x) * 0.3;
    dot.y += (y - dot.y) * 0.3;
    dot.el.style.transform = `translate(${dot.x - x}px, ${dot.y - y}px)`;
    x = dot.x;
    y = dot.y;
  });

  requestAnimationFrame(animate);
}

animate();
