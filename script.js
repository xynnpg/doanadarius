// script.js — darius's portfolio
// written at like 2am, don't judge the code quality lol

document.addEventListener('DOMContentLoaded', () => {

    // ========= SIDEBAR NAVIGATION =========
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                mobileMenuBtn?.classList.remove('active');
                mobileMenuBtn?.setAttribute('aria-expanded', 'false');
                return;
            }
            const isCollapsed = sidebar.classList.toggle('collapsed');
            document.body.classList.toggle('sidebar-collapsed', isCollapsed);
            sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed));
            sidebarToggle.setAttribute('aria-label', isCollapsed ? 'Expand navigation' : 'Collapse navigation');
        });
    }

    // Mobile menu toggle
    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenuBtn.classList.toggle('active');
            sidebar.classList.toggle('open', isOpen);
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
        });

        // Close sidebar when clicking a link
        sidebar.querySelectorAll('.tree-item').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                sidebar.classList.remove('open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    mobileMenuBtn.classList.remove('active');
                    sidebar.classList.remove('open');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
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

    // ========= TIMELINE CHAPTER SCRUBBER =========
    const timelineScrubber = document.querySelector('[data-timeline-scrubber]');
    if (timelineScrubber) {
        const ticks = Array.from(timelineScrubber.querySelectorAll('.timeline-tick'));
        const date = timelineScrubber.querySelector('[data-timeline-date]');
        const title = timelineScrubber.querySelector('[data-timeline-title]');
        const description = timelineScrubber.querySelector('[data-timeline-description]');
        const indexLabel = timelineScrubber.querySelector('[data-timeline-index]');
        const chapters = [
            {
                date: '2026 — Present',
                title: 'Active Development & Technical Growth',
                description: 'Building production Flutter apps, designing containerized backend services with Docker, and architecting REST APIs in Dart. Focused on clean architecture patterns and scalable deployment strategies.'
            },
            {
                date: '2025',
                title: '🥇 1st Place — NextLab National Robotics Championship',
                description: 'Won the national title in the AI Robotics category. Designed and built a fully autonomous robot with sensor fusion and computer vision, competing against teams from across Romania.'
            },
            {
                date: '2025',
                title: '🥉 3rd Place — County Computer Science Olympiad (TIC)',
                description: 'Placed 3rd at the county stage of the CS Olympiad, solving algorithmic problems under competition conditions in C++.'
            },
            {
                date: '2024',
                title: 'First Lines of Code',
                description: 'Started with HTML, CSS and JavaScript through Logiscool. Within months I was building real projects in Flutter, Python and C++, going from zero to shipping software in under a year.'
            }
        ];
        let activeIndex = 0;

        function setTimelineChapter(nextIndex) {
            activeIndex = Math.max(0, Math.min(chapters.length - 1, nextIndex));
            const chapter = chapters[activeIndex];
            ticks.forEach((tick, index) => {
                const isActive = index === activeIndex;
                tick.classList.toggle('is-active', isActive);
                tick.classList.toggle('is-current', index === 0);
                tick.setAttribute('aria-selected', String(isActive));
                tick.tabIndex = isActive ? 0 : -1;
            });
            date.textContent = chapter.date;
            title.textContent = chapter.title;
            description.textContent = chapter.description;
            indexLabel.textContent = `${String(activeIndex + 1).padStart(2, '0')} / 04`;
        }

        ticks.forEach((tick, index) => {
            tick.addEventListener('pointerenter', () => setTimelineChapter(index));
            tick.addEventListener('focus', () => setTimelineChapter(index));
            tick.addEventListener('click', () => setTimelineChapter(index));
        });
        timelineScrubber.addEventListener('keydown', event => {
            if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();
            const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? chapters.length - 1 : activeIndex + direction;
            setTimelineChapter(next);
            ticks[activeIndex].focus();
        });
    }

    const printResume = document.getElementById('printResume');
    printResume?.addEventListener('click', () => window.print());

    const downloadResume = document.getElementById('downloadResume');
    downloadResume?.addEventListener('click', () => {
        if (typeof window.html2pdf !== 'function') {
            window.print();
            return;
        }

        const paper = document.querySelector('.resume-paper');
        if (!paper) return;

        document.body.classList.add('pdf-export');
        window.html2pdf()
            .set({
                margin: [8, 8, 8, 8],
                filename: 'Darius-Eduard-Doana-Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, backgroundColor: '#ffffff', useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak: { mode: ['css', 'legacy'] },
            })
            .from(paper)
            .save()
            .then(() => document.body.classList.remove('pdf-export'))
            .catch(() => document.body.classList.remove('pdf-export'));
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
        '.lang-card, .contact-card, .coffee-section, ' +
        '.tech-note, .hero-code, .about-note'
    );

    fadeTargets.forEach(el => el.classList.add('fade-in'));

    const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
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
    }) : null;

    if (observer) {
        fadeTargets.forEach(el => observer.observe(el));
    } else {
        fadeTargets.forEach(el => el.classList.add('visible'));
    }

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

    // ========= PROJECT MODAL =========
    (function initProjectModal() {
        const PROJECTS = [
            {
                title: 'BreakCount',
                tags: ['Flutter', 'Dart', 'Python', 'Firebase'],
                desc: 'A cross-platform student productivity app that counts down to the next school break, tracks exams, and parses class timetables automatically from a photo using AI. Features home-screen widgets, Google Drive backup, and supports 33+ countries — with zero ads and no account required. Currently in active development and used daily by students worldwide.',
                meta: [
                    { label: 'Status', val: '🔨 Active development' },
                    { label: 'Reach', val: '33+ countries' },
                    { label: 'Platform', val: 'Android / iOS' },
                ],
                github: 'https://github.com/xynnpg/BreakCount',
                live: 'https://breakcount.tech',
            },
            {
                title: 'ServerAppPontaj',
                tags: ['Dart', 'Backend', 'REST API', 'Docker'],
                desc: 'A full backend API for an employee attendance tracking system, written entirely in Dart. The server handles authentication, shift logging, reporting, and containerized deployment. The architecture uses a modular service pattern designed to scale independently per endpoint.',
                meta: [
                    { label: 'Language', val: 'Dart (server-side)' },
                    { label: 'Stack', val: 'REST API + Docker' },
                ],
                github: 'https://github.com/xynnpg/ServerAppPontaj',
                live: null,
            },
            {
                title: 'Bluetooth Bridge',
                tags: ['Python', 'Bluetooth', 'Networking'],
                desc: 'A Python utility that proxies Bluetooth connections between otherwise incompatible devices. Instead of manually re-pairing or installing third-party drivers, the bridge intercepts the connection and translates the communication protocol — letting mismatched devices communicate seamlessly.',
                meta: [
                    { label: 'Status', val: '🆕 Early development' },
                    { label: 'Language', val: 'Python' },
                ],
                github: 'https://github.com/xynnpg/bluetooth-bridge',
                live: null,
            },
            {
                title: 'DiscordAI',
                tags: ['Python', 'AI', 'OpenRouter', 'Discord API'],
                desc: 'An AI-powered Discord bot that maintains multi-turn context in conversations using OpenRouter APIs. Unlike simple command bots, DiscordAI holds a real dialogue — remembering context across messages, handling role personas, and responding naturally. Earned 2 stars and 4 community forks on GitHub.',
                meta: [
                    { label: 'GitHub', val: '⭐ 2 stars • 4 forks' },
                    { label: 'API', val: 'OpenRouter (multi-model)' },
                ],
                github: 'https://github.com/xynnpg/DiscordAI',
                live: null,
            },
            {
                title: 'DisStore',
                tags: ['Python', 'Discord', 'Plugin Architecture'],
                desc: 'A modular Discord bot marketplace concept built in Python. DisStore explores plugin-style distribution — users can browse and self-install bot extensions without redeploying. The architecture separates core bot logic from community-contributed modules using a clean plugin loader.',
                meta: [
                    { label: 'Status', val: 'Experimental' },
                    { label: 'Language', val: 'Python' },
                ],
                github: 'https://github.com/xynnpg/DisStore',
                live: null,
            },
            {
                title: 'JustLearnIt',
                tags: ['HTML', 'CSS', 'JavaScript'],
                desc: 'An interactive quiz and flashcard platform built to make self-study less passive. JustLearnIt lets users create custom study decks, run timed quizzes, and track progress per topic. Core quiz engine written in vanilla JS, with a focus on fast load times and offline capability.',
                meta: [
                    { label: 'GitHub', val: '⭐ 3 stars' },
                    { label: 'Stack', val: 'Vanilla HTML/CSS/JS' },
                ],
                github: 'https://github.com/xynnpg/JustLearnIt',
                live: null,
            },
            {
                title: 'SpotifyDownloader',
                tags: ['Python', 'CLI', 'Spotify API'],
                desc: 'A Python command-line tool that fetches Spotify tracks for offline use by wrapping the public API and routing through an audio download pipeline. Handles playlist parsing, metadata tagging, and retry logic when the upstream source changes — which it often does.',
                meta: [
                    { label: 'Type', val: 'CLI tool' },
                    { label: 'Language', val: 'Python' },
                ],
                github: 'https://github.com/xynnpg/SpotifyDownloader',
                live: null,
            },
            {
                title: 'CheapMaps',
                tags: ['Python', 'Maps', 'Geolocation'],
                desc: 'A lightweight Python geolocation tool built as a cost-free alternative to the Google Maps API for basic location queries and geocoding. Uses open data sources to resolve addresses, calculate distances, and display simple map data — without a billing account.',
                meta: [
                    { label: 'Language', val: 'Python' },
                    { label: 'Type', val: 'Geolocation utility' },
                ],
                github: 'https://github.com/xynnpg/CheapMaps',
                live: null,
            },
            {
                title: 'SchoolYear',
                tags: ['JavaScript', 'Education', 'Calendar'],
                desc: 'A lightweight JavaScript school calendar and assignment planner. SchoolYear maps the academic year into a timeline, lets users log assignments with deadlines, and highlights upcoming due dates — helping students stay ahead without relying on a paper planner.',
                meta: [
                    { label: 'Language', val: 'JavaScript' },
                    { label: 'Type', val: 'Educational tool' },
                ],
                github: 'https://github.com/xynnpg/SchoolYear',
                live: null,
            },
            {
                title: 'Pontaj-API-Fork',
                tags: ['Python', 'API', 'Fork'],
                desc: 'A forked attendance API used to study production code structure and REST API design.',
                meta: [
                    { label: 'Type', val: 'Backend API' },
                    { label: 'Focus', val: 'REST architecture' },
                ],
                github: 'https://github.com/xynnpg/Pontaj-API-Fork',
                live: null,
            },
        ];

        const overlay   = document.getElementById('projModalOverlay');
        const closeBtn  = document.getElementById('projModalClose');
        const titleEl   = document.getElementById('projModalTitle');
        const tagsEl    = document.getElementById('projModalTags');
        const descEl    = document.getElementById('projModalDesc');
        const metaEl    = document.getElementById('projModalMeta');
        const linkEl    = document.getElementById('projModalLink');
        const liveEl    = document.getElementById('projModalLinkLive');

        if (!overlay) return;

        let lastModalTrigger = null;

        function openModal(idx, trigger = null) {
            const p = PROJECTS[idx];
            if (!p) return;
            lastModalTrigger = trigger || document.activeElement;

            titleEl.textContent = p.title;

            tagsEl.innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');

            descEl.textContent = p.desc;

            metaEl.innerHTML = p.meta.map(m =>
                `<div class="proj-modal-meta-item">
                    <span class="proj-modal-meta-label">${m.label}</span>
                    <span class="proj-modal-meta-val">${m.val}</span>
                </div>`
            ).join('');

            linkEl.href = p.github;

            if (p.live) {
                liveEl.href = p.live;
                liveEl.hidden = false;
            } else {
                liveEl.hidden = true;
            }

            overlay.hidden = false;
            document.body.style.overflow = 'hidden';
            closeBtn.focus();

            // Sync carousel to this index
            if (typeof window._cfGoTo === 'function') window._cfGoTo(idx);
        }

        function closeModal() {
            overlay.hidden = true;
            document.body.style.overflow = '';
            lastModalTrigger?.focus?.();
        }

        function trapModalFocus(event) {
            if (event.key !== 'Tab' || overlay.hidden) return;
            const focusable = Array.from(overlay.querySelectorAll('button, a[href]'))
                .filter(element => !element.hasAttribute('disabled') && element.offsetParent !== null);
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }

        closeBtn.addEventListener('click', closeModal);

        overlay.addEventListener('click', e => {
            if (e.target === overlay) closeModal();
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && !overlay.hidden) closeModal();
            trapModalFocus(e);
        });

        // Wire up repo rows (kept for any future use)
        document.querySelectorAll('.repo-row').forEach(row => {
            const idx = parseInt(row.dataset.project, 10);
            row.addEventListener('click', () => openModal(idx));
            row.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(idx); }
            });
        });

        // Expose globally for the carousel
        window._openProjectModal = openModal;
    })();

    // ========= COVERFLOW CAROUSEL =========
    (function initCoverflow() {
        const SLIDES = [
            {
                src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'BreakCount mobile app',
                title: 'BreakCount',
                tags: ['Flutter', 'Dart', 'Python'],
                shortDesc: 'Cross-platform student app with AI timetable parsing, exam tracking, and home-screen widgets. Active in 33+ countries.',
                github: 'https://github.com/xynnpg/BreakCount',
                live: 'https://breakcount.tech',
            },
            {
                src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'ServerAppPontaj backend API',
                title: 'ServerAppPontaj',
                tags: ['Dart', 'Backend', 'REST API'],
                shortDesc: 'Full backend API for employee attendance tracking, written in Dart with a modular service architecture.',
                github: 'https://github.com/xynnpg/ServerAppPontaj',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'Bluetooth Bridge',
                title: 'Bluetooth Bridge',
                tags: ['Python', 'Bluetooth', 'Networking'],
                shortDesc: 'Python utility that proxies incompatible Bluetooth device connections programmatically.',
                github: 'https://github.com/xynnpg/bluetooth-bridge',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'DiscordAI bot',
                title: 'DiscordAI',
                tags: ['Python', 'AI', 'OpenRouter'],
                shortDesc: 'AI-powered Discord bot with multi-turn conversation context via OpenRouter APIs. 2 stars, 4 forks.',
                github: 'https://github.com/xynnpg/DiscordAI',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'DisStore plugin marketplace',
                title: 'DisStore',
                tags: ['Python', 'Discord', 'Bots'],
                shortDesc: 'Modular Discord bot marketplace concept — plugin-style distribution for self-install extensions.',
                github: 'https://github.com/xynnpg/DisStore',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'JustLearnIt educational platform',
                title: 'JustLearnIt',
                tags: ['HTML', 'CSS', 'JavaScript'],
                shortDesc: 'Interactive quiz and flashcard platform for self-study. 3 stars on GitHub.',
                github: 'https://github.com/xynnpg/JustLearnIt',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'SpotifyDownloader CLI',
                title: 'SpotifyDownloader',
                tags: ['Python', 'CLI', 'API'],
                shortDesc: 'Python CLI that fetches Spotify tracks for offline use, with playlist parsing and metadata tagging.',
                github: 'https://github.com/xynnpg/SpotifyDownloader',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'CheapMaps geolocation tool',
                title: 'CheapMaps',
                tags: ['Python', 'Maps', 'Geolocation'],
                shortDesc: 'Lightweight geolocation tool — a cost-free alternative to Google Maps API for basic location queries.',
                github: 'https://github.com/xynnpg/CheapMaps',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'SchoolYear organizer',
                title: 'SchoolYear',
                tags: ['JavaScript', 'Education'],
                shortDesc: 'School calendar and assignment planner — maps the academic year and highlights upcoming deadlines.',
                github: 'https://github.com/xynnpg/SchoolYear',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'Pontaj API Fork',
                title: 'Pontaj-API-Fork',
                tags: ['Python', 'API', 'Fork'],
                shortDesc: 'Forked and extended a Python attendance API — studied real production code structure to deepen understanding of REST API design.',
                github: 'https://github.com/xynnpg/Pontaj-API-Fork',
                live: null,
            },
        ];

        const frame      = document.getElementById('cfFrame');
        const stage      = document.getElementById('cfStage');
        const dotsEl     = document.getElementById('cfDots');
        const prevBtn    = document.getElementById('cfPrev');
        const nextBtn    = document.getElementById('cfNext');

        if (!frame || !stage) return;

        const COUNT = SLIDES.length;
        const ROTATE = 44, DEPTH = 0.6, FALLOFF = 0.56, FADE = 0.1, GAP = 0.05;

        // Build card DOM
        const cardEls = SLIDES.map((s, i) => {
            const div = document.createElement('div');
            div.className = 'cf-card';
            div.setAttribute('role', 'group');
            div.setAttribute('aria-roledescription', 'slide');
            div.setAttribute('aria-label', `${i + 1} of ${COUNT}`);
            const img = document.createElement('img');
            img.src = s.src;
            img.alt = s.alt;
            img.draggable = false;
            img.loading = i === 0 ? 'eager' : 'lazy';
            img.addEventListener('error', () => {
                img.src = 'Pics/Me.png';
                img.alt = 'Darius-Eduard Doana';
            }, { once: true });
            div.appendChild(img);
            stage.appendChild(div);
            return div;
        });

        // Build dots
        const dots = SLIDES.map((_, i) => {
            const btn = document.createElement('button');
            btn.className = 'cf-dot';
            btn.setAttribute('aria-label', `Go to project ${i + 1}`);
            btn.addEventListener('click', () => goTo(i));
            dotsEl.appendChild(btn);
            return btn;
        });

        let posRef = 0;
        let targetRef = 0;
        let widthRef = 0;
        let rafId = null;
        let selectedRef = 0;
        let dragState = null;

        function indexAt(pos) {
            return ((Math.round(pos) % COUNT) + COUNT) % COUNT;
        }

        function paint() {
            const width = widthRef;
            if (!width) return;
            const pitch = width * (1 + GAP);

            cardEls.forEach((card, i) => {
                let offset = i - posRef;
                // loop: take shorter path
                offset = ((offset % COUNT) + COUNT) % COUNT;
                if (offset > COUNT / 2) offset -= COUNT;

                const distance = Math.abs(offset);
                const ramp = Math.pow(distance, FALLOFF);
                const tilt = Math.min(ROTATE * ramp, 82) * Math.sign(offset);

                card.style.transform =
                    `translateX(calc(-50% + ${offset * pitch}px)) ` +
                    `translateZ(${-DEPTH * width * ramp}px) ` +
                    `rotateY(${-tilt}deg)`;

                const edge = Math.min(1, Math.max(0, COUNT / 2 - distance));
                card.style.opacity = String(Math.max(0, 1 - FADE * distance) * edge);
                card.style.zIndex = String(100 - Math.round(distance));
            });
        }

        function updateUI(idx) {
            const s = SLIDES[idx];

            // Re-trigger the slide-in animation by cloning the inner node
            const oldInner = document.getElementById('cfInfoInner');
            if (!oldInner) return;
            const fresh = oldInner.cloneNode(true);
            oldInner.replaceWith(fresh);

            // Query by class (safe after clone)
            fresh.querySelector('.proj-info-tags').innerHTML = s.tags.map(t => `<span>${t}</span>`).join('');
            fresh.querySelector('.proj-info-title').textContent = s.title;
            fresh.querySelector('.proj-info-desc').textContent = s.shortDesc;

            const visit = fresh.querySelector('.proj-info-visit');
            visit.href = s.live || s.github;
            const visitLabel = visit.querySelector('span') || visit;
            visitLabel.textContent = s.live ? 'Visit Site' : 'View on GitHub';

            const more = fresh.querySelector('.proj-info-more');
            more.onclick = () => {
                if (typeof window._openProjectModal === 'function') window._openProjectModal(idx);
            };

            // Mark active card + wire card click → modal
            cardEls.forEach((card, i) => {
                card.classList.toggle('is-active', i === idx);
                card.onclick = (i === idx)
                    ? () => { if (typeof window._openProjectModal === 'function') window._openProjectModal(idx, card); }
                    : null;
            });

            dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        }

        function settle(target) {
            if (rafId !== null) cancelAnimationFrame(rafId);
            targetRef = target;
            const newIdx = indexAt(target);
            if (newIdx !== selectedRef) {
                selectedRef = newIdx;
                updateUI(newIdx);
            }
            const step = () => {
                const remaining = target - posRef;
                if (Math.abs(remaining) < 0.0004) {
                    posRef = target;
                    paint();
                    rafId = null;
                    return;
                }
                posRef += remaining * 0.16;
                paint();
                rafId = requestAnimationFrame(step);
            };
            rafId = requestAnimationFrame(step);
        }

        function clamp(pos) {
            return pos; // loop = true, no clamp needed
        }

        function nudge(by) {
            settle(clamp(Math.round(targetRef) + by));
        }

        function goTo(index) {
            const target = index + Math.round((targetRef - index) / COUNT) * COUNT;
            settle(target);
        }

        // Pointer drag
        frame.addEventListener('pointerdown', e => {
            if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
            frame.setPointerCapture(e.pointerId);
            targetRef = posRef;
            dragState = { id: e.pointerId, x: e.clientX, pos: posRef, v: 0, t: performance.now() };
        });

        frame.addEventListener('pointermove', e => {
            if (!dragState || dragState.id !== e.pointerId) return;
            const pitch = widthRef * (1 + GAP);
            if (!pitch) return;
            const now = performance.now();
            const prev = posRef;
            posRef = dragState.pos - (e.clientX - dragState.x) / pitch;
            dragState.v = ((posRef - prev) / Math.max(now - dragState.t, 1)) * 1000;
            dragState.t = now;
            const ni = indexAt(posRef);
            if (ni !== selectedRef) { selectedRef = ni; updateUI(ni); }
            paint();
        });

        const endDrag = e => {
            if (!dragState || dragState.id !== e.pointerId) return;
            const carried = Math.max(-2, Math.min(2, dragState.v * 0.18));
            dragState = null;
            settle(Math.round(posRef + carried));
        };

        frame.addEventListener('pointerup',     endDrag);
        frame.addEventListener('pointercancel', endDrag);

        // Keyboard
        frame.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft')  { e.preventDefault(); nudge(-1); }
            if (e.key === 'ArrowRight') { e.preventDefault(); nudge(1);  }
        });

        // Prev / Next buttons
        prevBtn.addEventListener('click', () => nudge(-1));
        nextBtn.addEventListener('click', () => nudge(1));

        // Measure card width and kick off
        function measure() {
            const card = cardEls[0];
            if (!card) return;
            widthRef = card.offsetWidth;
            paint();
        }

        const ro = new ResizeObserver(measure);
        ro.observe(frame);
        measure();
        updateUI(0);

        // Expose so the modal can sync the carousel
        window._cfGoTo = goTo;
    })();

});
