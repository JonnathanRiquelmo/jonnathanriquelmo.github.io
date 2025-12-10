document.addEventListener('DOMContentLoaded', () => {
    // State
    const state = {
        lang: 'pt', // 'pt' or 'en'
        isMenuOpen: false
    };

    // Dictionary for static UI elements
    const i18n = {
        pt: {
            'nav.about': '01. Sobre',
            'nav.experience': '02. Experiência',
            'nav.skills': '03. Skills',
            'nav.education': '04. Formação',
            'section.about': 'Sobre',
            'section.experience': 'Experiência',
            'section.skills': 'Skills',
            'section.education': 'Formação'
        },
        en: {
            'nav.about': '01. About',
            'nav.experience': '02. Experience',
            'nav.skills': '03. Skills',
            'nav.education': '04. Education',
            'section.about': 'About',
            'section.experience': 'Experience',
            'section.skills': 'Skills',
            'section.education': 'Education'
        }
    };

    // DOM Elements
    const elements = {
        matrixCanvas: document.getElementById('matrix-canvas'),
        content: document.getElementById('content'),
        langToggle: document.getElementById('lang-toggle'),
        navMenu: document.getElementById('nav-menu'),
        menuToggle: document.getElementById('menu-toggle'),
        navLinks: document.querySelectorAll('[data-i18n]')
    };

    // --- Matrix Effect ---
    function initMatrix() {
        if (!elements.matrixCanvas) return;
        
        const ctx = elements.matrixCanvas.getContext('2d');
        
        // Resize canvas
        function resize() {
            elements.matrixCanvas.width = window.innerWidth;
            elements.matrixCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        // Characters
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;':\",./<>?".split("");
        const fontSize = 14;
        const columns = elements.matrixCanvas.width / fontSize;
        const drops = [];

        // Initialize drops
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        // Draw loop
        function draw() {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
            ctx.fillRect(0, 0, elements.matrixCanvas.width, elements.matrixCanvas.height);

            ctx.fillStyle = "#00ff41"; // Matrix Green
            ctx.font = `${fontSize}px 'JetBrains Mono'`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > elements.matrixCanvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(draw, 33);
    }

    // --- UI Updates ---
    function updateLanguage() {
        const lang = state.lang;
        
        // Update static UI elements (nav)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang][key]) {
                el.textContent = i18n[lang][key];
            }
        });

        // Update button text
        elements.langToggle.textContent = lang === 'pt' ? 'EN' : 'PT';
        
        // Re-render dynamic content
        render();
    }

    // --- Rendering Content ---
    function render() {
        const lang = state.lang;
        const data = resumeData; // Global from data.js

        // Helper to get text by lang
        const t = (obj) => {
            if (typeof obj === 'object' && obj !== null && (obj.pt || obj.en)) {
                return obj[lang] || obj.pt || obj.en;
            }
            return obj;
        };

        // Render sections
        const html = `
            <!-- Hero Section -->
            <section id="hero" class="hero">
                <div class="hero-content">
                    <h1 class="glitch-text" data-text="${data.profile.name}">${data.profile.name}</h1>
                    <h2 class="text-dim cursor" id="typewriter" style="min-height: 1.5em"></h2>
                    <p class="mt-2 text-dim">${t(data.profile.location)}</p>
                    <div class="social-links mt-4">
                        ${data.contact.map(c => `
                            <a href="${c.url}" target="_blank" class="social-icon" title="${c.label}" aria-label="${c.label}">
                                <i class="${c.icon}"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- About Section -->
            <section id="about" class="container section">
                <h3><span class="text-dim">01.</span> ${i18n[lang]['section.about']}</h3>
                <div class="card glitch-hover">
                    <p>${t(data.profile.about)}</p>
                </div>
            </section>

            <!-- Experience Section -->
            <section id="experience" class="container section">
                <h3><span class="text-dim">02.</span> ${i18n[lang]['section.experience']}</h3>
                <div class="timeline">
                    ${data.experience.map(exp => `
                        <div class="card glitch-hover">
                            <div class="flex-between">
                                <h4>${t(exp.role)}</h4>
                                <span class="text-dim text-sm">${exp.period}</span>
                            </div>
                            <h5 class="text-dim">${exp.company}</h5>
                            <p class="mt-2 text-sm">${t(exp.description)}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Skills Section -->
            <section id="skills" class="container section">
                <h3><span class="text-dim">03.</span> ${i18n[lang]['section.skills']}</h3>
                <div class="grid-2">
                    ${data.skills.map(skill => `
                        <div class="card glitch-hover">
                            <div class="flex-between">
                                <span><i class="${skill.icon}"></i> ${skill.name}</span>
                                <span class="text-dim">${skill.level}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-fill" style="width: ${skill.level}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

             <!-- Education Section -->
            <section id="education" class="container section">
                <h3><span class="text-dim">04.</span> ${i18n[lang]['section.education']}</h3>
                <div class="timeline">
                    ${data.education.map(edu => `
                        <div class="card glitch-hover">
                            <div class="flex-between">
                                <h4>${t(edu.degree)}</h4>
                                <span class="text-dim text-sm">${edu.period}</span>
                            </div>
                            <h5 class="text-dim">${edu.institution}</h5>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Footer -->
            <footer class="text-center py-4 text-dim text-sm">
                <p>Designed & Built by Jonnathan Riquelmo</p>
                <p>v2.0.0 [Matrix Edition]</p>
            </footer>
        `;

        elements.content.innerHTML = html;

        // Re-run typewriter effect
        const tagline = t(data.profile.tagline);
        typeWriter(tagline, document.getElementById('typewriter'));
    }

    // --- Typewriter Effect ---
    function typeWriter(text, element) {
        if (!element) return;
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        type();
    }

    // --- Event Listeners ---
    elements.langToggle.addEventListener('click', () => {
        state.lang = state.lang === 'pt' ? 'en' : 'pt';
        updateLanguage();
    });

    elements.menuToggle.addEventListener('click', () => {
        state.isMenuOpen = !state.isMenuOpen;
        elements.navMenu.classList.toggle('active');
        const icon = elements.menuToggle.querySelector('i');
        if (state.isMenuOpen) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.addEventListener('click', (e) => {
        if (e.target.matches('.nav-menu a')) {
            state.isMenuOpen = false;
            elements.navMenu.classList.remove('active');
            const icon = elements.menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Initialize
    initMatrix();
    updateLanguage(); // This will call render()
});
