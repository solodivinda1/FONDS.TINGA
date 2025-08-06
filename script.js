// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#1a4d2e';
    } else {
        navbar.style.background = '#2d5a3d';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .blog-card, .feature-card, .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Hero section animations and functionality
    initializeHeroSection();
    
    // VISION section animations
    initializeVisionSection();
    
    // CREATION section animations
    initializeCreationSection();
    
    // MISSION section animations
    initializeMissionSection();
    
    // REALISATIONS section animations
    initializeRealisationsSection();
    
    // ELIGIBILITE section animations
    initializeEligibiliteSection();
    
    // MECANISME section animations
    initializeMecanismeSection();
    
    // PARTENAIRES section animations
    initializePartenairesSection();
});

// Form submission for newsletter
const newsletterForm = document.querySelector('.newsletter');
if (newsletterForm) {
    const newsletterBtn = newsletterForm.querySelector('.btn');
    const newsletterInput = newsletterForm.querySelector('input');
    
    newsletterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!newsletterInput.value || !newsletterInput.value.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate newsletter subscription
        const originalText = newsletterBtn.innerHTML;
        newsletterBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        newsletterBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for subscribing to our newsletter!');
            newsletterInput.value = '';
            newsletterBtn.innerHTML = originalText;
            newsletterBtn.disabled = false;
        }, 2000);
    });
}

// Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString() + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString() + '+';
        }
    }
    
    updateCounter();
}

// Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target.querySelector('h3');
            const target = parseInt(counter.textContent.replace(/,/g, ''));
            animateCounter(counter, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    counterObserver.observe(stat);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Blog card hover effects
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Feature card hover effects
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Social media links hover effect
document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2d5a3d, #ffd700);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Add subtle parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Add click effects for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add smooth reveal animation for sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});

// Add hover effect for footer links
document.querySelectorAll('.footer-section ul li a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Add focus effects for accessibility
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #ffd700';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Add loading state for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.classList.contains('btn-primary')) {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Add smooth scroll to top functionality
function createScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2d5a3d;
        color: #ffffff;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.background = '#1a4d2e';
        this.style.transform = 'translateY(-3px)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.background = '#2d5a3d';
        this.style.transform = 'translateY(0)';
    });
}

// Initialize scroll to top button
createScrollToTop(); 

// Language translations
const translations = {
    en: {
        // Navigation
        'HOME': 'HOME',
        'SERVICES': 'SERVICES',
        'PAGES': 'PAGES',
        'ABOUT US': 'ABOUT US',
        'CONTACT US': 'CONTACT US',
        
        // Hero Section
        'ELECTRICAL SERVICES COMPANY': 'ELECTRICAL SERVICES COMPANY',
        'Bright Solutions': 'branchement de 900 000 ménages sur l\'ensemble du territoire national d\'ici à 2030',
        'Expert Electricians': 'Électricité pour tous',
        'Project Completed': 'Project Completed',
        'Satisfied Clients': 'Satisfied Clients',
        'Team Members': 'Team Members',
        
        // Features
        'Affordable price': 'Affordable price',
        '100% Guarantee': '100% Guarantee',
        'Award winning': 'ELIGIBILITE',
        '24/7 Availability': 'PARTENAIRES DU FONDS',
        
        // About Section
        'ABOUT US': 'MISSION DU FONDS TINGA',
        'Keeping Your Power Flowing, Safely and Efficiently': 'Mécanisme de subvention mis en place par l\'État pour alléger le coût du raccordement au réseau électrique',
        'about-description': 'le Fonds a pour objet de faciliter l\'accès à l\'électricité aux usagers éligibles, au moyen de subventions remboursables aux opérateurs chargés du service public d\'électricité. Les subventions remboursables sont destinées couvrir notamment :',
        'Certified Electricians': 'les frais de branchement au réseau national de distribution de l\'énergie électrique basse tension ou à un mini-réseau basse tension',
        'End-to-End Services': 'les coûts de réalisation des travaux d\'installations électriques intérieures basse tension ainsi que l\'acquisition des équipements électriques nécessaires',
        'Energy-Efficient Solutions': 'les coûts d\'acquisitions de kits solaires',
        'Safety is Our Priority': 'les coûts d\'acquisition d\'équipements électriques de base, notamment les lampes à basse consommation au besoin',
        'READ MORE': 'READ MORE',
        'Call Us Any Time!': 'Call Us Any Time!',
        '20+ Years Experience': '20+ Years Experience',
        
        // New Sections
        'CONTEXTE': 'CONTEXTE',
        'VISION': 'VISION',
        'CREATION DU FONDS TINGA': 'CREATION DU FONDS TINGA',
        'MISSION DU FONDS TINGA': 'MISSION DU FONDS TINGA',
        'REALISATIONS DU FONDS TINGA': 'REALISATIONS DU FONDS TINGA',
        'ELIGIBILITE AU FONDS TINGA': 'ELIGIBILITE AU FONDS TINGA',
        'MECANISME DE FONCTIONNEMENT DU FONDS TINGA': 'MECANISME DE FONCTIONNEMENT DU FONDS TINGA',
        'PARTENAIRES DU FONDS TINGA': 'PARTENAIRES DU FONDS TINGA',
        
        // Services Section
        'SERVICES': 'SERVICES',
        'Expert Solutions for Every Electrical Need': 'Expert Solutions for Every Electrical Need',
        'services-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'ALL SERVICES': 'ALL SERVICES',
        'Wiring and Rewiring Services': 'Wiring and Rewiring Services',
        'wiring-description': 'Professional electrical wiring and rewiring services for residential and commercial properties.',
        'Electrical Panel Upgrades': 'Electrical Panel Upgrades',
        'panel-description': 'Modern electrical panel upgrades to improve safety and accommodate increased power demands.',
        'Lighting and Repairs': 'Lighting and Repairs',
        'lighting-description': 'Comprehensive lighting solutions and electrical repair services for all types of installations.',
        
        // Blog Section
        'OUR BLOG': 'OUR BLOG',
        'Our Latest Blog Posts': 'Our Latest Blog Posts',
        'blog-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'VIEW ALL': 'VIEW ALL',
        'Modern Lighting Solutions': 'Modern Lighting Solutions',
        'lighting-blog-description': 'Discover the latest trends in modern lighting solutions for your home and business.',
        'Electrical Panel Maintenance': 'Electrical Panel Maintenance',
        'panel-blog-description': 'Essential tips for maintaining your electrical panel and ensuring optimal performance.',
        'Professional Electrical Services': 'Professional Electrical Services',
        'professional-blog-description': 'Why choosing professional electricians is crucial for your safety and peace of mind.',
        'Learn more': 'Learn more',
        
        // Footer
        'footer-description': '',
        'Your email': 'Your email',
        'Our Services': 'Our Services',
        'Electrical Repairs': 'Electrical Repairs',
        'New Installations': 'New Installations',
        'Panel Upgrades': 'Panel Upgrades',
        'Commercial Services': 'Commercial Services',
        'Industrial Services': 'Industrial Services',
        'Quick Links': 'Quick Links',
        'Home': 'Home',
        'Services': 'Services',
        'Projects': 'Projects',
        'About us': 'About us',
        'Contact us': 'Contact us',
        'Contact Info': 'Contact Info',
        'Mon-Fri: 8:00 am - 6:00 Pm': 'Mon-Fri: 8:00 am - 6:00 Pm',
        
        // Top Bar
        'Kazipur 6710, Sirajganj, BD': 'Kazipur 6710, Sirajganj, BD',
        'Support@domain.com': 'Support@domain.com'
    },
    
    fr: {
        // Navigation
        'HOME': 'ACCUEIL',
        'SERVICES': 'SERVICES',
        'PAGES': 'PAGES',
        'ABOUT US': 'À PROPOS',
        'CONTACT US': 'CONTACTEZ-NOUS',
        
        // Hero Section
        'ELECTRICAL SERVICES COMPANY': 'Électricité pour tous',
        'Bright Solutions': 'branchement de 900 000 ménages sur l\'ensemble du territoire national d\'ici à 2030',
        'Expert Electricians': 'Électricité pour tous',
        'Project Completed': 'Projets Terminés',
        'Satisfied Clients': 'Clients Satisfaits',
        'Team Members': 'Membres de l\'Équipe',
        
        // Features
        'Affordable price': 'Prix abordable',
        '100% Guarantee': '100% Garantie',
        'Award winning': 'ELIGIBILITE',
        '24/7 Availability': 'PARTENAIRES DU FONDS',
        
        // About Section
        'ABOUT US': 'MISSION DU FONDS TINGA',
        'Keeping Your Power Flowing, Safely and Efficiently': 'Mécanisme de subvention mis en place par l\'État pour alléger le coût du raccordement au réseau électrique',
        'about-description': 'le Fonds a pour objet de faciliter l\'accès à l\'électricité aux usagers éligibles, au moyen de subventions remboursables aux opérateurs chargés du service public d\'électricité. Les subventions remboursables sont destinées couvrir notamment :',
        'Certified Electricians': 'les frais de branchement au réseau national de distribution de l\'énergie électrique basse tension ou à un mini-réseau basse tension',
        'End-to-End Services': 'les coûts de réalisation des travaux d\'installations électriques intérieures basse tension ainsi que l\'acquisition des équipements électriques nécessaires',
        'Energy-Efficient Solutions': 'les coûts d\'acquisitions de kits solaires',
        'Safety is Our Priority': 'les coûts d\'acquisition d\'équipements électriques de base, notamment les lampes à basse consommation au besoin',
        'READ MORE': 'LIRE PLUS',
        'Call Us Any Time!': 'Appelez-nous à tout moment!',
        '20+ Years Experience': '20+ Années d\'Expérience',
        
        // New Sections
        'CONTEXTE': 'CONTEXTE',
        'VISION': 'VISION',
        'CREATION DU FONDS TINGA': 'CREATION DU FONDS TINGA',
        'MISSION DU FONDS TINGA': 'MISSION DU FONDS TINGA',
        'REALISATIONS DU FONDS TINGA': 'REALISATIONS DU FONDS TINGA',
        'ELIGIBILITE AU FONDS TINGA': 'ELIGIBILITE AU FONDS TINGA',
        'MECANISME DE FONCTIONNEMENT DU FONDS TINGA': 'MECANISME DE FONCTIONNEMENT DU FONDS TINGA',
        'PARTENAIRES DU FONDS TINGA': 'PARTENAIRES DU FONDS TINGA',
        
        // Services Section
        'SERVICES': 'SERVICES',
        'Expert Solutions for Every Electrical Need': 'Solutions Expertes pour Chaque Besoin Électrique',
        'services-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'ALL SERVICES': 'TOUS LES SERVICES',
        'Wiring and Rewiring Services': 'Services de Câblage et Recâblage',
        'wiring-description': 'Services professionnels de câblage électrique pour propriétés résidentielles et commerciales.',
        'Electrical Panel Upgrades': 'Mises à Niveau de Panneau Électrique',
        'panel-description': 'Mises à niveau modernes de panneau électrique pour améliorer la sécurité et accommoder les demandes de puissance accrues.',
        'Lighting and Repairs': 'Éclairage et Réparations',
        'lighting-description': 'Solutions d\'éclairage complètes et services de réparation électrique pour tous types d\'installations.',
        
        // Blog Section
        'OUR BLOG': 'NOTRE BLOG',
        'Our Latest Blog Posts': 'Nos Derniers Articles de Blog',
        'blog-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'VIEW ALL': 'VOIR TOUT',
        'Modern Lighting Solutions': 'Solutions d\'Éclairage Modernes',
        'lighting-blog-description': 'Découvrez les dernières tendances en solutions d\'éclairage modernes pour votre maison et votre entreprise.',
        'Electrical Panel Maintenance': 'Maintenance de Panneau Électrique',
        'panel-blog-description': 'Conseils essentiels pour maintenir votre panneau électrique et assurer des performances optimales.',
        'Professional Electrical Services': 'Services Électriques Professionnels',
        'professional-blog-description': 'Pourquoi choisir des électriciens professionnels est crucial pour votre sécurité et votre tranquillité d\'esprit.',
        'Learn more': 'En savoir plus',
        
        // Footer
        'footer-description': '',
        'Your email': 'Votre email',
        'Our Services': 'Nos Services',
        'Electrical Repairs': 'Réparations Électriques',
        'New Installations': 'Nouvelles Installations',
        'Panel Upgrades': 'Mises à Niveau de Panneau',
        'Commercial Services': 'Services Commerciaux',
        'Industrial Services': 'Services Industriels',
        'Quick Links': 'Liens Rapides',
        'Home': 'Accueil',
        'Services': 'Services',
        'Projects': 'Projets',
        'About us': 'À propos',
        'Contact us': 'Contactez-nous',
        'Contact Info': 'Informations de Contact',
        'Mon-Fri: 8:00 am - 6:00 Pm': 'Lun-Ven: 8h00 - 18h00',
        
        // Top Bar
        'Kazipur 6710, Sirajganj, BD': '08 BP8076 Angle des Avenues Sarakawa et Duisbourg Lomé Togo',
        'Support@domain.com': 'kaleti.dakpui@tinga.gouv.tg'
    },
    
    mina: {
        // Navigation
        'HOME': 'ACCUEIL',
        'SERVICES': 'SERVICES',
        'PAGES': 'PAGES',
        'ABOUT US': 'À PROPOS',
        'CONTACT US': 'CONTACTEZ-NOUS',
        
        // Hero Section
        'ELECTRICAL SERVICES COMPANY': 'Électricité pour tous',
        'Bright Solutions': 'branchement de 900 000 ménages sur l\'ensemble du territoire national d\'ici à 2030',
        'Expert Electricians': 'Électricité pour tous',
        'Project Completed': 'Projets Terminés',
        'Satisfied Clients': 'Clients Satisfaits',
        'Team Members': 'Membres de l\'Équipe',
        
        // Features
        'Affordable price': 'Prix abordable',
        '100% Guarantee': '100% Garantie',
        'Award winning': 'ELIGIBILITE',
        '24/7 Availability': 'PARTENAIRES DU FONDS',
        
        // About Section
        'ABOUT US': 'MISSION DU FONDS TINGA',
        'Keeping Your Power Flowing, Safely and Efficiently': 'Mécanisme de subvention mis en place par l\'État pour alléger le coût du raccordement au réseau électrique',
        'about-description': 'le Fonds a pour objet de faciliter l\'accès à l\'électricité aux usagers éligibles, au moyen de subventions remboursables aux opérateurs chargés du service public d\'électricité. Les subventions remboursables sont destinées couvrir notamment :',
        'Certified Electricians': 'les frais de branchement au réseau national de distribution de l\'énergie électrique basse tension ou à un mini-réseau basse tension',
        'End-to-End Services': 'les coûts de réalisation des travaux d\'installations électriques intérieures basse tension ainsi que l\'acquisition des équipements électriques nécessaires',
        'Energy-Efficient Solutions': 'les coûts d\'acquisitions de kits solaires',
        'Safety is Our Priority': 'les coûts d\'acquisition d\'équipements électriques de base, notamment les lampes à basse consommation au besoin',
        'READ MORE': 'LIRE PLUS',
        'Call Us Any Time!': 'Appelez-nous à tout moment!',
        '20+ Years Experience': '20+ Années d\'Expérience',
        
        // New Sections
        'CONTEXTE': 'CONTEXTE',
        'VISION': 'VISION',
        'CREATION DU FONDS TINGA': 'CREATION DU FONDS TINGA',
        'MISSION DU FONDS TINGA': 'MISSION DU FONDS TINGA',
        'REALISATIONS DU FONDS TINGA': 'REALISATIONS DU FONDS TINGA',
        'ELIGIBILITE AU FONDS TINGA': 'ELIGIBILITE AU FONDS TINGA',
        'MECANISME DE FONCTIONNEMENT DU FONDS TINGA': 'MECANISME DE FONCTIONNEMENT DU FONDS TINGA',
        'PARTENAIRES DU FONDS TINGA': 'PARTENAIRES DU FONDS TINGA',
        
        // Services Section
        'SERVICES': 'SERVICES',
        'Expert Solutions for Every Electrical Need': 'Solutions Expertes pour Chaque Besoin Électrique',
        'services-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'ALL SERVICES': 'TOUS LES SERVICES',
        'Wiring and Rewiring Services': 'Services de Câblage et Recâblage',
        'wiring-description': 'Services professionnels de câblage électrique pour propriétés résidentielles et commerciales.',
        'Electrical Panel Upgrades': 'Mises à Niveau de Panneau Électrique',
        'panel-description': 'Mises à niveau modernes de panneau électrique pour améliorer la sécurité et accommoder les demandes de puissance accrues.',
        'Lighting and Repairs': 'Éclairage et Réparations',
        'lighting-description': 'Solutions d\'éclairage complètes et services de réparation électrique pour tous types d\'installations.',
        
        // Blog Section
        'OUR BLOG': 'NOTRE BLOG',
        'Our Latest Blog Posts': 'Nos Derniers Articles de Blog',
        'blog-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'VIEW ALL': 'VOIR TOUT',
        'Modern Lighting Solutions': 'Solutions d\'Éclairage Modernes',
        'lighting-blog-description': 'Découvrez les dernières tendances en solutions d\'éclairage modernes pour votre maison et votre entreprise.',
        'Electrical Panel Maintenance': 'Maintenance de Panneau Électrique',
        'panel-blog-description': 'Conseils essentiels pour maintenir votre panneau électrique et assurer des performances optimales.',
        'Professional Electrical Services': 'Services Électriques Professionnels',
        'professional-blog-description': 'Pourquoi choisir des électriciens professionnels est crucial pour votre sécurité et votre tranquillité d\'esprit.',
        'Learn more': 'En savoir plus',
        
        // Footer
        'footer-description': '',
        'Your email': 'Votre email',
        'Our Services': 'Nos Services',
        'Electrical Repairs': 'Réparations Électriques',
        'New Installations': 'Nouvelles Installations',
        'Panel Upgrades': 'Mises à Niveau de Panneau',
        'Commercial Services': 'Services Commerciaux',
        'Industrial Services': 'Services Industriels',
        'Quick Links': 'Liens Rapides',
        'Home': 'Accueil',
        'Services': 'Services',
        'Projects': 'Projets',
        'About us': 'À propos',
        'Contact us': 'Contactez-nous',
        'Contact Info': 'Informations de Contact',
        'Mon-Fri: 8:00 am - 6:00 Pm': 'Lun-Ven: 8h00 - 18h00',
        
        // Top Bar
        'Kazipur 6710, Sirajganj, BD': '08 BP8076 Angle des Avenues Sarakawa et Duisbourg Lomé Togo',
        'Support@domain.com': 'kaleti.dakpui@tinga.gouv.tg'
    },
    
    ewe: {
        // Navigation
        'HOME': 'FIE',
        'SERVICES': 'NUWO',
        'PAGES': 'NUWO',
        'ABOUT US': 'NYE',
        'CONTACT US': 'KPEKPE',
        
        // Hero Section
        'ELECTRICAL SERVICES COMPANY': 'NUWO ƑE AGBELE',
        'Bright Solutions': 'KPEKPE ƑE AGBELE',
        'Expert Electricians': 'NUWO ƑE AGBELE',
        'Project Completed': 'NUWO WO',
        'Satisfied Clients': 'NUWO WO',
        'Team Members': 'NUWO WO',
        
        // Features
        'Affordable price': 'NUWO ƑE AGBELE',
        '100% Guarantee': 'NUWO ƑE AGBELE',
        'Award winning': 'NUWO ƑE AGBELE',
        '24/7 Availability': 'NUWO ƑE AGBELE',
        
        // About Section
        'ABOUT US': 'NYE',
        'Keeping Your Power Flowing, Safely and Efficiently': 'NUWO ƑE AGBELE',
        'about-description': 'NUWO ƑE AGBELE',
        'Certified Electricians': 'NUWO ƑE AGBELE',
        'End-to-End Services': 'NUWO ƑE AGBELE',
        'Energy-Efficient Solutions': 'NUWO ƑE AGBELE',
        'Safety is Our Priority': 'NUWO ƑE AGBELE',
        'READ MORE': 'NUWO ƑE AGBELE',
        'Call Us Any Time!': 'NUWO ƑE AGBELE',
        '20+ Years Experience': 'NUWO ƑE AGBELE',
        
        // Services Section
        'SERVICES': 'NUWO',
        'Expert Solutions for Every Electrical Need': 'NUWO ƑE AGBELE',
        'services-description': 'NUWO ƑE AGBELE',
        'ALL SERVICES': 'NUWO WO',
        'Wiring and Rewiring Services': 'NUWO ƑE AGBELE',
        'wiring-description': 'NUWO ƑE AGBELE',
        'Electrical Panel Upgrades': 'NUWO ƑE AGBELE',
        'panel-description': 'NUWO ƑE AGBELE',
        'Lighting and Repairs': 'NUWO ƑE AGBELE',
        'lighting-description': 'NUWO ƑE AGBELE',
        
        // Blog Section
        'OUR BLOG': 'NUWO ƑE AGBELE',
        'Our Latest Blog Posts': 'NUWO ƑE AGBELE',
        'blog-description': 'NUWO ƑE AGBELE',
        'VIEW ALL': 'NUWO WO',
        'Modern Lighting Solutions': 'NUWO ƑE AGBELE',
        'lighting-blog-description': 'NUWO ƑE AGBELE',
        'Electrical Panel Maintenance': 'NUWO ƑE AGBELE',
        'panel-blog-description': 'NUWO ƑE AGBELE',
        'Professional Electrical Services': 'NUWO ƑE AGBELE',
        'professional-blog-description': 'NUWO ƑE AGBELE',
        'Learn more': 'NUWO ƑE AGBELE',
        
        // Footer
        'footer-description': 'NUWO ƑE AGBELE',
        'Your email': 'NUWO ƑE AGBELE',
        'Our Services': 'NUWO WO',
        'Electrical Repairs': 'NUWO ƑE AGBELE',
        'New Installations': 'NUWO ƑE AGBELE',
        'Panel Upgrades': 'NUWO ƑE AGBELE',
        'Commercial Services': 'NUWO ƑE AGBELE',
        'Industrial Services': 'NUWO ƑE AGBELE',
        'Quick Links': 'NUWO ƑE AGBELE',
        'Home': 'FIE',
        'Services': 'NUWO',
        'Projects': 'NUWO WO',
        'About us': 'NYE',
        'Contact us': 'KPEKPE',
        'Contact Info': 'NUWO ƑE AGBELE',
        'Mon-Fri: 8:00 am - 6:00 Pm': 'NUWO ƑE AGBELE',
        
        // Top Bar
        'Kazipur 6710, Sirajganj, BD': 'Kazipur 6710, Sirajganj, BD',
        'Support@domain.com': 'Support@domain.com'
    },
    
    kab: {
        // Navigation
        'HOME': 'KƆƆ',
        'SERVICES': 'NUU',
        'PAGES': 'NUU',
        'ABOUT US': 'NYƐ',
        'CONTACT US': 'KƐKƐ',
        
        // Hero Section
        'ELECTRICAL SERVICES COMPANY': 'NUU ƑƐ AGBƐLƐ',
        'Bright Solutions': 'KƐKƐ ƑƐ AGBƐLƐ',
        'Expert Electricians': 'NUU ƑƐ AGBƐLƐ',
        'Project Completed': 'NUU ƆƆ',
        'Satisfied Clients': 'NUU ƆƆ',
        'Team Members': 'NUU ƆƆ',
        
        // Features
        'Affordable price': 'NUU ƑƐ AGBƐLƐ',
        '100% Guarantee': 'NUU ƑƐ AGBƐLƐ',
        'Award winning': 'NUU ƑƐ AGBƐLƐ',
        '24/7 Availability': 'NUU ƑƐ AGBƐLƐ',
        
        // About Section
        'ABOUT US': 'NYƐ',
        'Keeping Your Power Flowing, Safely and Efficiently': 'NUU ƑƐ AGBƐLƐ',
        'about-description': 'NUU ƑƐ AGBƐLƐ',
        'Certified Electricians': 'NUU ƑƐ AGBƐLƐ',
        'End-to-End Services': 'NUU ƑƐ AGBƐLƐ',
        'Energy-Efficient Solutions': 'NUU ƑƐ AGBƐLƐ',
        'Safety is Our Priority': 'NUU ƑƐ AGBƐLƐ',
        'READ MORE': 'NUU ƑƐ AGBƐLƐ',
        'Call Us Any Time!': 'NUU ƑƐ AGBƐLƐ',
        '20+ Years Experience': 'NUU ƑƐ AGBƐLƐ',
        
        // Services Section
        'SERVICES': 'NUU',
        'Expert Solutions for Every Electrical Need': 'NUU ƑƐ AGBƐLƐ',
        'services-description': 'NUU ƑƐ AGBƐLƐ',
        'ALL SERVICES': 'NUU ƆƆ',
        'Wiring and Rewiring Services': 'NUU ƑƐ AGBƐLƐ',
        'wiring-description': 'NUU ƑƐ AGBƐLƐ',
        'Electrical Panel Upgrades': 'NUU ƑƐ AGBƐLƐ',
        'panel-description': 'NUU ƑƐ AGBƐLƐ',
        'Lighting and Repairs': 'NUU ƑƐ AGBƐLƐ',
        'lighting-description': 'NUU ƑƐ AGBƐLƐ',
        
        // Blog Section
        'OUR BLOG': 'NUU ƑƐ AGBƐLƐ',
        'Our Latest Blog Posts': 'NUU ƑƐ AGBƐLƐ',
        'blog-description': 'NUU ƑƐ AGBƐLƐ',
        'VIEW ALL': 'NUU ƆƆ',
        'Modern Lighting Solutions': 'NUU ƑƐ AGBƐLƐ',
        'lighting-blog-description': 'NUU ƑƐ AGBƐLƐ',
        'Electrical Panel Maintenance': 'NUU ƑƐ AGBƐLƐ',
        'panel-blog-description': 'NUU ƑƐ AGBƐLƐ',
        'Professional Electrical Services': 'NUU ƑƐ AGBƐLƐ',
        'professional-blog-description': 'NUU ƑƐ AGBƐLƐ',
        'Learn more': 'NUU ƑƐ AGBƐLƐ',
        
        // Footer
        'footer-description': 'NUU ƑƐ AGBƐLƐ',
        'Your email': 'NUU ƑƐ AGBƐLƐ',
        'Our Services': 'NUU ƆƆ',
        'Electrical Repairs': 'NUU ƑƐ AGBƐLƐ',
        'New Installations': 'NUU ƑƐ AGBƐLƐ',
        'Panel Upgrades': 'NUU ƑƐ AGBƐLƐ',
        'Commercial Services': 'NUU ƑƐ AGBƐLƐ',
        'Industrial Services': 'NUU ƑƐ AGBƐLƐ',
        'Quick Links': 'NUU ƑƐ AGBƐLƐ',
        'Home': 'KƆƆ',
        'Services': 'NUU',
        'Projects': 'NUU ƆƆ',
        'About us': 'NYƐ',
        'Contact us': 'KƐKƐ',
        'Contact Info': 'NUU ƑƐ AGBƐLƐ',
        'Mon-Fri: 8:00 am - 6:00 Pm': 'NUU ƑƐ AGBƐLƐ',
        
        // Top Bar
        'Kazipur 6710, Sirajganj, BD': 'Kazipur 6710, Sirajganj, BD',
        'Support@domain.com': 'Support@domain.com'
    }
};

// Current language
let currentLanguage = 'en';

// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');

    // Toggle dropdown
    languageToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        languageDropdown.classList.remove('active');
    });

    // Language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            changeLanguage(selectedLang);
            
            // Update active state
            languageOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Close dropdown
            languageDropdown.classList.remove('active');
        });
    });

    // Set English as default active
    document.querySelector('[data-lang="en"]').classList.add('active');
    
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    const translation = translations[lang];
    
    if (!translation) return;

    // Update navigation
    updateTextContent('.nav-link', translation);
    
    // Update hero section
    updateTextContent('.small-text', translation['ELECTRICAL SERVICES COMPANY']);
    updateTextContent('.main-title', translation['Bright Solutions']);
    updateTextContent('.highlight-text', translation['Expert Electricians']);
    updateTextContent('.stat-item p', translation);
    
    // Update features
    updateTextContent('.feature-card h3', translation);
    
    // Update about section
    updateTextContent('.about-header h2', translation['ABOUT US']);
    updateTextContent('.about-title', translation['Keeping Your Power Flowing, Safely and Efficiently']);
    updateTextContent('.about-description', translation['about-description']);
    updateTextContent('.about-features li', translation);
    updateTextContent('.call-info span', translation['Call Us Any Time!']);
    updateTextContent('.experience-badge span', translation['20+ Years Experience']);
    
    // Update new sections
    updateTextContent('.section-header h2', translation);
    
    // Update services section
    updateTextContent('.services-title h2', translation['SERVICES']);
    updateTextContent('.services-subtitle h3', translation['Expert Solutions for Every Electrical Need']);
    updateTextContent('.services-subtitle p', translation['services-description']);
    updateTextContent('.services-subtitle .btn', translation['ALL SERVICES']);
    updateTextContent('.service-card h3', translation);
    updateTextContent('.service-card p', translation);
    
    // Update blog section
    updateTextContent('.blog-title h2', translation['OUR BLOG']);
    updateTextContent('.blog-subtitle h3', translation['Our Latest Blog Posts']);
    updateTextContent('.blog-subtitle p', translation['blog-description']);
    updateTextContent('.blog-subtitle .btn', translation['VIEW ALL']);
    updateTextContent('.blog-content h3', translation);
    updateTextContent('.blog-content p', translation);
    updateTextContent('.blog-content .btn-secondary', translation['Learn more']);
    
    // Update footer
    updateTextContent('.footer-section p', translation['footer-description']);
    updateTextContent('.newsletter input', translation['Your email']);
    updateTextContent('.footer-section h4', translation);
    updateTextContent('.footer-section ul li a', translation);
    updateTextContent('.contact-info p', translation);
    
    // Update top bar
    updateTextContent('.top-bar-left span', translation);
    updateTextContent('.top-bar-right span', translation);
    
    // Update buttons
    updateTextContent('.btn-primary', translation);
    
    // Update page title
    document.title = `FONDS TINGA - ${translation['ELECTRICAL SERVICES COMPANY']}`;
    
    // Store language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Helper function to update text content
function updateTextContent(selector, translation) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const originalText = element.textContent.trim();
        if (typeof translation === 'string') {
            element.textContent = translation;
        } else if (translation[originalText]) {
            element.textContent = translation[originalText];
        }
    });
}

// Load saved language preference
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
        document.querySelector(`[data-lang="${savedLanguage}"]`).classList.add('active');
        document.querySelector('[data-lang="en"]').classList.remove('active');
    }
});

// Hero Section Functionality
function initializeHeroSection() {
    // Animated counters
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target, 2000);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
    
    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-arrow');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const featuresSection = document.querySelector('.features');
            if (featuresSection) {
                featuresSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Hero button interactions
    const heroButtons = document.querySelectorAll('.hero-btn');
    heroButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Handle button actions
            const buttonText = this.querySelector('.btn-text').textContent;
            if (buttonText.includes('CONTEXTE')) {
                // Navigate to context section
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else if (buttonText.includes('ELIGIBILITE')) {
                // Navigate to eligibility section
                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                    servicesSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Floating elements animation
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.5}s`;
    });
}

// Enhanced counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    updateCounter();
} 

// En savoir plus functionality
function initializeReadMore() {
    const longContentSections = document.querySelectorAll('.content-text');
    
    longContentSections.forEach(section => {
        const content = section.innerHTML;
        const maxLength = 500; // Characters to show initially
        
        if (content.length > maxLength) {
            // Create truncated content
            const truncatedContent = content.substring(0, maxLength) + '...';
            const fullContent = content;
            
            // Replace content with truncated version
            section.innerHTML = truncatedContent;
            
            // Create "En savoir plus" button
            const readMoreBtn = document.createElement('button');
            readMoreBtn.className = 'btn btn-secondary read-more-btn';
            readMoreBtn.innerHTML = 'En savoir plus <i class="fas fa-chevron-down"></i>';
            readMoreBtn.style.marginTop = '20px';
            
            // Add button after the section
            section.parentNode.insertBefore(readMoreBtn, section.nextSibling);
            
            // Add click event
            readMoreBtn.addEventListener('click', function() {
                if (section.innerHTML === truncatedContent) {
                    section.innerHTML = fullContent;
                    readMoreBtn.innerHTML = 'Voir moins <i class="fas fa-chevron-up"></i>';
                } else {
                    section.innerHTML = truncatedContent;
                    readMoreBtn.innerHTML = 'En savoir plus <i class="fas fa-chevron-down"></i>';
                }
            });
        }
    });
}

// Initialize read more functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeReadMore();
    
    // Add smooth scrolling for new sections
    const newSectionLinks = document.querySelectorAll('a[href^="#contexte"], a[href^="#vision"], a[href^="#creation"], a[href^="#mission"], a[href^="#realisations"], a[href^="#eligibilite"], a[href^="#mecanisme"], a[href^="#partenaires"]');
    
    newSectionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation for new sections
    const newSections = document.querySelectorAll('.contexte-section, .vision-section, .creation-section, .mission-section, .realisations-section, .eligibilite-section, .mecanisme-section, .partenaires-section');
    
    newSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        sectionObserver.observe(section);
    });
    
    // Add hover effects for partner items
    const partnerItems = document.querySelectorAll('.partenaire-item');
    partnerItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add animation for process steps
    const processSteps = document.querySelectorAll('.step');
    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-30px)';
        step.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.1 });
        
        stepObserver.observe(step);
    });
    
    // Add table hover effects
    const tableRows = document.querySelectorAll('.data-table tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
        });
        
        row.addEventListener('mouseleave', function() {
            if (!this.classList.contains('total-row')) {
                this.style.backgroundColor = '';
            }
        });
    });
}); 

// Initialize VISION section animations
function initializeVisionSection() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, targetValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number with commas for large numbers
        const formattedNumber = current >= 1000 ? 
            Math.floor(current).toLocaleString() : 
            Math.floor(current);
        
        element.textContent = formattedNumber;
    }, 16);
}

// Initialize CREATION section animations
function initializeCreationSection() {
    const statNumbers = document.querySelectorAll('.creation-stats-section .stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, targetValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Initialize MISSION section animations
function initializeMissionSection() {
    const statNumbers = document.querySelectorAll('.mission-stats-section .stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, targetValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Initialize REALISATIONS section animations
function initializeRealisationsSection() {
    const statNumbers = document.querySelectorAll('.realisations-stats-section .stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, targetValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function initializeEligibiliteSection() {
    const statNumbers = document.querySelectorAll('.eligibilite-stats-section .stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, targetValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function initializeMecanismeSection() {
    const statNumbers = document.querySelectorAll('.mecanisme-stats .stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, targetValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function initializePartenairesSection() {
    const partnerSlides = document.querySelectorAll('.partenaire-slide');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const slide = entry.target;
                const delay = parseInt(slide.getAttribute('data-delay')) || 0;
                
                setTimeout(() => {
                    slide.classList.add('animate');
                }, delay);
                
                observer.unobserve(slide);
            }
        });
    }, { threshold: 0.1 });
    
    partnerSlides.forEach(slide => {
        observer.observe(slide);
    });
}

// WhatsApp Contact Function
function sendToWhatsApp() {
    // Get form data
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const region = document.getElementById('region').value;
    const message = document.getElementById('message').value;
    
    // Validate required fields
    if (!nom || !prenom || !contact || !email || !region) {
        alert('Veuillez remplir tous les champs obligatoires (*)');
        return;
    }
    
    // Create WhatsApp message
    const whatsappMessage = `*Nouveau message de contact FONDS TINGA*

*Informations du contact:*
• Nom: ${nom}
• Prénom: ${prenom}
• Contact: ${contact}
• Email: ${email}
• Région: ${region}
${message ? `• Message: ${message}` : ''}

*Envoyé depuis le formulaire de contact du site web FONDS TINGA*`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/22890301161?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
}

// Function to update date display
function updateDateDisplay() {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleDateString('fr-FR', { month: 'short' });
    const year = now.getFullYear();
    
    const dayElement = document.getElementById('currentDay');
    const monthElement = document.getElementById('currentMonth');
    const yearElement = document.getElementById('currentYear');
    
    if (dayElement) dayElement.textContent = day;
    if (monthElement) monthElement.textContent = month;
    if (yearElement) yearElement.textContent = year;
}

// Initialize date display when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateDateDisplay();
});