// script.js — darius's portfolio
// written at like 2am, don't judge the code quality lol

// ========= I18N (EN / RO) =========
const I18N = {
    en: {
        // meta
        'meta.title': 'Darius-Eduard Doana | Student Developer & Robotics',
        'meta.description': 'Darius-Eduard Doana is a 16-year-old student developer and national robotics champion from Arad, Romania, building mobile apps, backend services, and self-hosted infrastructure.',
        'meta.ogTitle': 'Darius-Eduard Doana | Student Developer Portfolio',
        'meta.ogDescription': 'Student developer and national AI robotics champion. Building mobile apps, backend services, and self-hosted infrastructure with Flutter/Dart and Python.',
        'meta.twTitle': 'Darius-Eduard Doana | Student Developer Portfolio',
        'meta.twDescription': 'Student developer and national AI robotics champion from Romania. Building mobile apps, backend services, and self-hosted infrastructure.',

        // sidebar
        'sidebar.nav': 'Navigation',
        'sidebar.toggle.expand': 'Expand navigation',
        'sidebar.toggle.collapse': 'Collapse navigation',
        'sidebar.mobile.open': 'Open navigation',
        'sidebar.section.main': 'Main',
        'sidebar.section.work': 'Work',
        'sidebar.section.more': 'More',
        'sidebar.item.home': 'Home',
        'sidebar.item.about': 'About',
        'sidebar.item.experience': 'Experience',
        'sidebar.item.skills': 'Skills',
        'sidebar.item.projects': 'Projects',
        'sidebar.badge.new': 'New',
        'sidebar.item.achievements': 'Achievements',
        'sidebar.item.contact': 'Contact',
        'sidebar.item.resume': 'Resume',
        'lang.toggle.aria': 'Switch language',
        'lang.toggle.label': 'Română',

        // hero
        'hero.tag': '// Student Developer &amp; National Robotics Champion',
        'hero.h1.line1': "I'm",
        'hero.name': 'Darius-Eduard Doana',
        'hero.h1.line2': 'I build mobile apps,',
        'hero.h1.line3': 'backend systems &amp; <em>award-winning</em> robotics.',
        'hero.desc': '16-year-old student developer from Arad, Romania. I took 1st place nationally in AI Robotics (NextLab 2025) with an NVIDIA Jetson Nano JetBot, placed at the County CS Olympiad, and ship real software used by students in 33+ countries.',
        'hero.btn.work': 'See My Work ↓',
        'hero.btn.github': 'GitHub Profile →',
        'hero.doodle.text': 'beep boop',

        // about
        'about.h2': 'About',
        'about.p1': 'I build small mobile apps and backend services I actually use — my work currently powers student tools across 33+ countries. I learn best by shipping, not by reading docs.',
        'about.p2': 'I study Computer Science at <strong>CN Vasile Goldiș</strong>. I work mostly in Flutter, Python, and HTML/CSS/JS in practice, and I\'m learning C++ through olympiad prep with my teachers.',
        'about.p3': 'Outside class, I build autonomous systems on real hardware — my 2025 national robotics win was built on the NVIDIA Jetson Nano JetBot AI Kit.',
        'about.p4': 'I\'m a student — most of my work is small, real, and built between classes. I also self-host a few services (Docker, Jellyfin, Pterodactyl) on a Linux box at home.',
        'about.fullName': 'Full Name',
        'about.age': 'Age',
        'about.location': 'Location',
        'about.education': 'Education',
        'about.github': 'GitHub',

        // timeline
        'timeline.h2': 'Timeline',
        'timeline.sub': 'How I got here',
        'timeline.explore': 'Explore chapters',
        'timeline.arrowHint': '↑ ↓',
        'timeline.ch1.date': '2026 — Present',
        'timeline.ch1.title': 'Active Development &amp; Technical Growth',
        'timeline.ch1.desc': 'Building small mobile apps with Flutter, backend services in Dart and Python, and self-hosting a few services at home. Most of my work is personal or school-related — I learn by shipping.',
        'timeline.ch2.date': '2025',
        'timeline.ch2.title': '🥇 1st Place — NextLab National Robotics Championship',
        'timeline.ch2.desc': 'Won the national title in the AI Robotics category with an autonomous JetBot built on the NVIDIA Jetson Nano AI Kit, competing against teams from across Romania.',
        'timeline.ch3.date': '2026',
        'timeline.ch3.title': '🥈 2nd Place — Olimpiada de Inovare și Creație Digitală',
        'timeline.ch3.desc': 'Took 2nd place nationally in the Innovation and Digital Creation Olympiad, with a project bridging software engineering and creative problem solving.',
        'timeline.ch4.date': '2025',
        'timeline.ch4.title': '🥉 3rd Place — TIC Olympiad (No.1) — County Stage',
        'timeline.ch4.desc': 'Placed 3rd at the county stage of the CS Olympiad, solving algorithmic problems under competition conditions in C++.',
        'timeline.ch5.date': '2026',
        'timeline.ch5.title': '🏅 Honorable Mention — TIC Olympiad (No.2)',
        'timeline.ch5.desc': 'Earned an honorable mention at a second stage of the TIC Olympiad, deepening the algorithmic track record with another strong showing.',
        'timeline.ch6.date': '2026',
        'timeline.ch6.title': '🏅 Honorable Mention — Acadnet',
        'timeline.ch6.desc': 'Received an Acadnet honorable mention for an academic and technical submission, recognized by the institution for the quality of the work.',
        'timeline.ch7.date': '2026',
        'timeline.ch7.title': '🏅 Participation — Math, Caius Iacob',
        'timeline.ch7.desc': 'Participated in the county Math Olympiad and the national Caius Iacob competition — testing analytical problem solving beyond computer science.',
        'timeline.ch8.date': '2025',
        'timeline.ch8.title': '🏅 Participation — Istorie + 🤝 Volunteering (No.1)',
        'timeline.ch8.desc': 'Participated in the county History Olympiad and completed the first volunteering engagement, receiving formal recognition for community contribution alongside the academic work.',
        'timeline.ch9.date': '2024',
        'timeline.ch9.title': 'First Lines of Code',
        'timeline.ch9.desc': 'Started learning HTML, CSS, and JavaScript through Logiscool. I finished the course in 2026 and kept building from there.',
        'timeline.ch10.date': '2026',
        'timeline.ch10.title': '🤝 Volunteering (No.2) + 📜 PCEP-30-02 Certified',
        'timeline.ch10.desc': 'Completed a second volunteering engagement and earned the PCEP-30-02 (Certified Entry-Level Python Programmer) credential from the Python Institute in 2026.',

        // tech
        'tech.h2': 'Technical Skills',
        'tech.sub': 'Languages and tools I use in production',
        'tech.flutter.title': 'Flutter &amp; Dart',
        'tech.flutter.desc': 'Mobile apps I ship to real users — BreakCount alone is used in 33+ countries.',
        'tech.cpp.title': 'C++',
        'tech.cpp.desc': 'Algorithms and data structures, learned through olympiad prep with my teachers.',
        'tech.python.title': 'Python',
        'tech.python.desc': 'Automation, REST APIs, Discord bots, and ad-hoc tools. I also experiment with AI APIs through OpenRouter-compatible endpoints.',
        'tech.docker.title': 'Docker',
        'tech.docker.desc': 'Containerizing the small backend services I write, plus a few self-hosted apps on my home Linux box (Jellyfin, Pterodactyl, etc.).',
        'tech.web.title': 'Web Technologies',
        'tech.web.desc': 'Responsive interfaces with HTML5, CSS3, and JavaScript — including this portfolio.',
        'tech.robotics.title': 'Robotics &amp; AI',
        'tech.robotics.desc': 'Built on the NVIDIA Jetson Nano JetBot AI Kit. National title in 2025 with the AI category win.',

        // projects
        'projects.h2': 'Projects',
        'projects.sub': 'Browse with arrows or drag — click any image for full details',
        'projects.visitSite': 'Visit Site',
        'projects.viewOnGithub': 'View on GitHub',
        'projects.more': 'More info',
        'projects.hint': 'or click the image ↑',
        'projects.allGithub': 'All repositories on GitHub →',
        'projects.modal.close': 'Close project details',
        'projects.modal.openRepo': 'Open Repository ↗',
        'projects.modal.visitLive': 'Visit Live Site ↗',
        'projects.slide1.tags': 'Flutter, Dart, Python',
        'projects.slide1.shortDesc': 'Cross-platform student app with AI timetable parsing, exam tracking, and home-screen widgets. Active in 33+ countries.',
        'projects.slide1.desc': 'A cross-platform student productivity app that counts down to the next school break, tracks exams, and parses class timetables automatically from a photo using AI. Features home-screen widgets, Google Drive backup, and supports 33+ countries — with zero ads and no account required. Currently in active development and used daily by students worldwide.',
        'projects.slide1.meta1': 'Status',
        'projects.slide1.meta1v': '🔨 Active development',
        'projects.slide1.meta2': 'Reach',
        'projects.slide1.meta2v': '33+ countries',
        'projects.slide1.meta3': 'Platform',
        'projects.slide1.meta3v': 'Android / iOS',
        'projects.slide2.tags': 'Dart, Backend, REST API',
        'projects.slide2.shortDesc': 'Full backend API for employee attendance tracking, written in Dart with a modular service architecture.',
        'projects.slide2.desc': 'A full backend API for an employee attendance tracking system, written entirely in Dart. The server handles authentication, shift logging, reporting, and containerized deployment. The architecture uses a modular service pattern designed to scale independently per endpoint.',
        'projects.slide2.meta1': 'Language',
        'projects.slide2.meta1v': 'Dart (server-side)',
        'projects.slide2.meta2': 'Stack',
        'projects.slide2.meta2v': 'REST API + Docker',
        'projects.slide3.tags': 'Python, Bluetooth, Networking',
        'projects.slide3.shortDesc': 'Python utility that proxies incompatible Bluetooth device connections programmatically.',
        'projects.slide3.desc': 'A Python utility that proxies Bluetooth connections between otherwise incompatible devices. Instead of manually re-pairing or installing third-party drivers, the bridge intercepts the connection and translates the communication protocol — letting mismatched devices communicate seamlessly.',
        'projects.slide3.meta1': 'Status',
        'projects.slide3.meta1v': '🆕 Early development',
        'projects.slide3.meta2': 'Language',
        'projects.slide3.meta2v': 'Python',
        'projects.slide4.tags': 'Python, AI, OpenRouter',
        'projects.slide4.shortDesc': 'AI-powered Discord bot with multi-turn conversation context via OpenRouter APIs. 2 stars, 4 forks.',
        'projects.slide4.desc': 'An AI-powered Discord bot that maintains multi-turn context in conversations using OpenRouter APIs. Unlike simple command bots, DiscordAI holds a real dialogue — remembering context across messages, handling role personas, and responding naturally. Earned 2 stars and 4 community forks on GitHub.',
        'projects.slide4.meta1': 'GitHub',
        'projects.slide4.meta1v': '⭐ 2 stars • 4 forks',
        'projects.slide4.meta2': 'API',
        'projects.slide4.meta2v': 'OpenRouter (multi-model)',
        'projects.slide5.tags': 'Python, Discord, Bots',
        'projects.slide5.shortDesc': 'Modular Discord bot marketplace concept — plugin-style distribution for self-install extensions.',
        'projects.slide5.desc': 'A modular Discord bot marketplace concept built in Python. DisStore explores plugin-style distribution — users can browse and self-install bot extensions without redeploying. The architecture separates core bot logic from community-contributed modules using a clean plugin loader.',
        'projects.slide5.meta1': 'Status',
        'projects.slide5.meta1v': 'Experimental',
        'projects.slide5.meta2': 'Language',
        'projects.slide5.meta2v': 'Python',
        'projects.slide6.tags': 'HTML, CSS, JavaScript',
        'projects.slide6.shortDesc': 'Interactive quiz and flashcard platform for self-study. 3 stars on GitHub.',
        'projects.slide6.desc': 'An interactive quiz and flashcard platform built to make self-study less passive. JustLearnIt lets users create custom study decks, run timed quizzes, and track progress per topic. Core quiz engine written in vanilla JS, with a focus on fast load times and offline capability.',
        'projects.slide6.meta1': 'GitHub',
        'projects.slide6.meta1v': '⭐ 3 stars',
        'projects.slide6.meta2': 'Stack',
        'projects.slide6.meta2v': 'Vanilla HTML/CSS/JS',
        'projects.slide7.tags': 'Python, CLI, API',
        'projects.slide7.shortDesc': 'Python CLI that fetches Spotify tracks for offline use, with playlist parsing and metadata tagging.',
        'projects.slide7.desc': 'A Python command-line tool that fetches Spotify tracks for offline use by wrapping the public API and routing through an audio download pipeline. Handles playlist parsing, metadata tagging, and retry logic when the upstream source changes — which it often does.',
        'projects.slide7.meta1': 'Type',
        'projects.slide7.meta1v': 'CLI tool',
        'projects.slide7.meta2': 'Language',
        'projects.slide7.meta2v': 'Python',
        'projects.slide8.tags': 'Python, Maps, Geolocation',
        'projects.slide8.shortDesc': 'Lightweight geolocation tool — a cost-free alternative to Google Maps API for basic location queries.',
        'projects.slide8.desc': 'A lightweight Python geolocation tool built as a cost-free alternative to the Google Maps API for basic location queries and geocoding. Uses open data sources to resolve addresses, calculate distances, and display simple map data — without a billing account.',
        'projects.slide8.meta1': 'Language',
        'projects.slide8.meta1v': 'Python',
        'projects.slide8.meta2': 'Type',
        'projects.slide8.meta2v': 'Geolocation utility',
        'projects.slide9.tags': 'JavaScript, Education',
        'projects.slide9.shortDesc': 'School calendar and assignment planner — maps the academic year and highlights upcoming deadlines.',
        'projects.slide9.desc': 'A lightweight JavaScript school calendar and assignment planner. SchoolYear maps the academic year into a timeline, lets users log assignments with deadlines, and highlights upcoming due dates — helping students stay ahead without relying on a paper planner.',
        'projects.slide9.meta1': 'Language',
        'projects.slide9.meta1v': 'JavaScript',
        'projects.slide9.meta2': 'Type',
        'projects.slide9.meta2v': 'Educational tool',
        'projects.slide10.tags': 'Python, API, Fork',
        'projects.slide10.shortDesc': 'Forked and extended a Python attendance API — studied real production code structure to deepen understanding of REST API design.',
        'projects.slide10.desc': 'A forked attendance API used to study production code structure and REST API design.',
        'projects.slide10.meta1': 'Type',
        'projects.slide10.meta1v': 'Backend API',
        'projects.slide10.meta2': 'Focus',
        'projects.slide10.meta2v': 'REST architecture',

        // certs (main page, 2 featured)
        'certs.h2': 'Achievements',
        'certs.sub': 'Competition results and technical recognition',
        'certs.nextlab.title': 'NextLab National Robotics Championship',
        'certs.nextlab.place': 'AI Category — 1st Place, National',
        'certs.nextlab.desc': 'Designed and built an autonomous JetBot on the NVIDIA Jetson Nano for the AI category. Competed against teams from across Romania and took the national title in 2025.',
        'certs.nextlab.cta': 'View Diploma →',
        'certs.pcep.title': 'PCEP-30-02 — Python Certified Entry-Level Programmer',
        'certs.pcep.place': 'Python Institute — 2026',
        'certs.pcep.desc': 'Passed the PCEP-30-02 certification from the Python Institute — a vendor-neutral credential that validates entry-level proficiency in Python fundamentals, syntax, control flow, data structures, and functions.',
        'certs.pcep.cta': 'View Certificate →',
        'certs.viewAll': 'View all diplomas →',

        // diplomas page
        'diplomas.title': 'Diplomas &amp; Certificates',
        'diplomas.sub': 'All competition results, certifications, and recognition received since 2025.',
        'diplomas.print': 'Print page',
        'diplomas.sec0.h2': '📜 Certification',
        'diplomas.sec0.item1.title': 'PCEP-30-02 — Certified Entry-Level Python Programmer',
        'diplomas.sec0.item1.issuer': 'Python Institute — 2026',
        'diplomas.sec0.item1.desc': 'Passed the PCEP-30-02 certification from the Python Institute — a vendor-neutral exam validating entry-level proficiency in Python fundamentals, syntax, control flow, data structures, and functions.',
        'diplomas.sec0.item1.open': 'Open PDF ↗',
        'diplomas.sec1.h2': '🥇 First Place',
        'diplomas.sec1.item1.title': 'NextLab National Robotics Championship',
        'diplomas.sec1.item1.issuer': 'NextLab — National · 2025',
        'diplomas.sec1.item1.desc': 'Took 1st place nationally in the AI Robotics category with an autonomous JetBot built on the NVIDIA Jetson Nano AI Kit.',
        'diplomas.sec1.item1.open': 'Open PDF ↗',
        'diplomas.sec2.h2': '🥈 Second Place',
        'diplomas.sec2.item1.title': 'Olimpiada de Inovare și Creație Digitală',
        'diplomas.sec2.item1.issuer': 'National Innovation Olympiad · 2026',
        'diplomas.sec2.item1.desc': 'Took 2nd place nationally in the Innovation and Digital Creation Olympiad, with a project at the intersection of software and creative problem solving.',
        'diplomas.sec2.item1.open': 'Open PDF ↗',
        'diplomas.sec3.h2': '🥉 Third Place',
        'diplomas.sec3.item1.title': 'TIC Olympiad (No.1) — County Stage',
        'diplomas.sec3.item1.issuer': 'TIC — County Level · 2025',
        'diplomas.sec3.item1.desc': 'Placed 3rd at the county stage of the CS Olympiad, solving algorithmic problems in C++ under timed competition conditions.',
        'diplomas.sec3.item1.open': 'Open PDF ↗',
        'diplomas.sec4.h2': '🏅 Honorable Mentions',
        'diplomas.sec4.item1.title': 'TIC Olympiad (No.2) — Honorable Mention',
        'diplomas.sec4.item1.issuer': 'TIC — County Level · 2026',
        'diplomas.sec4.item1.desc': 'Earned a second honorable mention in a separate TIC stage, reinforcing the algorithmic track record.',
        'diplomas.sec4.item1.open': 'Open PDF ↗',
        'diplomas.sec4.item2.title': 'Acadnet — Honorable Mention',
        'diplomas.sec4.item2.issuer': 'Acadnet — National · 2026',
        'diplomas.sec4.item2.desc': 'Received an Acadnet honorable mention for an academic and technical submission, recognized by the institution for the quality of the work.',
        'diplomas.sec4.item2.open': 'Open PDF ↗',
        'diplomas.sec5.h2': '📋 Participation',
        'diplomas.sec5.item1.title': 'Math — Participation',
        'diplomas.sec5.item1.issuer': 'Mathematics Olympiad — County · 2026',
        'diplomas.sec5.item1.desc': 'Participated in the Mathematics Olympiad at the county level, testing analytical problem solving beyond computer science.',
        'diplomas.sec5.item1.open': 'Open PDF ↗',
        'diplomas.sec5.item2.title': 'Caius Iacob — Participation',
        'diplomas.sec5.item2.issuer': 'Caius Iacob Competition — National · 2026',
        'diplomas.sec5.item2.desc': 'Participated in the Caius Iacob national competition, a long-running Romanian academic contest.',
        'diplomas.sec5.item2.open': 'Open PDF ↗',
        'diplomas.sec5.item3.title': 'Istorie — Participation',
        'diplomas.sec5.item3.issuer': 'History Olympiad — County · 2025',
        'diplomas.sec5.item3.desc': 'Participated in the History Olympiad at the county level, extending the competition track into the humanities.',
        'diplomas.sec5.item3.open': 'Open PDF ↗',
        'diplomas.sec6.h2': '🤝 Volunteering',
        'diplomas.sec6.item1.title': 'Volunteering — Certificate No.1',
        'diplomas.sec6.item1.issuer': 'Community Engagement · 2025',
        'diplomas.sec6.item1.desc': 'Completed the first volunteering engagement and received formal recognition for community contribution.',
        'diplomas.sec6.item1.open': 'Open PDF ↗',
        'diplomas.sec6.item2.title': 'Volunteering — Certificate No.2',
        'diplomas.sec6.item2.issuer': 'Community Engagement · 2026',
        'diplomas.sec6.item2.desc': 'Completed a second volunteering engagement and received formal recognition, doubling down on community contribution.',
        'diplomas.sec6.item2.open': 'Open PDF ↗',

        // languages
        'lang.h2': 'Languages',
        'lang.sub': 'Human languages — the programming ones are listed above',
        'lang.ro.name': 'Romanian',
        'lang.ro.level': 'Native',
        'lang.en.name': 'English',
        'lang.en.level': 'Fluent — professional working proficiency',

        // contact
        'contact.h2': 'Get In Touch',
        'contact.sub': 'Open to collaboration, freelance work, and interesting conversations about software.',
        'contact.primary': 'Start a conversation <span>↗</span>',
        'contact.email.name': 'Email',
        'contact.github.name': 'GitHub',
        'contact.linkedin.name': 'LinkedIn',
        'contact.discord.name': 'Discord',
        'contact.coffee.text': '☕ If my work saved you time or you just want to support a developer who ships software between classes — a coffee goes a long way:',
        'contact.coffee.btn': 'Buy me a coffee ☕',
        'contact.coffee.note': 'No obligation — I\'m just glad the work is useful.',

        // footer
        'footer.role': 'Student · CS @ CNVG',
        'footer.backToTop': 'Back to top',
        'footer.resume': 'Resume',
        'footer.copy': '© 2026 Darius-Eduard Doana · Arad, Romania',
        'footer.portfolio': 'Portfolio',
        'footer.contact': 'Contact',
        'footer.copyShort': '2026 / Arad, Romania',

        // scroll to top
        'scrollTop.aria': 'back to top',

        // resume page
        'resume.title': 'Darius-Eduard Doana - Resume',
        'resume.kicker': 'RESUME / 2026',
        'resume.print': 'Print resume',
        'resume.download': 'Download resume',
        'resume.back': '<- Back to portfolio',
        'resume.tagline': 'High School Student · Computer Science',
        'resume.location': 'Arad, Romania',
        'resume.born': 'Born 27.09.2009 · Age',
        'resume.profile.h2': 'Profile',
        'resume.profile.text': 'High school student in Arad, Romania, focused on mobile apps and small backend services. I work mainly with Flutter, Dart, Python, and HTML/CSS/JS in practice, and I\'m learning C++ through olympiad prep. Most of my projects come from school work, olympiad prep, and personal ideas I want to see exist.',
        'resume.projects.h2': 'Selected Projects',
        'resume.breakcount.title': 'BreakCount',
        'resume.breakcount.stack': 'Flutter / Dart / Python / Firebase',
        'resume.breakcount.active': 'Active',
        'resume.breakcount.desc': 'Student productivity app for school breaks, exams, timetables, and reminders. Used by students in 33+ countries; supports Android and iOS.',
        'resume.pontaj.title': 'ServerAppPontaj',
        'resume.pontaj.stack': 'Dart / REST API / Docker',
        'resume.pontaj.desc': 'Attendance-tracking backend with authentication, shift logging, reporting, and containerized deployment.',
        'resume.discordai.title': 'DiscordAI',
        'resume.discordai.stack': 'Python / OpenRouter / Discord API',
        'resume.discordai.desc': 'Conversational Discord bot with multi-turn context, role personas, and API-based responses.',
        'resume.justlearnit.title': 'JustLearnIt',
        'resume.justlearnit.stack': 'HTML / CSS / JavaScript',
        'resume.justlearnit.desc': 'Quiz and flashcard platform for creating study decks, running timed quizzes, and tracking progress.',
        'resume.education.h2': 'Education',
        'resume.school.name': 'Colegiul National Vasile Goldis',
        'resume.school.track': 'Computer Science track / Arad, Romania',
        'resume.school.dates': '2024 - Present',
        'resume.school.desc': 'Studying computer science with a focus on C++. Completed the Logiscool programming course in 2026 and earned the PCEP-30-02 (Certified Entry-Level Python Programmer) from the Python Institute the same year.',
        'resume.skills.h2': 'Skills',
        'resume.skills.languagesCat': 'Languages',
        'resume.skills.languagesList': 'Dart, C++, Python, JavaScript, HTML, CSS',
        'resume.skills.toolsCat': 'Tools',
        'resume.skills.toolsList': 'Flutter, Docker, Git, REST APIs, Linux, Firebase',
        'resume.skills.focusCat': 'Focus',
        'resume.skills.focusList': 'Mobile development, backend systems, robotics, AI, competitive programming',
        'resume.awards.h2': 'Awards',
        'resume.award1.place': '1st place, national',
        'resume.award1.event': 'NextLab Robotics - AI category, 2025',
        'resume.award1.cta': 'View diploma',
        'resume.award2.place': '2nd place, national',
        'resume.award2.event': 'Olimpiada de Inovare și Creație Digitală, 2026',
        'resume.award2.cta': 'View diploma',
        'resume.award3.place': '3rd place, county',
        'resume.award3.event': 'TIC Olympiad (No.1), 2025',
        'resume.award3.cta': 'View diploma',
        'resume.award4.place': 'Honorable mention',
        'resume.award4.event': 'TIC Olympiad (No.2), 2026',
        'resume.award4.cta': 'View diploma',
        'resume.award5.place': 'Honorable mention',
        'resume.award5.event': 'Acadnet, 2026',
        'resume.award5.cta': 'View diploma',
        'resume.award6.place': 'Certified',
        'resume.award6.event': 'PCEP-30-02 — Python Institute, 2026',
        'resume.award6.cta': 'View certificate',
        'resume.human.h2': 'Languages',
    },
    ro: {
        // meta
        'meta.title': 'Darius-Eduard Doana | Student Dezvoltator & Robotică',
        'meta.description': 'Darius-Eduard Doana este un dezvoltator de software în vârstă de 16 ani și campion național la robotică din Arad, România, specializat în Flutter, Python și sisteme backend.',
        'meta.ogTitle': 'Darius-Eduard Doana | Portofoliu Dezvoltator',
        'meta.ogDescription': 'Student dezvoltator și campion național la robotică AI. Construiesc aplicații mobile, servicii backend și infrastructură self-hosted cu Flutter/Dart și Python.',
        'meta.twTitle': 'Darius-Eduard Doana | Portofoliu Dezvoltator',
        'meta.twDescription': 'Student dezvoltator și campion național la robotică AI din România. Construiesc aplicații mobile, servicii backend și infrastructură self-hosted.',

        // sidebar
        'sidebar.nav': 'Navigare',
        'sidebar.toggle.expand': 'Extinde navigarea',
        'sidebar.toggle.collapse': 'Restrânge navigarea',
        'sidebar.mobile.open': 'Deschide navigarea',
        'sidebar.section.main': 'Principal',
        'sidebar.section.work': 'Proiecte',
        'sidebar.section.more': 'Mai mult',
        'sidebar.item.home': 'Acasă',
        'sidebar.item.about': 'Despre',
        'sidebar.item.experience': 'Experiență',
        'sidebar.item.skills': 'Competențe',
        'sidebar.item.projects': 'Proiecte',
        'sidebar.badge.new': 'NOU',
        'sidebar.item.achievements': 'Realizări',
        'sidebar.item.contact': 'Contact',
        'sidebar.item.resume': 'CV',
        'lang.toggle.aria': 'Schimbă limba',
        'lang.toggle.label': 'English',

        // hero
        'hero.tag': '// Student Dezvoltator &amp; Campion Național la Robotică',
        'hero.h1.line1': 'Sunt',
        'hero.name': 'Darius-Eduard Doana',
        'hero.h1.line2': 'Construiesc aplicații mobile,',
        'hero.h1.line3': 'sisteme backend &amp; robotică <em>premiată</em>.',
        'hero.desc': 'Student dezvoltator de 16 ani din Arad, România. Am câștigat locul I la Campionatul Național de Robotică AI (NextLab 2025) cu un JetBot pe NVIDIA Jetson Nano, am luat loc la Olimpiada Județeană de Informatică și livrez software real folosit de elevi din 33+ țări.',
        'hero.btn.work': 'Vezi proiectele mele ↓',
        'hero.btn.github': 'Profil GitHub →',
        'hero.doodle.text': 'beep boop',

        // about
        'about.h2': 'Despre',
        'about.p1': 'Construiesc aplicații mobile mici și servicii backend pe care le folosesc eu și alții — munca mea alimentează în prezent instrumente pentru elevi din 33+ țări. Învaț cel mai bine livrând, nu citind documentație.',
        'about.p2': 'Studiez Informatica la <strong>CN Vasile Goldiș</strong>. Lucrez mai ales cu Flutter, Python și HTML/CSS/JS în practică, și învăț C++ prin pregătire de olimpiadă cu profesorii mei.',
        'about.p3': 'În afara orelor, construiesc sisteme autonome pe hardware real — victoria mea la robotică din 2025 a fost construită pe NVIDIA Jetson Nano JetBot AI Kit.',
        'about.p4': 'Sunt student — cea mai mare parte a muncii mele e mică, reală și făcută între ore. Mai țin și câteva servicii self-hosted (Docker, Jellyfin, Pterodactyl) pe un Linux acasă.',
        'about.fullName': 'Nume complet',
        'about.age': 'Vârstă',
        'about.location': 'Locație',
        'about.education': 'Educație',
        'about.github': 'GitHub',

        // timeline
        'timeline.h2': 'Cronologie',
        'timeline.sub': 'Cum am ajuns aici',
        'timeline.explore': 'Explorează capitolele',
        'timeline.arrowHint': '↑ ↓',
        'timeline.ch1.date': '2026 — Prezent',
        'timeline.ch1.title': 'Dezvoltare activă &amp; creștere tehnică',
        'timeline.ch1.desc': 'Construiesc aplicații mobile mici cu Flutter, servicii backend în Dart și Python, și țin câteva servicii self-hosted acasă. Cea mai mare parte a muncii mele e personală sau școlară — învăț livrând.',
        'timeline.ch2.date': '2025',
        'timeline.ch2.title': '🥇 Locul I — Campionatul Național de Robotică NextLab',
        'timeline.ch2.desc': 'Am câștigat titlul național la categoria AI Robotics cu un JetBot autonom construit pe NVIDIA Jetson Nano AI Kit, concurând cu echipe din toată România.',
        'timeline.ch3.date': '2026',
        'timeline.ch3.title': '🥈 Locul II — Olimpiada de Inovare și Creație Digitală',
        'timeline.ch3.desc': 'Am obținut locul II la nivel național la Olimpiada de Inovare și Creație Digitală, cu un proiect la intersecția dintre inginerie software și rezolvare creativă de probleme.',
        'timeline.ch4.date': '2025',
        'timeline.ch4.title': '🥉 Locul III — Olimpiada TIC (No.1) — etapa județeană',
        'timeline.ch4.desc': 'Am obținut locul III la etapa județeană a Olimpiadei de Informatică, rezolvând probleme algoritmice în C++ în condiții de concurs.',
        'timeline.ch5.date': '2026',
        'timeline.ch5.title': '🏅 Mențiune — Olimpiada TIC (No.2)',
        'timeline.ch5.desc': 'Am primit mențiune la o a doua etapă a Olimpiadei TIC, consolidând parcursul algoritmic cu o nouă evoluție solidă.',
        'timeline.ch6.date': '2026',
        'timeline.ch6.title': '🏅 Mențiune — Acadnet',
        'timeline.ch6.desc': 'Am primit mențiune Acadnet pentru o lucrare academică și tehnică, recunoscută de instituție pentru calitatea muncii.',
        'timeline.ch7.date': '2026',
        'timeline.ch7.title': '🏅 Participare — Matematică, Caius Iacob',
        'timeline.ch7.desc': 'Am participat la Olimpiada de Matematică la nivel județean și la concursul național Caius Iacob — testând rezolvarea analitică dincolo de informatică.',
        'timeline.ch8.date': '2025',
        'timeline.ch8.title': '🏅 Participare — Istorie + 🤝 Voluntariat (No.1)',
        'timeline.ch8.desc': 'Am participat la Olimpiada de Istorie la nivel județean și am finalizat prima activitate de voluntariat, primind recunoaștere formală pentru contribuția în comunitate.',
        'timeline.ch9.date': '2024',
        'timeline.ch9.title': 'Primele rânduri de cod',
        'timeline.ch9.desc': 'Am început să învăț HTML, CSS și JavaScript prin Logiscool. Am terminat cursul în 2026 și am continuat să construiesc de acolo.',
        'timeline.ch10.date': '2026',
        'timeline.ch10.title': '🤝 Voluntariat (No.2) + 📜 PCEP-30-02 Certificat',
        'timeline.ch10.desc': 'Am finalizat a doua activitate de voluntariat și am obținut PCEP-30-02 (Certified Entry-Level Python Programmer) de la Python Institute în 2026.',

        // tech
        'tech.h2': 'Competențe tehnice',
        'tech.sub': 'Limbaje și instrumente pe care le folosesc în producție',
        'tech.flutter.title': 'Flutter &amp; Dart',
        'tech.flutter.desc': 'Aplicații mobile pe care le livrez către utilizatori reali — doar BreakCount e folosit în 33+ țări.',
        'tech.cpp.title': 'C++',
        'tech.cpp.desc': 'Algoritmi și structuri de date, învățate prin pregătire de olimpiadă cu profesorii mei.',
        'tech.python.title': 'Python',
        'tech.python.desc': 'Automatizări, API-uri REST, boți Discord și tool-uri ad-hoc. Experimentez și cu API-uri AI prin endpoint-uri compatibile OpenRouter.',
        'tech.docker.title': 'Docker',
        'tech.docker.desc': 'Containerizarea serviciilor backend mici pe care le scriu, plus câteva aplicații self-hosted pe Linux-ul de acasă (Jellyfin, Pterodactyl etc.).',
        'tech.web.title': 'Tehnologii Web',
        'tech.web.desc': 'Interfețe responsive cu HTML5, CSS3 și JavaScript — inclusiv acest portofoliu.',
        'tech.robotics.title': 'Robotică &amp; AI',
        'tech.robotics.desc': 'Construit pe NVIDIA Jetson Nano JetBot AI Kit. Titlu național în 2025 la categoria AI.',

        // projects
        'projects.h2': 'Proiecte',
        'projects.sub': 'Răsfoiește cu săgețile sau trage — click pe orice imagine pentru detalii',
        'projects.visitSite': 'Vizitează site-ul',
        'projects.viewOnGithub': 'Vezi pe GitHub',
        'projects.more': 'Mai multe',
        'projects.hint': 'sau click pe imagine ↑',
        'projects.allGithub': 'Toate repository-urile pe GitHub →',
        'projects.modal.close': 'Închide detaliile proiectului',
        'projects.modal.openRepo': 'Deschide repository ↗',
        'projects.modal.visitLive': 'Vizitează site-ul live ↗',
        'projects.slide1.tags': 'Flutter, Dart, Python',
        'projects.slide1.shortDesc': 'Aplicație cross-platform pentru elevi cu parsare AI a orarului, urmărirea examenelor și widget-uri pe ecranul principal. Activă în 33+ țări.',
        'projects.slide1.desc': 'O aplicație cross-platform de productivitate pentru elevi, care numără invers până la următoarea pauză, urmărește examenele și parsează orarele claselor automat dintr-o fotografie folosind AI. Include widget-uri pe ecranul principal, backup pe Google Drive și funcționează în 33+ țări — fără reclame și fără cont obligatoriu. În dezvoltare activă și folosită zilnic de elevi din toată lumea.',
        'projects.slide1.meta1': 'Stare',
        'projects.slide1.meta1v': '🔨 Dezvoltare activă',
        'projects.slide1.meta2': 'Acoperire',
        'projects.slide1.meta2v': '33+ țări',
        'projects.slide1.meta3': 'Platformă',
        'projects.slide1.meta3v': 'Android / iOS',
        'projects.slide2.tags': 'Dart, Backend, REST API',
        'projects.slide2.shortDesc': 'API backend complet pentru pontajul angajaților, scris în Dart cu o arhitectură de servicii modulară.',
        'projects.slide2.desc': 'Un API backend complet pentru un sistem de pontaj al angajaților, scris în întregime în Dart. Serverul gestionează autentificarea, logarea turelor, raportarea și deploy-ul containerizat. Arhitectura folosește un pattern modular de servicii, gândit să scaleze independent per endpoint.',
        'projects.slide2.meta1': 'Limbaj',
        'projects.slide2.meta1v': 'Dart (server-side)',
        'projects.slide2.meta2': 'Stack',
        'projects.slide2.meta2v': 'REST API + Docker',
        'projects.slide3.tags': 'Python, Bluetooth, Rețelistică',
        'projects.slide3.shortDesc': 'Utilitar Python care intermediază programatic conexiunile Bluetooth între dispozitive incompatibile.',
        'projects.slide3.desc': 'Un utilitar Python care intermediază conexiunile Bluetooth între dispozitive altfel incompatibile. În loc să re-împerechezi manual sau să instalezi drivere terțe, bridge-ul interceptează conexiunea și traduce protocolul de comunicare — permițând dispozitivelor nepotrivite să comunice perfect.',
        'projects.slide3.meta1': 'Stare',
        'projects.slide3.meta1v': '🆕 Dezvoltare timpurie',
        'projects.slide3.meta2': 'Limbaj',
        'projects.slide3.meta2v': 'Python',
        'projects.slide4.tags': 'Python, AI, OpenRouter',
        'projects.slide4.shortDesc': 'Bot Discord cu AI care păstrează contextul conversației pe mai multe mesaje prin API-urile OpenRouter. 2 stele, 4 fork-uri.',
        'projects.slide4.desc': 'Un bot Discord powered by AI care menține contextul conversației pe mai multe mesaje folosind API-urile OpenRouter. Spre deosebire de boții simpli pe comenzi, DiscordAI poartă un dialog real — își amintește contextul între mesaje, gestionează persona-uri de rol și răspunde natural. A obținut 2 stele și 4 fork-uri comunitare pe GitHub.',
        'projects.slide4.meta1': 'GitHub',
        'projects.slide4.meta1v': '⭐ 2 stele • 4 fork-uri',
        'projects.slide4.meta2': 'API',
        'projects.slide4.meta2v': 'OpenRouter (multi-model)',
        'projects.slide5.tags': 'Python, Discord, Boți',
        'projects.slide5.shortDesc': 'Concept de marketplace modular pentru boți Discord — distribuție pe plugin-uri instalabile de utilizatori.',
        'projects.slide5.desc': 'Un concept modular de marketplace pentru boți Discord, construit în Python. DisStore explorează distribuția pe plugin-uri — utilizatorii pot naviga și instala singuri extensiile fără a face redeploy. Arhitectura separă logica de nucleu a botului de modulele contribuite de comunitate printr-un plugin loader curat.',
        'projects.slide5.meta1': 'Stare',
        'projects.slide5.meta1v': 'Experimental',
        'projects.slide5.meta2': 'Limbaj',
        'projects.slide5.meta2v': 'Python',
        'projects.slide6.tags': 'HTML, CSS, JavaScript',
        'projects.slide6.shortDesc': 'Platformă interactivă de quiz-uri și flashcard-uri pentru studiu individual. 3 stele pe GitHub.',
        'projects.slide6.desc': 'O platformă interactivă de quiz-uri și flashcard-uri construită pentru a face studiul individual mai puțin pasiv. JustLearnIt permite crearea de pachete de studiu personalizate, rularea de quiz-uri cronometrate și urmărirea progresului pe topic. Motorul principal scris în vanilla JS, cu focus pe timpi de încărcare mici și funcționare offline.',
        'projects.slide6.meta1': 'GitHub',
        'projects.slide6.meta1v': '⭐ 3 stele',
        'projects.slide6.meta2': 'Stack',
        'projects.slide6.meta2v': 'Vanilla HTML/CSS/JS',
        'projects.slide7.tags': 'Python, CLI, API',
        'projects.slide7.shortDesc': 'CLI Python care aduce piese Spotify pentru utilizare offline, cu parsare de playlist-uri și metadata.',
        'projects.slide7.desc': 'Un tool Python în linie de comandă care aduce piese Spotify pentru utilizare offline, împachetând API-ul public și rutând printr-o conductă de descărcare audio. Gestionează parsarea playlist-urilor, etichetarea metadata și logica de retry când sursa din amonte se schimbă — ceea ce se întâmplă des.',
        'projects.slide7.meta1': 'Tip',
        'projects.slide7.meta1v': 'Instrument CLI',
        'projects.slide7.meta2': 'Limbaj',
        'projects.slide7.meta2v': 'Python',
        'projects.slide8.tags': 'Python, Hărți, Geolocație',
        'projects.slide8.shortDesc': 'Instrument ușor de geolocație — alternativă gratuită la Google Maps API pentru query-uri de bază.',
        'projects.slide8.desc': 'Un instrument Python ușor de geolocație, construit ca alternativă gratuită la Google Maps API pentru query-uri de bază și geocodare. Folosește surse de date deschise pentru a rezolva adrese, calcula distanțe și afișa date simple de hartă — fără cont de facturare.',
        'projects.slide8.meta1': 'Limbaj',
        'projects.slide8.meta1v': 'Python',
        'projects.slide8.meta2': 'Tip',
        'projects.slide8.meta2v': 'Utilitar de geolocație',
        'projects.slide9.tags': 'JavaScript, Educație',
        'projects.slide9.shortDesc': 'Calendar școlar și planificator de teme — mapează anul academic și evidențiază deadline-urile apropiate.',
        'projects.slide9.desc': 'Un calendar școlar ușor și un planificator de teme în JavaScript. SchoolYear mapează anul academic într-o cronologie, permite logarea temelor cu deadline-uri și evidențiază scadențele viitoare — ajutând elevii să rămână în față fără un planner de hârtie.',
        'projects.slide9.meta1': 'Limbaj',
        'projects.slide9.meta1v': 'JavaScript',
        'projects.slide9.meta2': 'Tip',
        'projects.slide9.meta2v': 'Instrument educațional',
        'projects.slide10.tags': 'Python, API, Fork',
        'projects.slide10.shortDesc': 'Am fork-uit și extins un API Python de pontaj — am studiat structura de cod din producție pentru a aprofunda designul REST.',
        'projects.slide10.desc': 'Un API de pontaj fork-uit, folosit pentru a studia structura de cod din producție și designul de API REST.',
        'projects.slide10.meta1': 'Tip',
        'projects.slide10.meta1v': 'API Backend',
        'projects.slide10.meta2': 'Focus',
        'projects.slide10.meta2v': 'Arhitectură REST',

        // certs
        'certs.h2': 'Realizări',
        'certs.sub': 'Rezultate la concursuri și recunoaștere tehnică',
        'certs.nextlab.title': 'Campionatul Național de Robotică NextLab',
        'certs.nextlab.place': 'Categoria AI — Locul I, Național',
        'certs.nextlab.desc': 'Am proiectat și construit un JetBot autonom pe NVIDIA Jetson Nano pentru categoria AI. Am concurat cu echipe din toată România și am câștigat titlul național în 2025.',
        'certs.nextlab.cta': 'Vezi diploma →',
        'certs.pcep.title': 'PCEP-30-02 — Programator Python certificat nivel introductiv',
        'certs.pcep.place': 'Python Institute — 2026',
        'certs.pcep.desc': 'Am promovat certificarea PCEP-30-02 oferită de Python Institute — o acreditare vendor-neutral care validează competența de nivel introductiv în fundamentele Python: sintaxă, control flow, structuri de date și funcții.',
        'certs.pcep.cta': 'Vezi certificatul →',
        'certs.viewAll': 'Vezi toate diplomele →',

        // diplomas page
        'diplomas.title': 'Diplome &amp; Certificate',
        'diplomas.sub': 'Toate rezultatele la concursuri, certificările și recunoașterile primite din 2025.',
        'diplomas.print': 'Printează pagina',
        'diplomas.sec0.h2': '📜 Certificare',
        'diplomas.sec0.item1.title': 'PCEP-30-02 — Programator Python certificat nivel introductiv',
        'diplomas.sec0.item1.issuer': 'Python Institute — 2026',
        'diplomas.sec0.item1.desc': 'Am promovat certificarea PCEP-30-02 oferită de Python Institute — un examen vendor-neutral care validează competența de nivel introductiv în fundamentele Python: sintaxă, control flow, structuri de date și funcții.',
        'diplomas.sec0.item1.open': 'Deschide PDF ↗',
        'diplomas.sec1.h2': '🥇 Premiul I',
        'diplomas.sec1.item1.title': 'Campionatul Național de Robotică NextLab',
        'diplomas.sec1.item1.issuer': 'NextLab — Național · 2025',
        'diplomas.sec1.item1.desc': 'Am obținut locul I la nivel național la categoria AI Robotics cu un JetBot autonom construit pe NVIDIA Jetson Nano AI Kit.',
        'diplomas.sec1.item1.open': 'Deschide PDF ↗',
        'diplomas.sec2.h2': '🥈 Premiul II',
        'diplomas.sec2.item1.title': 'Olimpiada de Inovare și Creație Digitală',
        'diplomas.sec2.item1.issuer': 'Olimpiada Națională de Inovare · 2026',
        'diplomas.sec2.item1.desc': 'Am obținut locul II la nivel național la Olimpiada de Inovare și Creație Digitală, cu un proiect la intersecția dintre software și rezolvarea creativă de probleme.',
        'diplomas.sec2.item1.open': 'Deschide PDF ↗',
        'diplomas.sec3.h2': '🥉 Premiul III',
        'diplomas.sec3.item1.title': 'Olimpiada TIC (No.1) — Etapa județeană',
        'diplomas.sec3.item1.issuer': 'TIC — Nivel județean · 2025',
        'diplomas.sec3.item1.desc': 'Am obținut locul III la etapa județeană a Olimpiadei de Informatică, rezolvând probleme algoritmice în C++ în condiții de concurs cronometrat.',
        'diplomas.sec3.item1.open': 'Deschide PDF ↗',
        'diplomas.sec4.h2': '🏅 Mențiuni',
        'diplomas.sec4.item1.title': 'Olimpiada TIC (No.2) — Mențiune',
        'diplomas.sec4.item1.issuer': 'TIC — Nivel județean · 2026',
        'diplomas.sec4.item1.desc': 'Am primit o a doua mențiune la o etapă separată a TIC, consolidând parcursul algoritmic.',
        'diplomas.sec4.item1.open': 'Deschide PDF ↗',
        'diplomas.sec4.item2.title': 'Acadnet — Mențiune',
        'diplomas.sec4.item2.issuer': 'Acadnet — Național · 2026',
        'diplomas.sec4.item2.desc': 'Am primit mențiune Acadnet pentru o lucrare academică și tehnică, recunoscută de instituție pentru calitatea muncii.',
        'diplomas.sec4.item2.open': 'Deschide PDF ↗',
        'diplomas.sec5.h2': '📋 Participări',
        'diplomas.sec5.item1.title': 'Matematică — Participare',
        'diplomas.sec5.item1.issuer': 'Olimpiada de Matematică — Județ · 2026',
        'diplomas.sec5.item1.desc': 'Am participat la Olimpiada de Matematică la nivel județean, testând rezolvarea analitică de probleme dincolo de informatică.',
        'diplomas.sec5.item1.open': 'Deschide PDF ↗',
        'diplomas.sec5.item2.title': 'Caius Iacob — Participare',
        'diplomas.sec5.item2.issuer': 'Concursul Caius Iacob — Național · 2026',
        'diplomas.sec5.item2.desc': 'Am participat la concursul național Caius Iacob, o competiție academică românească cu tradiție.',
        'diplomas.sec5.item2.open': 'Deschide PDF ↗',
        'diplomas.sec5.item3.title': 'Istorie — Participare',
        'diplomas.sec5.item3.issuer': 'Olimpiada de Istorie — Județ · 2025',
        'diplomas.sec5.item3.desc': 'Am participat la Olimpiada de Istorie la nivel județean, extinzând parcursul competițional în domeniul umanist.',
        'diplomas.sec5.item3.open': 'Deschide PDF ↗',
        'diplomas.sec6.h2': '🤝 Voluntariat',
        'diplomas.sec6.item1.title': 'Voluntariat — Certificat No.1',
        'diplomas.sec6.item1.issuer': 'Implicare în comunitate · 2025',
        'diplomas.sec6.item1.desc': 'Am finalizat prima activitate de voluntariat și am primit recunoaștere formală pentru contribuția în comunitate.',
        'diplomas.sec6.item1.open': 'Deschide PDF ↗',
        'diplomas.sec6.item2.title': 'Voluntariat — Certificat No.2',
        'diplomas.sec6.item2.issuer': 'Implicare în comunitate · 2026',
        'diplomas.sec6.item2.desc': 'Am finalizat o a doua activitate de voluntariat și am primit recunoaștere formală, dublând contribuția în comunitate.',
        'diplomas.sec6.item2.open': 'Deschide PDF ↗',

        // languages
        'lang.h2': 'Limbi',
        'lang.sub': 'Limbi vorbite — cele de programare sunt enumerate mai sus',
        'lang.ro.name': 'Română',
        'lang.ro.level': 'Nativ',
        'lang.en.name': 'Engleză',
        'lang.en.level': 'Fluent — competență profesională de lucru',

        // contact
        'contact.h2': 'Ia legătura',
        'contact.sub': 'Deschis la colaborări, proiecte freelance și conversații interesante despre software.',
        'contact.primary': 'Începe o conversație <span>↗</span>',
        'contact.email.name': 'Email',
        'contact.github.name': 'GitHub',
        'contact.linkedin.name': 'LinkedIn',
        'contact.discord.name': 'Discord',
        'contact.coffee.text': '☕ Dacă munca mea ți-a economisit timp sau vrei doar să susții un dezvoltator care livrează software între ore — o cafea face minuni:',
        'contact.coffee.btn': 'Oferă-mi o cafea ☕',
        'contact.coffee.note': 'Fără obligații — mă bucur că munca e utilă.',

        // footer
        'footer.role': 'Student · Informatică @ CNVG',
        'footer.backToTop': 'Înapoi sus',
        'footer.resume': 'CV',
        'footer.copy': '© 2026 Darius-Eduard Doana · Arad, România',
        'footer.portfolio': 'Portofoliu',
        'footer.contact': 'Contact',
        'footer.copyShort': '2026 / Arad, România',

        // scroll to top
        'scrollTop.aria': 'înapoi sus',

        // resume page
        'resume.title': 'Darius-Eduard Doana - CV',
        'resume.kicker': 'CV / 2026',
        'resume.print': 'Printează CV-ul',
        'resume.download': 'Descarcă CV-ul',
        'resume.back': '<- Înapoi la portofoliu',
        'resume.tagline': 'Elev · Informatică',
        'resume.location': 'Arad, România',
        'resume.born': 'Născut 27.09.2009 · Vârsta',
        'resume.profile.h2': 'Profil',
        'resume.profile.text': 'Elev de liceu în Arad, România, concentrat pe aplicații mobile și servicii backend mici. Lucrez mai ales cu Flutter, Dart, Python și HTML/CSS/JS în practică, și învăț C++ prin pregătire de olimpiadă. Cele mai multe proiecte vin din munca de școală, pregătirea de olimpiadă și idei personale pe care vreau să le văd existând.',
        'resume.projects.h2': 'Proiecte selectate',
        'resume.breakcount.title': 'BreakCount',
        'resume.breakcount.stack': 'Flutter / Dart / Python / Firebase',
        'resume.breakcount.active': 'Activ',
        'resume.breakcount.desc': 'Aplicație de productivitate pentru elevi — pauze școlare, examene, orare și remindere. Folosită de elevi din 33+ țări; suportă Android și iOS.',
        'resume.pontaj.title': 'ServerAppPontaj',
        'resume.pontaj.stack': 'Dart / REST API / Docker',
        'resume.pontaj.desc': 'Backend de pontaj cu autentificare, logare ture, raportare și deploy containerizat.',
        'resume.discordai.title': 'DiscordAI',
        'resume.discordai.stack': 'Python / OpenRouter / Discord API',
        'resume.discordai.desc': 'Bot Discord conversațional cu context pe mai multe mesaje, persona-uri de rol și răspunsuri bazate pe API.',
        'resume.justlearnit.title': 'JustLearnIt',
        'resume.justlearnit.stack': 'HTML / CSS / JavaScript',
        'resume.justlearnit.desc': 'Platformă de quiz-uri și flashcard-uri pentru crearea de pachete de studiu, rulare de quiz-uri cronometrate și urmărirea progresului.',
        'resume.education.h2': 'Educație',
        'resume.school.name': 'Colegiul Național Vasile Goldiș',
        'resume.school.track': 'Profil Informatică / Arad, România',
        'resume.school.dates': '2024 - Prezent',
        'resume.school.desc': 'Studiez informatica cu focus pe C++. Am absolvit cursul de programare Logiscool în 2026 și am obținut PCEP-30-02 (Certified Entry-Level Python Programmer) de la Python Institute în același an.',
        'resume.skills.h2': 'Competențe',
        'resume.skills.languagesCat': 'Limbaje',
        'resume.skills.languagesList': 'Dart, C++, Python, JavaScript, HTML, CSS',
        'resume.skills.toolsCat': 'Instrumente',
        'resume.skills.toolsList': 'Flutter, Docker, Git, REST APIs, Linux, Firebase',
        'resume.skills.focusCat': 'Focus',
        'resume.skills.focusList': 'Dezvoltare mobilă, sisteme backend, robotică, AI, programare competitivă',
        'resume.awards.h2': 'Premii',
        'resume.award1.place': 'Locul I, național',
        'resume.award1.event': 'NextLab Robotică - categoria AI, 2025',
        'resume.award1.cta': 'Vezi diploma',
        'resume.award2.place': 'Locul II, național',
        'resume.award2.event': 'Olimpiada de Inovare și Creație Digitală, 2026',
        'resume.award2.cta': 'Vezi diploma',
        'resume.award3.place': 'Locul III, județ',
        'resume.award3.event': 'Olimpiada TIC (No.1), 2025',
        'resume.award3.cta': 'Vezi diploma',
        'resume.award4.place': 'Mențiune',
        'resume.award4.event': 'Olimpiada TIC (No.2), 2026',
        'resume.award4.cta': 'Vezi diploma',
        'resume.award5.place': 'Mențiune',
        'resume.award5.event': 'Acadnet, 2026',
        'resume.award5.cta': 'Vezi diploma',
        'resume.award6.place': 'Certificat',
        'resume.award6.event': 'PCEP-30-02 — Python Institute, 2026',
        'resume.award6.cta': 'Vezi certificatul',
        'resume.human.h2': 'Limbi',
    },
};

const BIRTHDATE = '2009-09-27';
function computeAge(birth = BIRTHDATE) {
    const today = new Date();
    const b = new Date(birth);
    let age = today.getFullYear() - b.getFullYear();
    const m = today.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < b.getDate())) age--;
    return age;
}
function paintAge() {
    const age = String(computeAge());
    document.querySelectorAll('[data-age]').forEach(el => { el.textContent = age; });
    document.querySelectorAll('[data-age-dart]').forEach(el => { el.textContent = age; });
}

let CURRENT_LANG = (() => {
    try {
        const qp = new URLSearchParams(location.search).get('lang');
        if (qp === 'en' || qp === 'ro') return qp;
        const saved = localStorage.getItem('dd_lang');
        if (saved === 'en' || saved === 'ro') return saved;
    } catch (e) { /* ignore */ }
    return 'ro';
})();

function t(key) {
    return (I18N[CURRENT_LANG] && I18N[CURRENT_LANG][key]) || I18N.en[key] || key;
}

function applyLang(lang) {
    CURRENT_LANG = lang === 'en' ? 'en' : 'ro';
    try { localStorage.setItem('dd_lang', CURRENT_LANG); } catch (e) { /* ignore */ }
    document.documentElement.setAttribute('data-lang', CURRENT_LANG);
    document.documentElement.setAttribute('lang', CURRENT_LANG === 'ro' ? 'ro' : 'en');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = t(key);
        if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const spec = el.getAttribute('data-i18n-attr');
        spec.split(',').forEach(pair => {
            const [attr, key] = pair.split(':').map(s => s.trim());
            if (attr && key) {
                const value = t(key);
                if (value != null) el.setAttribute(attr, value);
            }
        });
    });

    // Update toggle label/state — the button shows the *target* language name
    // (so it always reads as "click to switch to [other language]").
    // aria-label and title describe the same action for screen readers.
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        const isEn = CURRENT_LANG === 'en';
        const currentName = isEn ? 'EN' : 'RO';
        const targetName = isEn ? 'RO' : 'EN';
        const ariaBase = t('lang.toggle.aria');
        const labelText = t('lang.toggle.label');
        toggle.setAttribute('aria-label', `${ariaBase} → ${targetName}`);
        toggle.setAttribute('title', `${ariaBase} → ${targetName}`);
        toggle.setAttribute('aria-pressed', String(isEn));
        const labelEl = toggle.querySelector('.lang-toggle-label');
        if (labelEl) labelEl.textContent = labelText;
    }

    // Update <title> and meta
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) titleEl.textContent = t(titleEl.getAttribute('data-i18n')).replace(/&amp;/g, '&');
    document.querySelectorAll('meta[data-i18n-attr]').forEach(meta => {
        const spec = meta.getAttribute('data-i18n-attr');
        spec.split(',').forEach(pair => {
            const [attr, key] = pair.split(':').map(s => s.trim());
            if (attr && key) {
                const value = t(key);
                if (value != null) meta.setAttribute(attr, value);
            }
        });
    });

    // Notify any subscribers (e.g., timeline chapter swap)
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: CURRENT_LANG } }));
}

function initLangToggle() {
    applyLang(CURRENT_LANG);
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        applyLang(CURRENT_LANG === 'en' ? 'ro' : 'en');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initLangToggle();
    paintAge();
});

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
            sidebarToggle.setAttribute('aria-label', isCollapsed ? t('sidebar.toggle.expand') : t('sidebar.toggle.collapse'));
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
            { dateKey: 'timeline.ch1.date', titleKey: 'timeline.ch1.title', descKey: 'timeline.ch1.desc' },
            { dateKey: 'timeline.ch2.date', titleKey: 'timeline.ch2.title', descKey: 'timeline.ch2.desc' },
            { dateKey: 'timeline.ch3.date', titleKey: 'timeline.ch3.title', descKey: 'timeline.ch3.desc' },
            { dateKey: 'timeline.ch4.date', titleKey: 'timeline.ch4.title', descKey: 'timeline.ch4.desc' },
            { dateKey: 'timeline.ch5.date', titleKey: 'timeline.ch5.title', descKey: 'timeline.ch5.desc' },
            { dateKey: 'timeline.ch6.date', titleKey: 'timeline.ch6.title', descKey: 'timeline.ch6.desc' },
            { dateKey: 'timeline.ch7.date', titleKey: 'timeline.ch7.title', descKey: 'timeline.ch7.desc' },
            { dateKey: 'timeline.ch8.date', titleKey: 'timeline.ch8.title', descKey: 'timeline.ch8.desc' },
            { dateKey: 'timeline.ch9.date', titleKey: 'timeline.ch9.title', descKey: 'timeline.ch9.desc' },
            { dateKey: 'timeline.ch10.date', titleKey: 'timeline.ch10.title', descKey: 'timeline.ch10.desc' },
        ];
        let activeIndex = 0;

        function setTimelineChapter(nextIndex) {
            activeIndex = Math.max(0, Math.min(chapters.length - 1, nextIndex));
            const chapter = chapters[activeIndex];
            ticks.forEach((tick, index) => {
                const isActive = index === activeIndex;
                tick.classList.toggle('is-active', isActive);
                tick.classList.toggle('is-current', isActive);
                tick.setAttribute('aria-selected', String(isActive));
                tick.tabIndex = isActive ? 0 : -1;
            });
            date.textContent = t(chapter.dateKey);
            title.innerHTML = t(chapter.titleKey);
            description.textContent = t(chapter.descKey);
            const total = String(chapters.length).padStart(2, '0');
            indexLabel.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${total}`;
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

        document.addEventListener('langchange', () => setTimelineChapter(activeIndex));
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
                tagsKey: 'projects.slide1.tags',
                descKey: 'projects.slide1.desc',
                meta: [
                    { labelKey: 'projects.slide1.meta1', valKey: 'projects.slide1.meta1v' },
                    { labelKey: 'projects.slide1.meta2', valKey: 'projects.slide1.meta2v' },
                    { labelKey: 'projects.slide1.meta3', valKey: 'projects.slide1.meta3v' },
                ],
                github: 'https://github.com/xynnpg/BreakCount',
                live: 'https://breakcount.tech',
            },
            {
                tagsKey: 'projects.slide2.tags',
                descKey: 'projects.slide2.desc',
                meta: [
                    { labelKey: 'projects.slide2.meta1', valKey: 'projects.slide2.meta1v' },
                    { labelKey: 'projects.slide2.meta2', valKey: 'projects.slide2.meta2v' },
                ],
                github: 'https://github.com/xynnpg/ServerAppPontaj',
                live: null,
            },
            {
                tagsKey: 'projects.slide3.tags',
                descKey: 'projects.slide3.desc',
                meta: [
                    { labelKey: 'projects.slide3.meta1', valKey: 'projects.slide3.meta1v' },
                    { labelKey: 'projects.slide3.meta2', valKey: 'projects.slide3.meta2v' },
                ],
                github: 'https://github.com/xynnpg/bluetooth-bridge',
                live: null,
            },
            {
                tagsKey: 'projects.slide4.tags',
                descKey: 'projects.slide4.desc',
                meta: [
                    { labelKey: 'projects.slide4.meta1', valKey: 'projects.slide4.meta1v' },
                    { labelKey: 'projects.slide4.meta2', valKey: 'projects.slide4.meta2v' },
                ],
                github: 'https://github.com/xynnpg/DiscordAI',
                live: null,
            },
            {
                tagsKey: 'projects.slide5.tags',
                descKey: 'projects.slide5.desc',
                meta: [
                    { labelKey: 'projects.slide5.meta1', valKey: 'projects.slide5.meta1v' },
                    { labelKey: 'projects.slide5.meta2', valKey: 'projects.slide5.meta2v' },
                ],
                github: 'https://github.com/xynnpg/DisStore',
                live: null,
            },
            {
                tagsKey: 'projects.slide6.tags',
                descKey: 'projects.slide6.desc',
                meta: [
                    { labelKey: 'projects.slide6.meta1', valKey: 'projects.slide6.meta1v' },
                    { labelKey: 'projects.slide6.meta2', valKey: 'projects.slide6.meta2v' },
                ],
                github: 'https://github.com/xynnpg/JustLearnIt',
                live: null,
            },
            {
                tagsKey: 'projects.slide7.tags',
                descKey: 'projects.slide7.desc',
                meta: [
                    { labelKey: 'projects.slide7.meta1', valKey: 'projects.slide7.meta1v' },
                    { labelKey: 'projects.slide7.meta2', valKey: 'projects.slide7.meta2v' },
                ],
                github: 'https://github.com/xynnpg/SpotifyDownloader',
                live: null,
            },
            {
                tagsKey: 'projects.slide8.tags',
                descKey: 'projects.slide8.desc',
                meta: [
                    { labelKey: 'projects.slide8.meta1', valKey: 'projects.slide8.meta1v' },
                    { labelKey: 'projects.slide8.meta2', valKey: 'projects.slide8.meta2v' },
                ],
                github: 'https://github.com/xynnpg/CheapMaps',
                live: null,
            },
            {
                tagsKey: 'projects.slide9.tags',
                descKey: 'projects.slide9.desc',
                meta: [
                    { labelKey: 'projects.slide9.meta1', valKey: 'projects.slide9.meta1v' },
                    { labelKey: 'projects.slide9.meta2', valKey: 'projects.slide9.meta2v' },
                ],
                github: 'https://github.com/xynnpg/SchoolYear',
                live: null,
            },
            {
                tagsKey: 'projects.slide10.tags',
                descKey: 'projects.slide10.desc',
                meta: [
                    { labelKey: 'projects.slide10.meta1', valKey: 'projects.slide10.meta1v' },
                    { labelKey: 'projects.slide10.meta2', valKey: 'projects.slide10.meta2v' },
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
        let currentProjIdx = -1;

        function paintProject(idx) {
            const p = PROJECTS[idx];
            if (!p) return;
            currentProjIdx = idx;
            // Title comes from the coverflow SLIDES (uses raw titles, not translated)
            const titleSource = (typeof window._getProjectTitle === 'function')
                ? window._getProjectTitle(idx) : '';
            titleEl.textContent = titleSource;

            const tags = t(p.tagsKey).split(',').map(s => s.trim()).filter(Boolean);
            tagsEl.innerHTML = tags.map(tag => `<span>${tag}</span>`).join('');

            descEl.textContent = t(p.descKey);

            metaEl.innerHTML = p.meta.map(m =>
                `<div class="proj-modal-meta-item">
                    <span class="proj-modal-meta-label">${t(m.labelKey)}</span>
                    <span class="proj-modal-meta-val">${t(m.valKey)}</span>
                </div>`
            ).join('');

            linkEl.href = p.github;

            if (p.live) {
                liveEl.href = p.live;
                liveEl.hidden = false;
            } else {
                liveEl.hidden = true;
            }
        }

        function openModal(idx, trigger = null) {
            const p = PROJECTS[idx];
            if (!p) return;
            lastModalTrigger = trigger || document.activeElement;

            paintProject(idx);

            overlay.hidden = false;
            document.body.style.overflow = 'hidden';
            closeBtn.focus();

            // Sync carousel to this index
            if (typeof window._cfGoTo === 'function') window._cfGoTo(idx);
        }

        // Re-translate modal content if the user switches language while it's open
        document.addEventListener('langchange', () => {
            if (!overlay.hidden && currentProjIdx >= 0) {
                paintProject(currentProjIdx);
            }
        });

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
                src: 'https://play-lh.googleusercontent.com/n5nGy1C9GHfC5cNYyBt3RVi408JykRjenHRlVQZmlihZFXRK-1SFICB-dodHUxSFRQSjcLRQNBPbyeI4yL0QeA=w240-h480-rw',
                alt: 'BreakCount mobile app',
                title: 'BreakCount',
                tagsKey: 'projects.slide1.tags',
                shortDescKey: 'projects.slide1.shortDesc',
                github: 'https://github.com/xynnpg/BreakCount',
                live: 'https://breakcount.tech',
            },
            {
                src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'ServerAppPontaj backend API',
                title: 'ServerAppPontaj',
                tagsKey: 'projects.slide2.tags',
                shortDescKey: 'projects.slide2.shortDesc',
                github: 'https://github.com/xynnpg/ServerAppPontaj',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'Bluetooth Bridge',
                title: 'Bluetooth Bridge',
                tagsKey: 'projects.slide3.tags',
                shortDescKey: 'projects.slide3.shortDesc',
                github: 'https://github.com/xynnpg/bluetooth-bridge',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'DiscordAI bot',
                title: 'DiscordAI',
                tagsKey: 'projects.slide4.tags',
                shortDescKey: 'projects.slide4.shortDesc',
                github: 'https://github.com/xynnpg/DiscordAI',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'DisStore plugin marketplace',
                title: 'DisStore',
                tagsKey: 'projects.slide5.tags',
                shortDescKey: 'projects.slide5.shortDesc',
                github: 'https://github.com/xynnpg/DisStore',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'JustLearnIt educational platform',
                title: 'JustLearnIt',
                tagsKey: 'projects.slide6.tags',
                shortDescKey: 'projects.slide6.shortDesc',
                github: 'https://github.com/xynnpg/JustLearnIt',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'SpotifyDownloader CLI',
                title: 'SpotifyDownloader',
                tagsKey: 'projects.slide7.tags',
                shortDescKey: 'projects.slide7.shortDesc',
                github: 'https://github.com/xynnpg/SpotifyDownloader',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'CheapMaps geolocation tool',
                title: 'CheapMaps',
                tagsKey: 'projects.slide8.tags',
                shortDescKey: 'projects.slide8.shortDesc',
                github: 'https://github.com/xynnpg/CheapMaps',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'SchoolYear organizer',
                title: 'SchoolYear',
                tagsKey: 'projects.slide9.tags',
                shortDescKey: 'projects.slide9.shortDesc',
                github: 'https://github.com/xynnpg/SchoolYear',
                live: null,
            },
            {
                src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=640&h=640&fit=crop&q=70&auto=format',
                alt: 'Pontaj API Fork',
                title: 'Pontaj-API-Fork',
                tagsKey: 'projects.slide10.tags',
                shortDescKey: 'projects.slide10.shortDesc',
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
            const tagsRaw = t(s.tagsKey);
            const tags = tagsRaw.split(',').map(x => x.trim()).filter(Boolean);
            fresh.querySelector('.proj-info-tags').innerHTML = tags.map(tg => `<span>${tg}</span>`).join('');
            fresh.querySelector('.proj-info-title').textContent = s.title;
            fresh.querySelector('.proj-info-desc').textContent = t(s.shortDescKey);

            const visit = fresh.querySelector('.proj-info-visit');
            visit.href = s.live || s.github;
            const visitLabel = visit.querySelector('span') || visit;
            visitLabel.textContent = s.live ? t('projects.visitSite') : t('projects.viewOnGithub');

            const moreLabel = fresh.querySelector('#cfInfoMoreLabel');
            if (moreLabel) moreLabel.textContent = t('projects.more');

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

        // Expose title lookup for the project modal
        window._getProjectTitle = (idx) => (SLIDES[idx] && SLIDES[idx].title) || '';

        // Re-translate coverflow info panel on language change
        document.addEventListener('langchange', () => updateUI(selectedRef));

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
