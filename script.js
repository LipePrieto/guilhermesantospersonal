// script.js — Nexus Vital Landing Page
document.addEventListener('DOMContentLoaded', () => {

    // ==================== APLICA CONFIGURAÇÕES DO config.js ====================
    function aplicarConfig() {
        // Atualiza links de WhatsApp
        document.querySelectorAll('[data-config="whatsapp"]').forEach(el => {
            el.href = `https://wa.me/${CONFIG.whatsapp}`;
        });
        document.querySelectorAll('[data-config="whatsappNome"]').forEach(el => {
            el.href = `https://wa.me/${CONFIG.whatsapp}`;
            el.innerHTML = `<i class="ph ph-whatsapp-logo"></i> Falar com ${CONFIG.nomeProfissional}`;
        });
        document.querySelectorAll('[data-config="whatsappCompleto"]').forEach(el => {
            el.href = `https://wa.me/${CONFIG.whatsapp}`;
            const numeroFormatado = CONFIG.whatsapp.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 $2 $3-$4');
            el.innerHTML = `<i class="ph ph-whatsapp-logo"></i> ${numeroFormatado}`;
        });

        // Atualiza campos de texto simples (data-config com string)
        document.querySelectorAll('[data-config]').forEach(el => {
            const key = el.getAttribute('data-config');
            if (['whatsapp', 'whatsappNome', 'whatsappCompleto'].includes(key)) return;

            const value = key.split('.').reduce((obj, k) => obj?.[k], CONFIG);
            if (value && typeof value === 'string') {
                el.textContent = value;
            }
        });

        // Gera cards do método
        const metodoGrid = document.getElementById('metodo-cards');
        if (metodoGrid && CONFIG.metodo.cards) {
            metodoGrid.innerHTML = CONFIG.metodo.cards.map(card => `
                <div class="card card--glass card--hover" data-reveal>
                    <div class="card__icon"><i class="ph ${card.icone}"></i></div>
                    <h3 class="card__title">${card.titulo}</h3>
                    <p class="card__text">${card.texto}</p>
                </div>
            `).join('');
        }

        // Gera benefícios
        const beneficiosGrid = document.getElementById('beneficios-grid');
        if (beneficiosGrid && CONFIG.beneficios.itens) {
            beneficiosGrid.innerHTML = CONFIG.beneficios.itens.map(item => `
                <div class="beneficio-item" data-reveal>
                    <div class="beneficio-item__icon"><i class="ph ${item.icone}"></i></div>
                    <div class="beneficio-item__content">
                        <h3>${item.titulo}</h3>
                        <p>${item.texto}</p>
                    </div>
                </div>
            `).join('');
        }

        // Gera timeline
        const timelineSteps = document.getElementById('timeline-steps');
        if (timelineSteps && CONFIG.passos) {
            timelineSteps.innerHTML = CONFIG.passos.map(passo => `
                <div class="timeline__step" data-reveal>
                    <div class="timeline__step-number">${passo.numero}</div>
                    <div class="timeline__step-card card card--glass">
                        <h3>${passo.titulo}</h3>
                        <p>${passo.texto}</p>
                    </div>
                </div>
            `).join('');
        }

        // Gera diferenciais
        const difGrid = document.getElementById('diferenciais-grid');
        if (difGrid && CONFIG.diferenciais.cards) {
            difGrid.innerHTML = CONFIG.diferenciais.cards.map(card => `
                <div class="card card--glass card--hover diferencial-card" data-reveal>
                    <div class="diferencial-card__badge">${card.badge}</div>
                    <h3>${card.titulo}</h3>
                    <p>${card.texto}</p>
                </div>
            `).join('');
        }

        // Gera depoimentos
        const depoimentosGrid = document.getElementById('depoimentos-grid');
        if (depoimentosGrid && CONFIG.depoimentos.lista) {
            depoimentosGrid.innerHTML = CONFIG.depoimentos.lista.map(dep => `
                <div class="card card--glass depoimento-card" data-reveal>
                    <div class="depoimento-card__stars">
                        ${Array(dep.estrelas).fill('<i class="ph ph-star-fill"></i>').join('')}
                    </div>
                    <p class="depoimento-card__text">${dep.texto}</p>
                    <div class="depoimento-card__author">
                        <div class="depoimento-card__avatar"><i class="ph ph-user"></i></div>
                        <div>
                            <strong>${dep.nome}</strong>
                            <span>${dep.info}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Gera FAQ
        const faqList = document.getElementById('faq-list');
        if (faqList && CONFIG.faq.perguntas) {
            faqList.innerHTML = CONFIG.faq.perguntas.map((item) => `
                <div class="faq__item" data-reveal>
                    <button class="faq__question" aria-expanded="false">
                        <span>${item.pergunta}</span>
                        <i class="ph ph-plus"></i>
                    </button>
                    <div class="faq__answer">
                        <p>${item.resposta}</p>
                    </div>
                </div>
            `).join('');
        }

        // Gera redes sociais do footer
        const footerSocial = document.getElementById('footer-social');
        if (footerSocial && CONFIG.footer.redes) {
            footerSocial.innerHTML = `
                <a href="${CONFIG.footer.redes.instagram}" aria-label="Instagram"><i class="ph ph-instagram-logo"></i></a>
                <a href="${CONFIG.footer.redes.youtube}" aria-label="YouTube"><i class="ph ph-youtube-logo"></i></a>
                <a href="${CONFIG.footer.redes.linkedin}" aria-label="LinkedIn"><i class="ph ph-linkedin-logo"></i></a>
            `;
        }

        // Aplica cores personalizadas
        if (CONFIG.cores) {
            document.documentElement.style.setProperty('--color-primary', CONFIG.cores.primaria);
            document.documentElement.style.setProperty('--color-secondary', CONFIG.cores.secundaria);
        }
    }

    aplicarConfig();

    // ==================== HEADER SCROLL ====================
    const header = document.getElementById('header');
    function updateHeader() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();

    // ==================== MOBILE MENU ====================
    const mobileToggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav');
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
        nav.classList.contains('active') ? closeMenu() : openMenu();
    });
    overlay.addEventListener('click', closeMenu);
    document.querySelectorAll('.nav__link').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) closeMenu();
    });

    // ==================== SCROLL REVEAL ====================
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));

    // ==================== FAQ ACCORDION ====================
    document.addEventListener('click', (e) => {
        const questionBtn = e.target.closest('.faq__question');
        if (!questionBtn) return;
        const item = questionBtn.closest('.faq__item');
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq__item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        });
        if (!isActive) {
            item.classList.add('active');
            questionBtn.setAttribute('aria-expanded', 'true');
        }
    });

    // ==================== SMOOTH SCROLL ====================
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
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });
});
