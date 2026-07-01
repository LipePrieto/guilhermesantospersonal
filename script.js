// script.js — Nexus Vital Landing Page

document.addEventListener('DOMContentLoaded', () => {

    // ==================== HEADER SCROLL EFFECT ====================
    const header = document.getElementById('header');

    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader(); // estado inicial

    // ==================== MOBILE MENU ====================
    const mobileToggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav');

    // Criar overlay para mobile
    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    document.body.appendChild(overlay);

    function openMenu() {
        nav.classList.add('active');
        mobileToggle.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        mobileToggle.setAttribute('aria-label', 'Fechar menu');
    }

    function closeMenu() {
        nav.classList.remove('active');
        mobileToggle.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        mobileToggle.setAttribute('aria-label', 'Abrir menu');
    }

    mobileToggle.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener('click', closeMenu);

    // Fechar menu ao clicar em um link
    const navLinks = nav.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                closeMenu();
            }
        });
    });

    // Fechar menu com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // ==================== SCROLL REVEAL (Intersection Observer) ====================
    const revealElements = document.querySelectorAll('[data-reveal]');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Opcional: parar de observar após revelar
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ==================== FAQ ACCORDION ====================
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq__question');

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Fechar todos
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
            });

            // Abrir o clicado se não estava ativo
            if (!isActive) {
                item.classList.add('active');
                questionBtn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ==================== SMOOTH SCROLL PARA LINKS INTERNOS ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
