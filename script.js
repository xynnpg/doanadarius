/* ═══════════════════════════════════════════════════
   MAIN SCRIPT — Portfolio Site
   ═══════════════════════════════════════════════════ */

(function () {
    'use strict';

    // ── Particle Background ──────────────────────────
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };
    let animId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (mouse.x !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    this.x -= dx * 0.01;
                    this.y -= dy * 0.01;
                }
            }

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = `rgba(108, 92, 231, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const opacity = (1 - dist / 150) * 0.15;
                    ctx.strokeStyle = `rgba(108, 92, 231, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        animId = requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // ── Navbar Scroll ────────────────────────────────
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 50);
        lastScroll = scrollY;
    });

    // ── Mobile Menu ──────────────────────────────────
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ── Active Nav Link ──────────────────────────────
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerNav = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observerNav.observe(section));

    // ── Hero Animations ──────────────────────────────
    const heroAnimateElements = document.querySelectorAll('.hero .animate-in');
    setTimeout(() => {
        heroAnimateElements.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
        });
    }, 300);

    // ── Scroll Reveal ────────────────────────────────
    const revealElements = document.querySelectorAll(
        '.section .section-header, .section .skill-card, .section .project-card, ' +
        '.section .achievement-card, .section .contact-card, .section .about-text, ' +
        '.section .about-visual, .section .timeline-item, .section .cert-card, ' +
        '.section .language-card'
    );

    const observerReveal = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 80);
                observerReveal.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observerReveal.observe(el));

    // ── Animated Counter ─────────────────────────────
    const statNumbers = document.querySelectorAll('.stat-number');

    const observerCount = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                animateCount(el, 0, target, 1200);
                observerCount.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => observerCount.observe(el));

    function animateCount(el, start, end, duration) {
        let startTime = null;
        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            el.textContent = Math.floor(eased * (end - start) + start);
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // ── Skill Bar Animation ──────────────────────────
    const skillFills = document.querySelectorAll('.skill-fill');

    const observerSkills = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.dataset.width;
                setTimeout(() => {
                    fill.style.width = width + '%';
                }, 300);
                observerSkills.unobserve(fill);
            }
        });
    }, { threshold: 0.3 });

    skillFills.forEach(fill => observerSkills.observe(fill));

    // ── Language Bar Animation ───────────────────────
    const langFills = document.querySelectorAll('.language-fill');

    const observerLang = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.dataset.width;
                setTimeout(() => {
                    fill.style.width = width + '%';
                }, 400);
                observerLang.unobserve(fill);
            }
        });
    }, { threshold: 0.3 });

    langFills.forEach(fill => observerLang.observe(fill));

    // ── Scroll to Top Button ─────────────────────────
    const scrollTopBtn = document.getElementById('scrollTop');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 600);
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── Terminal Typing Effect ────────────────────────
    const terminalCommands = [
        'whoami',
        '> Darius-Eduard Doana',
        'cat skills.txt',
        '> Flutter, Dart, C++, Python, Docker',
        'git log --oneline -1',
        '> feat: added attendance API endpoints',
        'echo "Let\'s build something cool!"',
        '> Let\'s build something cool!',
    ];

    const terminalText = document.getElementById('terminalText');
    let cmdIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function typeTerminal() {
        if (!terminalText) return;

        const current = terminalCommands[cmdIndex];

        if (!isDeleting && !isPaused) {
            terminalText.textContent = current.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === current.length) {
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                    isDeleting = true;
                    typeTerminal();
                }, current.startsWith('>') ? 2000 : 1500);
                return;
            }
        } else if (isDeleting) {
            terminalText.textContent = current.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                cmdIndex = (cmdIndex + 1) % terminalCommands.length;
            }
        }

        const speed = isDeleting ? 30 : (current.startsWith('>') ? 40 : 70);
        setTimeout(typeTerminal, speed);
    }

    // Start terminal after section is visible
    const terminalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeTerminal, 600);
                terminalObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) terminalObserver.observe(aboutSection);

    // ── Smooth Scroll for anchor links ───────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ── Simple Language Toggle ───────────────────────
    const langToggleBtn = document.getElementById('langToggleMain') || document.getElementById('langToggle');
    let currentLang = 'en';

    // Simple dictionary for basic translations
    const translations = {
        en: {
            'nav-about': 'About',
            'nav-projects': 'Projects',
            'nav-cert': 'Certifications',
            'nav-contact': 'Contact',
            'nav-resume': 'Resume',
            'hero-subtitle': 'I build things that matter.',
            'hero-desc': '16yo developer & robotics national champ from Arad, Romania. I spend my time coding cool stuff, doing olympiads, and learning new tech.',
            'btn-projects': 'See My Work',
            'btn-resume': 'View Resume',
            'stat-repos': 'Repositories',
            'stat-cert': 'Certifications',
            'stat-oly': 'Olympiad Awards',
            'stat-tech': 'Technologies',
            'sec-about': 'Who am I?',
            'about-p1': 'I\'m a regular self-taught dev who started coding for fun and just kept going.',
            'about-p2': 'I learn C++ at school but I spend most of my free time making apps with Flutter, Dart, and Docker. I just like building things that work — from an attendance backend to a Spotify downloader, or random Discord bots for my friends.',
            'about-p3': 'When I\'m off the keyboard, I\'m usually at some competition. I made it to the national level for robotics (AI category) and grabbed a county medal in CS.',
            'sec-journey': 'My Journey',
            'journey-hs': 'High School Student',
            'journey-hs-desc': 'Just trying to get better at Flutter, Dart, and Docker while writing decent code.',
            'journey-ai': '🥇 NextLab National Champion (AI)',
            'journey-ai-desc': 'Took 1st place in the AI stage. Lots of debugging, totally worth it.',
            'journey-tic': '🥉 TIC County Medalist',
            'journey-tic-desc': 'Secured 3rd place at the local stage for the Computer Science olympiad.',
            'sec-skills': 'What I Use',
            'sec-projects': 'Stuff I Built',
            'btn-github': 'View all on GitHub',
            'sec-diplomas': 'Diplomas',
            'btn-cert': 'View Certificate',

            'sec-lang': 'Languages',
            'sec-contact': 'Hit me up',
            'contact-desc': 'Got an idea, want to build something together, or just say hi?<br>Drop me a message.',

            // Resume specific
            'res-hero-title': 'My <span class="gradient-text">Resume</span>',
            'res-hero-desc': 'A snapshot of my skills, experience, and achievements — all in one place.',
            'res-btn-print': 'Download / Print PDF',
            'res-tagline': 'Full-Stack & Mobile Developer · Robotics National Champion',
            'res-sec-about': 'About Me',
            'res-about-text': 'Regular 16-year-old developer from Arad, Romania who likes building cool things with code. I\'ve won national robotics competitions (AI category) and medaled in computer science olympiads, but mostly I just build apps using Flutter, Dart, Python, and C++. Always learning.',
            'res-sec-edu': 'Education',
            'res-edu-desc': 'Studying computer science while competing in olympiads and building personal side projects.',
            'res-sec-skills': 'Technical Skills',
            'res-cat-lang': 'Languages',
            'res-cat-frame': 'Frameworks & Tools',
            'res-cat-areas': 'Areas',
            'res-cat-spoken': 'Languages Spoken',
            'res-sec-proj': 'Projects',
            'res-proj1-desc': 'Backend API for an attendance tracking system. Building robust server-side logic with Dart.',
            'res-proj2-desc': 'Educational platform designed to make learning interactive and accessible. ⭐ 3 stars on GitHub.',
            'res-proj3-desc': 'Free Spotify downloader tool for offline music access.',
            'res-proj4-desc': 'AI-powered Discord bot using OpenRouter APIs for smart conversations.',
            'res-proj5-desc': 'Lightweight mapping solution making geolocation accessible.',
            'res-sec-awd': 'Achievements & Awards',
            'res-awd1-desc': 'Won 1st place nationally in the AI category at the NextLab Robotics Olympiad.',
            'res-awd2-desc': 'Placed 3rd at county level in the TIC (Computer Science) Olympiad.',
        },
        ro: {
            'nav-about': 'Despre mine',
            'nav-projects': 'Proiecte',
            'nav-cert': 'Diplome',
            'nav-contact': 'Contact',
            'nav-resume': 'CV',
            'hero-subtitle': 'Construiesc lucruri care contează.',
            'hero-desc': 'Dezvoltator de 16 ani & campion național la robotică din Arad, România. Îmi petrec timpul scriind cod, participând la olimpiade și învățând tehnologii noi.',
            'btn-projects': 'Vezi Proiectele',
            'btn-resume': 'Vezi CV-ul',
            'stat-repos': 'Proiecte',
            'stat-cert': 'Diplome',
            'stat-oly': 'Premii',
            'stat-tech': 'Tehnologii',
            'sec-about': 'Cine sunt?',
            'about-p1': 'Sunt un programator autodidact care s-a apucat de codat din pasiune și nu s-a mai oprit.',
            'about-p2': 'Învăț C++ la școală, dar în timpul liber fac aplicații cu Flutter, Dart și Docker. Îmi place să construiesc lucruri utile — de la un backend de pontaj, la un downloader pentru Spotify sau boți de Discord.',
            'about-p3': 'Când nu sunt la tastatură, sunt pe la competiții. Am ajuns la faza națională la robotică (AI) și am luat medalie la județeană la informatică.',
            'sec-journey': 'Parcursul meu',
            'journey-hs': 'Elev de liceu',
            'journey-hs-desc': 'Încerc să devin mai bun la Flutter, Dart și Docker scriind cod de calitate.',
            'journey-ai': '🥇 Campion Național NextLab (AI)',
            'journey-ai-desc': 'Locul 1 la faza națională de AI. Foarte mult debugging, dar a meritat.',
            'journey-tic': '🥉 Medaliat Județean TIC',
            'journey-tic-desc': 'Am obținut locul 3 la etapa județeană a Olimpiadei de Tehnologia Informației.',
            'sec-skills': 'Ce folosesc',
            'sec-projects': 'Ce am construit',
            'btn-github': 'Vezi tot pe GitHub',
            'sec-diplomas': 'Diplome',
            'btn-cert': 'Vezi Diploma',

            'sec-lang': 'Limbi',
            'sec-contact': 'Contactează-mă',
            'contact-desc': 'Ai o idee, vrei să colaborăm sau doar să mă saluți?<br>Lasă-mi un mesaj.',

            // Resume specific
            'res-hero-title': 'CV-ul <span class="gradient-text">Meu</span>',
            'res-hero-desc': 'O privire de ansamblu asupra abilităților, experienței și realizărilor mele.',
            'res-btn-print': 'Descarcă / Printează PDF',
            'res-tagline': 'Dezvoltator Full-Stack & Mobile · Campion Național la Robotică',
            'res-sec-about': 'Despre Mine',
            'res-about-text': 'Un programator obișnuit de 16 ani din Arad, România, căruia îi place să construiască lucruri cu cod. Am câștigat competiții naționale de robotică (AI) și medalii la olimpiade de informatică, dar în mare parte fac aplicații cu Flutter, Dart, Python și C++. Mereu învăț ceva nou.',
            'res-sec-edu': 'Educație',
            'res-edu-desc': 'Studiez informatica în timp ce particip la olimpiade și lucrez la proiecte personale.',
            'res-sec-skills': 'Aptitudini Tehnice',
            'res-cat-lang': 'Limbaje',
            'res-cat-frame': 'Framework-uri & Unelte',
            'res-cat-areas': 'Domenii',
            'res-cat-spoken': 'Limbi Vorbite',
            'res-sec-proj': 'Proiecte',
            'res-proj1-desc': 'Backend API pentru un sistem de pontaj. Scriu logică robustă de server cu Dart.',
            'res-proj2-desc': 'Platformă educațională interactivă. ⭐ 3 stele pe GitHub.',
            'res-proj3-desc': 'Unealtă gratuită de descărcat de pe Spotify.',
            'res-proj4-desc': 'Bot de Discord cu AI folosind OpenRouter.',
            'res-proj5-desc': 'Soluție ușoară pentru hărți și geolocație.',
            'res-sec-awd': 'Realizări & Premii',
            'res-awd1-desc': 'Locul 1 pe țară la categoria AI, Olimpiada Națională de Robotică NextLab.',
            'res-awd2-desc': 'Locul 3 la etapa județeană a Olimpiadei de Informatică (TIC).',
        }
    };

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ro' : 'en';
            langToggleBtn.textContent = currentLang === 'en' ? '🇬🇧' : '🇷🇴';

            try {
                // Nav
                const navLinks = document.querySelectorAll('.nav-links .nav-link');
                if (navLinks.length >= 5) {
                    navLinks[0].textContent = translations[currentLang]['nav-about'];
                    navLinks[1].textContent = translations[currentLang]['nav-projects'];
                    navLinks[2].textContent = translations[currentLang]['nav-cert'];
                    navLinks[3].textContent = translations[currentLang]['nav-contact'];
                    navLinks[4].textContent = translations[currentLang]['nav-resume'];
                }

                const isResumePage = window.location.pathname.includes('resume.html');

                if (!isResumePage) {
                    // MAIN PAGE LOGIC

                    const subTitle = document.querySelector('.hero-subtitle-line');
                    if (subTitle) subTitle.textContent = translations[currentLang]['hero-subtitle'];

                    const heroDesc = document.querySelector('.hero-description');
                    if (heroDesc) heroDesc.textContent = translations[currentLang]['hero-desc'];

                    const heroBtns = document.querySelectorAll('.hero-actions .btn');
                    if (heroBtns.length >= 2) {
                        heroBtns[0].childNodes[1].textContent = ' ' + translations[currentLang]['btn-projects'];
                        heroBtns[1].childNodes[1].textContent = ' ' + translations[currentLang]['btn-resume'];
                    }

                    const secTitles = document.querySelectorAll('.section-title');
                    if (secTitles.length > 0) {
                        // Assuming a consistent order for the main section titles
                        if (secTitles[0]) secTitles[0].textContent = translations[currentLang]['sec-about'];
                        if (secTitles[1]) secTitles[1].textContent = translations[currentLang]['sec-journey'];
                        if (secTitles[2]) secTitles[2].textContent = translations[currentLang]['sec-skills'];
                        if (secTitles[3]) secTitles[3].textContent = translations[currentLang]['sec-projects'];

                        // The rest might vary in length or order, so we map them by content
                        secTitles.forEach(t => {
                            const txt = t.textContent.trim().toLowerCase();
                            if (txt.includes('diplomas') || txt.includes('diplome')) t.textContent = translations[currentLang]['sec-diplomas'];

                            if (txt.includes('languages') || txt.includes('limbi')) t.textContent = translations[currentLang]['sec-lang'];
                            if (txt.includes('hit me up') || txt.includes('contactează')) t.textContent = translations[currentLang]['sec-contact'];
                        });
                    }

                    const aboutP = document.querySelectorAll('.about-text p');
                    if (aboutP.length >= 3) {
                        aboutP[0].textContent = translations[currentLang]['about-p1'];
                        aboutP[1].textContent = translations[currentLang]['about-p2'];
                        aboutP[2].textContent = translations[currentLang]['about-p3'];
                    }

                    const contactLead = document.querySelector('.contact-lead');
                    if (contactLead) contactLead.innerHTML = translations[currentLang]['contact-desc'];

                } else {
                    // RESUME PAGE LOGIC
                    const resTitle = document.querySelector('.resume-hero-title');
                    if (resTitle) resTitle.innerHTML = translations[currentLang]['res-hero-title'];

                    const resDesc = document.querySelector('.resume-hero-desc');
                    if (resDesc) resDesc.textContent = translations[currentLang]['res-hero-desc'];

                    const printBtn = document.querySelector('#printResume span');
                    if (printBtn) printBtn.textContent = translations[currentLang]['res-btn-print'];

                    const tagLine = document.querySelector('.resume-tagline');
                    if (tagLine) tagLine.textContent = translations[currentLang]['res-tagline'];

                    const blockTitles = document.querySelectorAll('.resume-block-title');
                    if (blockTitles.length >= 5) {
                        blockTitles[0].textContent = translations[currentLang]['res-sec-about'];
                        blockTitles[1].textContent = translations[currentLang]['res-sec-edu'];
                        blockTitles[2].textContent = translations[currentLang]['res-sec-skills'];
                        blockTitles[3].textContent = translations[currentLang]['res-sec-proj'];
                        blockTitles[4].textContent = translations[currentLang]['res-sec-awd'];
                    }

                    const resText = document.querySelector('.resume-text');
                    if (resText) resText.textContent = translations[currentLang]['res-about-text'];

                    const eduDesc = document.querySelector('.resume-block:nth-child(5) .resume-entry-desc'); // Education desc
                    if (eduDesc) eduDesc.textContent = translations[currentLang]['res-edu-desc'];

                    const skillCats = document.querySelectorAll('.resume-skill-category');
                    if (skillCats.length >= 4) {
                        skillCats[0].textContent = translations[currentLang]['res-cat-lang'];
                        skillCats[1].textContent = translations[currentLang]['res-cat-frame'];
                        skillCats[2].textContent = translations[currentLang]['res-cat-areas'];
                        skillCats[3].textContent = translations[currentLang]['res-cat-spoken'];
                    }

                    const projDescs = document.querySelectorAll('.resume-block:nth-child(9) .resume-entry-desc'); // Projects
                    if (projDescs.length >= 5) {
                        projDescs[0].textContent = translations[currentLang]['res-proj1-desc'];
                        projDescs[1].textContent = translations[currentLang]['res-proj2-desc'];
                        projDescs[2].textContent = translations[currentLang]['res-proj3-desc'];
                        projDescs[3].textContent = translations[currentLang]['res-proj4-desc'];
                        projDescs[4].textContent = translations[currentLang]['res-proj5-desc'];
                    }

                    const awdDescs = document.querySelectorAll('.resume-block:nth-child(11) .resume-entry-desc'); // Awards
                    if (awdDescs.length >= 2) {
                        awdDescs[0].textContent = translations[currentLang]['res-awd1-desc'];
                        awdDescs[1].textContent = translations[currentLang]['res-awd2-desc'];
                    }
                }

            } catch (e) {
                console.log("Translation target missing.", e);
            }
        });
    }

})();
