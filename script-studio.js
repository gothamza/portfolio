// ==========================================
// ENSURE DOM IS FULLY LOADED BEFORE RUNNING
// ==========================================
document.addEventListener('DOMContentLoaded', function() {

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
const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'en';

const PROJECT_CATEGORIES = {
    fr: {
        'ai-llm': 'IA & LLM',
        web: 'Web & Apps',
        vision: 'Vision par ordinateur',
        ml: 'ML & Data'
    },
    en: {
        'ai-llm': 'AI & LLM',
        web: 'Web & Apps',
        vision: 'Computer Vision',
        ml: 'ML & Data'
    }
};

function updateProjectCategories(lang = currentLang) {
    document.querySelectorAll('.project-card[data-category]').forEach(card => {
        const category = card.getAttribute('data-category');
        const label = PROJECT_CATEGORIES[lang]?.[category];
        if (!label) return;

        let badge = card.querySelector('.project-category');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'project-category';
            const title = card.querySelector('h3');
            if (title) {
                card.insertBefore(badge, title);
            } else {
                card.prepend(badge);
            }
        }
        badge.textContent = label;
    });
}

function switchLanguage(lang) {
    // Update all elements with data-fr and data-en attributes
    document.querySelectorAll('[data-fr][data-en]').forEach(element => {
        if (lang === 'fr') {
            element.textContent = element.getAttribute('data-fr');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });

    // Update CV download links based on language
    document.querySelectorAll('.cv-download-btn').forEach(btn => {
        if (lang === 'fr') {
            btn.setAttribute('href', 'PDFs/hamza_cv_fr26.pdf');
        } else {
            btn.setAttribute('href', 'PDFs/hamza_cv_en26.pdf');
        }
    });

    // Update page language attribute
    document.documentElement.lang = lang;

    // Update copy button aria-labels
    document.querySelectorAll('[data-fr-label][data-en-label]').forEach(element => {
        const label = lang === 'fr'
            ? element.getAttribute('data-fr-label')
            : element.getAttribute('data-en-label');
        element.setAttribute('aria-label', label);
        element.setAttribute('title', label);
    });

    updateProjectCategories(lang);
}

// Initialize with English content
switchLanguage('en');

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

// ==========================================
// MOBILE MENU TOGGLE + MORE DROPDOWN
// ==========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navMoreBtn = document.getElementById('nav-more-btn');
const navMoreMenu = document.getElementById('nav-more-menu');

function closeNavMenus() {
    if (navMenu) navMenu.classList.remove('active');
    if (hamburger) {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
    if (navMoreBtn && navMoreMenu) {
        navMoreBtn.classList.remove('open');
        navMoreBtn.setAttribute('aria-expanded', 'false');
        navMoreMenu.classList.remove('open');
    }
}

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (navMoreBtn && navMoreMenu) {
            navMoreBtn.classList.remove('open');
            navMoreBtn.setAttribute('aria-expanded', 'false');
            navMoreMenu.classList.remove('open');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeNavMenus);
    });
}

if (navMoreBtn && navMoreMenu) {
    navMoreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navMoreMenu.classList.toggle('open');
        navMoreBtn.classList.toggle('open', isOpen);
        navMoreBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
        if (!navMoreBtn.contains(e.target) && !navMoreMenu.contains(e.target)) {
            navMoreBtn.classList.remove('open');
            navMoreBtn.setAttribute('aria-expanded', 'false');
            navMoreMenu.classList.remove('open');
        }
    });
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 24);
    }
}, { passive: true });

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
// PARALLAX EFFECT FOR GRADIENT ORBS (disabled in studio)
// ==========================================
// Studio design has no gradient orbs.

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
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.pageYOffset > 300);
}, { passive: true });

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
// ROTATING TEXT WITH WORD-BY-WORD TYPING
// ==========================================
(function() {
    const rotatingTextElement = document.querySelector('.rotating-text-content');
    if (!rotatingTextElement) return;
    
    // Array of phrases in French
    const phrasesFR = [
        "Passionné par l'IA et le développement de solutions innovantes",
        "Développeur de chatbot production-ready pour équipes multiples",
        "Spécialisé en LangChain, pipelines RAG et orchestration LLM",
        "Expert en développement full-stack : Next.js, FastAPI, Docker",
        "Déploiement d'infrastructures IA scalables sur environnements de production",
        "Transformer la recherche en IA en applications concrètes"
    ];
    
    // Array of phrases in English
    const phrasesEN = [
        "Passionate about AI and developing innovative solutions",
        "Built production-ready chatbot for multi-team collaboration",
        "Specialized in LangChain, RAG pipelines, and LLM orchestration",
        "Full-stack AI developer: Next.js, FastAPI, Docker deployment",
        "Deploying scalable AI infrastructure on production environments",
        "Turning AI research into real-world applications"
    ];
    
    let currentPhraseIndex = 0;
    let currentWordIndex = 0;
    let currentLang = 'en';
    
    // Listen for language changes
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentLang = this.getAttribute('data-lang');
            // Reset animation with new language
            currentPhraseIndex = 0;
            currentWordIndex = 0;
            rotatingTextElement.textContent = '';
            typeNextChar();
        });
    });
    
    function typeNextChar() {
        const phrases = currentLang === 'fr' ? phrasesFR : phrasesEN;
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (currentWordIndex < currentPhrase.length) {
            // Add next character
            rotatingTextElement.textContent += currentPhrase[currentWordIndex];
            currentWordIndex++;
            
            // Continue typing characters
            setTimeout(typeNextChar, 40); // 80ms between characters
        } else {
            // Finished typing current phrase, pause then start next
            setTimeout(() => {
                // Move to next phrase
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                currentWordIndex = 0;
                rotatingTextElement.textContent = '';
                typeNextChar();
            }, 4000); // 4 second pause before next phrase
        }
    }
    
    // Start typing after a delay
    setTimeout(typeNextChar, 1500);
})();

// ==========================================
// HUD PARTICLE NETWORK BACKGROUND (studio)
// ==========================================
(function initHudParticleNetwork() {
    if (!document.body.classList.contains('studio')) return;

    const canvas = document.getElementById('hud-bg-canvas');
    if (!canvas) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
        canvas.style.display = 'none';
        return;
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let points = [];
    let rafId = 0;
    let running = true;

    const mouse = { x: 0, y: 0, active: false };
    const spacing = 88;
    const linkDist = 132;
    const maxLinksPerPoint = 4;

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        buildGrid();
    }

    function buildGrid() {
        points = [];
        const cols = Math.ceil(width / spacing) + 1;
        const rows = Math.ceil(height / spacing) + 1;
        const offsetX = (width - (cols - 1) * spacing) * 0.5;
        const offsetY = (height - (rows - 1) * spacing) * 0.5;

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                points.push({
                    ox: offsetX + x * spacing,
                    oy: offsetY + y * spacing,
                    x: offsetX + x * spacing,
                    y: offsetY + y * spacing
                });
            }
        }
    }

    function onMouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    }

    function onMouseLeave() {
        mouse.active = false;
    }

    function draw() {
        if (!running) return;
        ctx.clearRect(0, 0, width, height);

        const pullRadius = 160;
        const pullStrength = 10;

        for (let i = 0; i < points.length; i++) {
            const p = points[i];
            p.x = p.ox;
            p.y = p.oy;

            if (mouse.active) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.hypot(dx, dy);
                if (dist < pullRadius) {
                    const force = (1 - dist / pullRadius) * pullStrength;
                    p.x += (dx / (dist || 1)) * force;
                    p.y += (dy / (dist || 1)) * force;
                }
            }
        }

        ctx.lineWidth = 1;
        for (let i = 0; i < points.length; i++) {
            const a = points[i];
            let links = 0;

            for (let j = i + 1; j < points.length; j++) {
                if (links >= maxLinksPerPoint) break;
                const b = points[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.hypot(dx, dy);
                if (dist > linkDist) continue;

                const alpha = (1 - dist / linkDist) * 0.22;
                ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
                links++;
            }

            ctx.fillStyle = 'rgba(34, 211, 238, 0.35)';
            ctx.beginPath();
            ctx.arc(a.x, a.y, 1.2, 0, Math.PI * 2);
            ctx.fill();
        }

        rafId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            running = false;
            cancelAnimationFrame(rafId);
        } else {
            running = true;
            draw();
        }
    });

    resize();
    draw();
})();

// ==========================================
// HERO TYPEWRITER + GLITCH (studio)
// ==========================================
function initHeroTypewriterGlitch(options) {
    const {
        nameEl,
        titleEl,
        speed = 28,
        onComplete
    } = options;

    if (!nameEl || !titleEl) return;

    const fullName = nameEl.getAttribute('data-name') || nameEl.textContent.trim();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
        nameEl.textContent = fullName;
        titleEl.classList.add('glitch-active');
        if (onComplete) onComplete();
        return;
    }

    nameEl.textContent = '';
    nameEl.classList.add('is-typing');
    titleEl.classList.remove('glitch-active');

    let index = 0;

    function tick() {
        nameEl.textContent = fullName.slice(0, index + 1);
        index++;

        if (index < fullName.length) {
            setTimeout(tick, speed);
            return;
        }

        nameEl.classList.remove('is-typing');
        titleEl.classList.add('glitch-active');
        if (onComplete) onComplete();
    }

    tick();
}

initHeroTypewriterGlitch({
    nameEl: document.getElementById('hero-name'),
    titleEl: document.getElementById('hero-title'),
    speed: 24
});

// ==========================================
// TYPING ANIMATION FOR NAME (legacy — disabled in studio)
// ==========================================
(function() {
    const typingElement = document.querySelector('.typing-animation');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.borderRight = '4px solid var(--primary-color)';
    
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function type() {
        if (isPaused) return;
        
        if (!isDeleting && charIndex < text.length) {
            // Typing forward
            typingElement.textContent = text.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, 150); // Speed of typing
        } else if (charIndex === text.length && !isDeleting) {
            // Finished typing, pause for 5 seconds
            isPaused = true;
            setTimeout(() => {
                isDeleting = true;
                isPaused = false;
                type();
            }, 3000); // Pause for 5 seconds
        } else if (isDeleting && charIndex > 0) {
            // Deleting backward
            charIndex--;
            typingElement.textContent = text.substring(0, charIndex);
            setTimeout(type, 100); // Speed of deleting (faster)
        } else {
            // Finished deleting, start over
            isDeleting = false;
            setTimeout(type, 500); // Brief pause before restarting
        }
    }
    
    // Start typing after a brief delay
    setTimeout(type, 1000);
    
    // Add blinking cursor animation
    setInterval(() => {
        if (typingElement.style.borderRightColor === 'transparent') {
            typingElement.style.borderRightColor = '#6366f1';
        } else {
            typingElement.style.borderRightColor = 'transparent';
        }
    }, 500);
})();

// ==========================================
// EDUCATION SLIDESHOW WITH SMOOTH SLIDING
// ==========================================
(function() {
    const slides = document.querySelectorAll('.education-slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    function nextSlide() {
        // Mark current slide as previous (slides out to left)
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('prev');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Reset the previous slide after transition
        setTimeout(() => {
            slides.forEach((slide, index) => {
                if (index !== currentSlide) {
                    slide.classList.remove('prev');
                }
            });
        }, 1500);
        
        // Activate next slide (slides in from right)
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
})();

// ==========================================
// ACTIVITY CARDS IMAGE CYCLING
// ==========================================
document.querySelectorAll('.activity-card').forEach(card => {
    const images = card.querySelectorAll('.activity-image');
    
    if (images.length === 0) return; // Skip if no images
    
    let currentIndex = 0;
    let interval;

    // Start cycling through images on hover
    card.addEventListener('mouseenter', () => {
        interval = setInterval(() => {
            // Remove active class from current image
            images[currentIndex].classList.remove('active');
            
            // Move to next image
            currentIndex = (currentIndex + 1) % images.length;
            
            // Add active class to new image
            images[currentIndex].classList.add('active');
        }, 2000); // Change image every 2 seconds
    });

    // Stop cycling and reset to first image on mouse leave
    card.addEventListener('mouseleave', () => {
        clearInterval(interval);
        
        // Reset to first image
        images[currentIndex].classList.remove('active');
        currentIndex = 0;
        images[currentIndex].classList.add('active');
    });
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c👋 Bonjour! Hello!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cCe portfolio a été conçu par Hamza Bouktitiya', 'font-size: 14px; color: #94a3b8;');
console.log('%cThis portfolio was designed by Hamza Bouktitiya', 'font-size: 14px; color: #94a3b8;');

// Floating Icons Animation
function initializeFloatingIcons() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach((icon, index) => {
        // Random initial position
        const xPos = Math.random() * 90 +2; // 0-90% to keep icons within bounds
        const yPos = Math.random() * 90 +2; // 0-90% to keep icons within bounds
        
        icon.style.left = `${xPos}%`;
        icon.style.top = `${yPos}%`;
        
        // Random animation duration (10-20 seconds)
        const duration = Math.random() * 10 + 10;
        icon.style.animationDuration = `${duration}s`;
        
        // Random animation delay (0-5 seconds)
        const delay = Math.random() * 2;
        icon.style.animationDelay = `${delay}s`;
        
        // Random animation direction
        const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
        icon.style.animationDirection = direction;
    });
}

// Initialize floating icons when DOM is loaded
initializeFloatingIcons();

// ==========================================
// PROJECT FILTER FUNCTIONALITY
// ==========================================
function initProjectFilters() {
    const filtersRoot = document.getElementById('project-filters');
    const projectsGrid = document.querySelector('#projects .projects-grid');
    if (!filtersRoot || !projectsGrid) return;

    function getProjectCards() {
        return projectsGrid.querySelectorAll('.project-card');
    }

    function applyProjectFilter(filterValue) {
        const cards = getProjectCards();

        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            const isVisible = filterValue === 'all' || category === filterValue;

            card.classList.toggle('hidden', !isVisible);

            if (isVisible) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });

        filtersRoot.querySelectorAll('.filter-btn').forEach(btn => {
            const isActive = btn.getAttribute('data-filter') === filterValue;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
    }

    filtersRoot.addEventListener('click', (event) => {
        const button = event.target.closest('.filter-btn');
        if (!button || !filtersRoot.contains(button)) return;

        applyProjectFilter(button.getAttribute('data-filter'));
    });

    applyProjectFilter('all');
}

initProjectFilters();
updateProjectCategories(currentLang);

// ==========================================
// COPY TO CLIPBOARD
// ==========================================
(function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn[data-copy]');
    if (!copyButtons.length) return;

    let toast = document.getElementById('copy-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'copy-toast';
        toast.className = 'copy-toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        document.body.appendChild(toast);
    }

    function showCopyToast() {
        toast.textContent = currentLang === 'fr' ? 'Copié !' : 'Copied!';
        toast.classList.add('visible');
        clearTimeout(showCopyToast._timer);
        showCopyToast._timer = setTimeout(() => toast.classList.remove('visible'), 2000);
    }

    async function copyText(text) {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            return;
        }
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    copyButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const text = button.getAttribute('data-copy');
            if (!text) return;

            try {
                await copyText(text);
                button.classList.add('copied');
                const icon = button.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-copy');
                    icon.classList.add('fa-check');
                }
                showCopyToast();
                setTimeout(() => {
                    button.classList.remove('copied');
                    if (icon) {
                        icon.classList.add('fa-copy');
                        icon.classList.remove('fa-check');
                    }
                }, 2000);
            } catch {
                toast.textContent = currentLang === 'fr' ? 'Échec de la copie' : 'Copy failed';
                toast.classList.add('visible');
                setTimeout(() => toast.classList.remove('visible'), 2000);
            }
        });
    });
})();

}); // End of DOMContentLoaded

