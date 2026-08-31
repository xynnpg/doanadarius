// script.js — darius's portfolio
// written at like 2am, don't judge the code quality lol

document.addEventListener('DOMContentLoaded', () => {

    // ========= SIDEBAR NAVIGATION =========
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');

    // Mobile menu toggle
    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            sidebar.classList.toggle('open');
        });

        // Close sidebar when clicking a link
        sidebar.querySelectorAll('.tree-item').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                sidebar.classList.remove('open');
            });
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    mobileMenuBtn.classList.remove('active');
                    sidebar.classList.remove('open');
                }
            }
        });
    }

    // Tree section toggles
    const treeSectionToggles = document.querySelectorAll('.tree-section-toggle');
    treeSectionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const section = toggle.dataset.section;
            const items = document.querySelector(`.tree-items[data-section="${section}"]`);
            
            toggle.classList.toggle('active');
            if (items) {
                items.classList.toggle('active');
            }
        });
    });

    // Active tree item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const treeItems = document.querySelectorAll('.tree-item');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        treeItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');
            if (href === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // ========= SCROLL TO TOP =========
    const scrollTopBtn = document.getElementById('scrollTop');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ========= NAVBAR SCROLL EFFECT =========
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (navbar) {
            if (currentScroll > 50) {
                navbar.style.borderBottomColor = 'var(--border-hover)';
            } else {
                navbar.style.borderBottomColor = 'var(--border)';
            }
        }

        lastScroll = currentScroll;
    });

    // ========= FADE IN ON SCROLL =========
    // add fade-in class to sections and cards
    const fadeTargets = document.querySelectorAll(
        '.section-title, .section-sub, .about-text, .about-card, ' +
        '.tl-item, .tech-card, .project-card, .cert-card, ' +
        '.worst-code-block, .lang-card, .contact-card, .coffee-section, ' +
        '.tech-note, .hero-code, .about-note'
    );

    fadeTargets.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // stagger the animation a tiny bit for items in a grid
                const parent = entry.target.parentElement;
                if (parent) {
                    const siblings = Array.from(parent.children).filter(c => c.classList.contains('fade-in'));
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 80}ms`;
                }

                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    fadeTargets.forEach(el => observer.observe(el));

    // ========= EASTER EGG =========
    // konami code because why not
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.style.fontFamily = 'Comic Sans MS, cursive';
                console.log('🎮 you found the easter egg! enjoy comic sans lmao');
                setTimeout(() => {
                    document.body.style.fontFamily = '';
                    console.log('ok back to normal, that was painful');
                }, 5000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // ========= CONSOLE MESSAGE =========
    console.log('%c hey there 👋', 'color: #7c6aef; font-size: 18px; font-weight: bold;');
    console.log('%c if you\'re reading this, you\'re either:', 'color: #c8c8d4; font-size: 12px;');
    console.log('%c  1. a fellow dev (respect)', 'color: #c8c8d4; font-size: 12px;');
    console.log('%c  2. trying to steal my code (pls don\'t)', 'color: #c8c8d4; font-size: 12px;');
    console.log('%c  3. me, debugging at 3am again', 'color: #c8c8d4; font-size: 12px;');
    console.log('%c built by darius — github.com/xynnpg', 'color: #6b6b80; font-size: 10px;');

});
