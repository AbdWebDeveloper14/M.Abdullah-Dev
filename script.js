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

// Array of projects
const projects = [
    {
        title: "Apple Clone",
        summary: "Apple.com inspired responsive website built with HTML, CSS & JS.",
        link: "https://applecom-five.vercel.app/",
        image: "images/apple.com.png"
    },
    {
        title: "Pokemon Clone",
        summary: "Pokemon.com style UI made with HTML, CSS, and animations.",
        link: "https://pokemoncom.vercel.app/",
        image: "images/pokemon.png"
    },
    {
        title: "Frontend Bootcamp",
        summary: "Bootstrap 5 based training site fully responsive.",
        link: "https://frontend-boot-camp-omega.vercel.app/",
        image: "images/bootcamp.png"
    },
    {
        title: "Products Hub",
        summary: "E-commerce style products showcase with responsive design.",
        link: "https://products-hub-mu.vercel.app/",
        image: "images/products-hub.png"
    },
    {
        title: "Hiring Mine Clone",
        summary: "Job portal clone built using HTML, CSS & JS.",
        link: "https://hiringminecom.vercel.app/",
        image: "images/hiring-mine.png"
    },
    {
        title: "AI Assistance",
        summary: "Interactive AI assistant interface with modern design.",
        link: "https://ai-assistance-hazel.vercel.app/",
        image: "images/ai-assistance.png"
    },
    {
        title: "Bus Ticket System",
        summary: "Bus ticket booking responsive website using HTML, CSS & JS.",
        link: "https://bus-ticket-gules.vercel.app/",
        image: "images/bus-ticket.png"
    },
    {
        title: "Compu Parts",
        summary: "Computer parts selling responsive e-commerce UI.",
        link: "https://compu-parts.vercel.app/",
        image: "images/compu-parts.png"
    },
    {
        title: "Sales Management DashBoard",
        summary: "This is an Sales Management Dashboard project. made with Css, Html, javascript",
        link: "https://sales-management-dashboard-ten.vercel.app",
        image: "images/dashboard.png"
    }
];

// Render projects
const projectsContainer = document.getElementById('projects-container');

projects.forEach(p => {
    const projectBox = document.createElement('div');
    projectBox.classList.add('project-box');
    projectBox.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <a href="${p.link}" target="_blank" class="btn">View Live</a>
    `;
    projectsContainer.appendChild(projectBox);
});

// Animation on scroll
const revealProjects = () => {
    const triggerBottom = window.innerHeight * 0.85;
    document.querySelectorAll('.project-box').forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show-project');
        }
    });
};

window.addEventListener('scroll', revealProjects);
revealProjects();

window.addEventListener("load", () => {
        setTimeout(() => {
            const loader = document.getElementById("loader");
            loader.classList.add("hide");

            setTimeout(() => {
                loader.remove();
            }, 600); // same as CSS transition
        }, 2000);
});

