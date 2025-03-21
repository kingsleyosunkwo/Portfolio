// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation toggle
const createMobileNav = () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.createElement('div');
    burger.className = 'burger';
    burger.innerHTML = `
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    `;
    document.querySelector('nav').appendChild(burger);

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
};

// Scroll reveal animation
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .project-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Form validation and submission
const validateForm = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    
    if (name && email && message) {
        // Encode the message content for the mailto link
        const encodedSubject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const encodedBody = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        
        // Create and click a temporary link to open the mail client
        const mailtoLink = document.createElement('a');
        mailtoLink.href = `mailto:kingsleyosunkwoofficedesk@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
        mailtoLink.style.display = 'none';
        document.body.appendChild(mailtoLink);
        mailtoLink.click();
        document.body.removeChild(mailtoLink);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Message sent successfully!';
        form.appendChild(successMessage);
        
        // Clear form
        form.reset();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }
    
    return false;
};

// Typing effect for hero section
const typeWriter = () => {
    const text = "Transforming data into actionable insights";
    const heroP = document.querySelector('.hero-content p');
    heroP.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            heroP.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    type();
};

// Get the logo image element
const logoImage = document.querySelector('nav img');

// Function to toggle theme
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        logoImage.src = "./public/mountanlytics.png";
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        logoImage.src = "./public/mountanlytics-darkmode.png";
    }
}

// Function to set initial theme
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.body.setAttribute('data-theme', savedTheme);
    logoImage.src = savedTheme === 'dark' ? 
        "./public/mountanlytics-darkmode.png" : 
        "./public/mountanlytics.png";
}

// Add event listener for theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Set initial theme when page loads
document.addEventListener('DOMContentLoaded', setInitialTheme);

// Update system theme change listener to not override user preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        logoImage.src = newTheme === 'dark' ? 
            "./public/mountanlytics-darkmode.png" : 
            "./public/mountanlytics.png";
    }
});

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    createMobileNav();
    typeWriter();
    window.addEventListener('scroll', revealOnScroll);
    
    // Add form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', validateForm);
}); 


// Language translations
const translations = {
    en: {
        logo: "KO Portfolio",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_credentials: "Credentials",
        nav_news: "News",
        nav_contact: "Contact",
        hero_name: "Kingsley Osunkwo",
        hero_title: "Data Analyst | Urban Technology",
        hero_subtitle: "Insightful analysis for sustainability",
        about_title: "Bio",
        about_text: "Kingsley is a Masters researcher at Umea University, Sweden, specializing in data magnification in urban spaces and urban centered technologies under the guidance of the Department of Geography. He earned his bachelor's from the Federal University of Technology, Owerri, supervised by Tpl. Dr Kalu O. Abaraikwu."
    },
    es: {
        logo: "KO Portafolio",
        nav_about: "Sobre mí",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_credentials: "Credenciales",
        nav_news: "Noticias",
        nav_contact: "Contacto",
        hero_name: "Kingsley Osunkwo",
        hero_title: "Analista de Datos | Tecnología Urbana",
        hero_subtitle: "Análisis perspicaz para la sostenibilidad",
        about_title: "Biografía",
        about_text: "Kingsley es un investigador de maestría en la Universidad de Umea, Suecia, especializado en magnificación de datos en espacios urbanos y tecnologías centradas en lo urbano bajo la guía del Departamento de Geografía. Obtuvo su licenciatura en la Universidad Federal de Tecnología, Owerri, supervisado por Tpl. Dr Kalu O. Abaraikwu."
    },
    fr: {
        logo: "KO Portfolio",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_credentials: "Références",
        nav_news: "Actualités",
        nav_contact: "Contact",
        hero_name: "Kingsley Osunkwo",
        hero_title: "Analyste de Données | Technologie Urbaine",
        hero_subtitle: "Analyse perspicace pour la durabilité",
        about_title: "Biographie",
        about_text: "Kingsley est chercheur en master à l'Université d'Umea, en Suède, spécialisé dans la magnification des données dans les espaces urbains et les technologies urbaines sous la direction du Département de Géographie. Il a obtenu sa licence à l'Université Fédérale de Technologie d'Owerri, supervisé par Tpl. Dr Kalu O. Abaraikwu."
    },
    de: {
        logo: "KO Portfolio",
        nav_about: "Über mich",
        nav_skills: "Fähigkeiten",
        nav_projects: "Projekte",
        nav_credentials: "Referenzen",
        nav_news: "Neuigkeiten",
        nav_contact: "Kontakt",
        hero_name: "Kingsley Osunkwo",
        hero_title: "Datenanalyst | Urbane Technologie",
        hero_subtitle: "Aufschlussreiche Analyse für Nachhaltigkeit",
        about_title: "Biografie",
        about_text: "Kingsley ist Masterforscher an der Universität Umea in Schweden und spezialisiert sich unter der Leitung der Geographischen Fakultät auf Datenvergrößerung in urbanen Räumen und urbanzentrierte Technologien. Er erwarb seinen Bachelor an der Federal University of Technology, Owerri, betreut von Tpl. Dr. Kalu O. Abaraikwu."
    },
    sv: {
        logo: "KO Portfolio",
        nav_about: "Om mig",
        nav_skills: "Färdigheter",
        nav_projects: "Projekt",
        nav_credentials: "Meriter",
        nav_news: "Nyheter",
        nav_contact: "Kontakt",
        hero_name: "Kingsley Osunkwo",
        hero_title: "Dataanalytiker | Urban Teknologi",
        hero_subtitle: "Insiktsfull analys för hållbarhet",
        about_title: "Biografi",
        about_text: "Kingsley är masterforskare vid Umeå universitet i Sverige och specialiserar sig på dataförstoring i urbana miljöer och urban-centrerad teknologi under ledning av Institutionen för geografi. Han tog sin kandidatexamen vid Federal University of Technology, Owerri, under handledning av Tpl. Dr Kalu O. Abaraikwu."
    }
};

function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[selectedLanguage] && translations[selectedLanguage][key]) {
            element.textContent = translations[selectedLanguage][key];
        }
    });
}

// Add Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));
});











/*   <!-- Project Card 4 -->
            <div class="project-card">
                <img src="smart-city.jpg" alt="Smart City Project" class="w-full h-48 object-cover rounded-t-lg">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">Smart City Integration</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        IoT data integration for smart city applications using Python
                    </p>
                    <div class="flex justify-between items-center">
                        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
                        <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Project Card 5 -->
            <div class="project-card">
                <img src="climate.jpg" alt="Climate Analysis" class="w-full h-48 object-cover rounded-t-lg">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">Urban Climate Analysis</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        Analysis of urban heat islands using satellite data and R
                    </p>
                    <div class="flex justify-between items-center">
                        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
                        <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Project Card 6 -->
            <div class="project-card">
                <img src="population.jpg" alt="Population Dynamics" class="w-full h-48 object-cover rounded-t-lg">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">Population Dynamics</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        Urban population movement analysis using GIS and statistical methods
                    </p>
                    <div class="flex justify-between items-center">
                        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
                        <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>
            </div> */
