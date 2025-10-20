// ==========================================
// LANGUAGE SWITCHER
// ==========================================
const translations = {
    fr: {
        greeting: "Bonjour, je suis",
        subtitle: "Ingénieur en Intelligence Artificielle",
        heroDescription: "Passionné par l'IA et le développement de solutions innovantes",
        contactMe: "Me contacter",
        viewProjects: "Voir mes projets",
        aboutTitle: "À propos de moi",
        aboutIntro: "Passionné par l'intelligence artificielle, je me spécialise dans la création de solutions basées sur l'IA. Avec quelques connaissances en développement, je suis prêt à mettre mes compétences au service de projets innovants.",
        aboutDescription: "Je suis actuellement à la recherche d'opportunités pour contribuer à des travaux stimulants et avant-gardistes dans le domaine de l'intelligence artificielle et du machine learning.",
        languages: "Langues",
        nativeArabic: "Arabe (Maternelle)",
        educationTitle: "Éducation",
        masterTitle: "Master en Intelligence Artificielle et Réalité Virtuelle",
        bachelorTitle: "Licence en Sciences Mathématiques et Informatique",
        baccalaureateTitle: "Baccalauréat en Sciences Mathématiques",
        university: "Université Ibn Tofail, Kenitra, Maroc",
        highSchool: "Lycée Sidi Aissa, Souk El Arbaa Du Gharbe",
        experienceTitle: "Expériences Professionnelles",
        juniorEngineer: "Ingénieur Junior en IA",
        aiIntern: "Stagiaire en IA",
        webDevIntern: "Stagiaire en Développement Web",
        csDepart: "Département CS, Ibn Tofail University, Kenitra",
        viewDemo: "Voir la démo",
        viewCode: "Voir le code",
        skillsTitle: "Compétences Techniques",
        aiML: "IA & Machine Learning",
        dataAnalysis: "Analyse de Données",
        projectsTitle: "Projets Académiques",
        activitiesTitle: "Activités Parascolaires",
        contactTitle: "Contactez-moi",
        contactSubtitle: "Intéressé par une collaboration ou avez-vous une opportunité à discuter ? N'hésitez pas à me contacter !",
        phone: "Téléphone",
        location: "Localisation",
        footerRights: "Tous droits réservés.",
        footerDesign: "Conçu avec passion et créativité"
    },
    en: {
        greeting: "Hello, I'm",
        subtitle: "Artificial Intelligence Engineer",
        heroDescription: "Passionate about AI and developing innovative solutions",
        contactMe: "Contact Me",
        viewProjects: "View Projects",
        aboutTitle: "About Me",
        aboutIntro: "Passionate about artificial intelligence, I specialize in creating AI-based solutions. With knowledge in development, I am ready to put my skills to work on innovative projects.",
        aboutDescription: "I am currently looking for opportunities to contribute to challenging and cutting-edge work in the field of artificial intelligence and machine learning.",
        languages: "Languages",
        nativeArabic: "Arabic (Native)",
        educationTitle: "Education",
        masterTitle: "Master in Artificial Intelligence and Virtual Reality",
        bachelorTitle: "Bachelor in Mathematical and Computer Science",
        baccalaureateTitle: "Baccalaureate in Mathematical Sciences",
        university: "Ibn Tofail University, Kenitra, Morocco",
        highSchool: "Sidi Aissa High School, Souk El Arbaa Du Gharbe",
        experienceTitle: "Professional Experience",
        juniorEngineer: "Junior AI Engineer",
        aiIntern: "AI Intern",
        webDevIntern: "Web Development Intern",
        csDepart: "CS Department, Ibn Tofail University, Kenitra",
        viewDemo: "View Demo",
        viewCode: "View Code",
        skillsTitle: "Technical Skills",
        aiML: "AI & Machine Learning",
        dataAnalysis: "Data Analysis",
        projectsTitle: "Academic Projects",
        activitiesTitle: "Extracurricular Activities",
        contactTitle: "Contact Me",
        contactSubtitle: "Interested in collaboration or have an opportunity to discuss? Feel free to contact me!",
        phone: "Phone",
        location: "Location",
        footerRights: "All rights reserved.",
        footerDesign: "Designed with passion and creativity"
    }
};

// Language Switcher
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'fr';

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLang) {
                switchLanguage(lang);
                currentLang = lang;
                
                // Update active button
                langButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    function switchLanguage(lang) {
        // Update all elements with data-fr and data-en attributes
        document.querySelectorAll('[data-fr][data-en]').forEach(element => {
            if (lang === 'fr') {
                element.textContent = element.getAttribute('data-fr');
            } else {
                element.textContent = element.getAttribute('data-en');
            }
        });

        // Update page language attribute
        document.documentElement.lang = lang;
    }
});

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70; // Navbar height
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// ==========================================
// ANIMATE CARDS ON SCROLL
// ==========================================
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.experience-card, .project-card, .skill-category, .activity-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
});

// ==========================================
// TIMELINE ANIMATION
// ==========================================
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 150);
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
});

// ==========================================
// CURSOR EFFECT (OPTIONAL)
// ==========================================
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const speed = 0.15;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Add hover effect for interactive elements
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// ==========================================
// TYPING EFFECT FOR HERO SUBTITLE (OPTIONAL)
// ==========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const originalText = heroSubtitle.textContent;
//     setTimeout(() => typeWriter(heroSubtitle, originalText, 80), 1000);
// }

// ==========================================
// PARALLAX EFFECT FOR GRADIENT ORBS
// ==========================================
window.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        
        orb.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// ==========================================
// LAZY LOAD IMAGES
// ==========================================
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});

// ==========================================
// ACTIVE SECTION HIGHLIGHT IN NAVBAR
// ==========================================
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active-link');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ==========================================
// SCROLL TO TOP BUTTON (OPTIONAL)
// ==========================================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.classList.add('scroll-top-btn');
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #ec4899);
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c👋 Bonjour! Hello!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cCe portfolio a été conçu par Hamza Bouktitiya', 'font-size: 14px; color: #94a3b8;');
console.log('%cThis portfolio was designed by Hamza Bouktitiya', 'font-size: 14px; color: #94a3b8;');

