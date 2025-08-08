// Carrega os dados do JSON
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        populateContent(data);

        // Chama a função para atualizar a data e hora quando os dados forem carregados
        updateDateTime();  // Atualiza imediatamente
        setInterval(updateDateTime, 1000);  // Atualiza a cada segundo
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}

// Função para atualizar a data e hora
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');

    // Cria um objeto Date com a data e hora atuais
    const now = new Date();

    // Formata a data e hora
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Exibe a data e hora no formato desejado
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    // Atualiza o conteúdo do elemento com a data e hora
    dateTimeElement.textContent = formattedDateTime;
}

// Preenche o conteúdo na página
function populateContent(data) {
    // Informações básicas
    document.getElementById('nome').textContent = data.name;
    document.getElementById('titulo').textContent = data.title;
    document.getElementById('descricao').textContent = data.description;
    document.getElementById('sobre-mim').textContent = data.about_me;

    // Links sociais
    const socialsContainer = document.getElementById('links-sociais');
    const iconMap = {
        linkedin: 'fab fa-linkedin',
        github: 'fab fa-github',
        lattes: 'fas fa-graduation-cap',
        email: 'fas fa-envelope',
        lastFm: 'fab fa-lastfm',
        instagram: 'fab fa-instagram'
    };
    Object.entries(data.social_links).forEach(([platform, url]) => {
        const link = document.createElement('a');
        link.href = url.trim();
        link.target = '_blank';
        const icon = document.createElement('i');
        icon.className = iconMap[platform];
        link.appendChild(icon);
        socialsContainer.appendChild(link);
    });

    // Experiências profissionais
    const expContainer = document.getElementById('experiencias-profissionais');
    data.professional_experience.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'experience-item';
        expElement.innerHTML = `
            <h3>${exp.position}</h3>
            <p class="period">${exp.period} - ${exp.company}</p>
            <ul>
                ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
        `;
        expContainer.appendChild(expElement);
    });

    // Formação acadêmica
    const educContainer = document.getElementById('formacao-academica');
    const diplomaMap = {
        'Master\'s in Software Engineering': 'assets/Mestrado-frente-edit.pdf',
        'Bachelor\'s in Software Engineering': 'assets/ES-frente-edit.pdf',
        'Bachelor\'s in Information Systems': 'assets/SI-frente-edit.pdf'
    };
    data.academic_background.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.className = 'education-item';
        const diplomaLink = diplomaMap[edu.course] ? `<a href="${diplomaMap[edu.course]}" target="_blank" class="diploma-link" title="Visualizar Diploma"><i class="fas fa-file-pdf"></i></a>` : '';
        eduElement.innerHTML = `
            <h3>${diplomaLink} ${edu.course}</h3>
            <p class="period">${edu.period} - ${edu.institution}</p>
            <p>${edu.description}</p>
        `;
        educContainer.appendChild(eduElement);
    });

    // Habilidades técnicas
    const skillsContainer = document.getElementById('habilidades-tecnicas');
    data.technical_skills.forEach(skill => {
        const skillElement = document.createElement('span');
        skillElement.className = 'skill-tag';
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });

    // Informações de contato
    const contactContainer = document.getElementById('info-contato');
    const contato = data.contact;
    contactContainer.innerHTML = `
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/${contato.whatsapp.replace(/[^0-9]/g, '')}">${contato.whatsapp}</a></p>
        <p><strong>E-mail:</strong> <a href="mailto:${contato.email}">${contato.email}</a></p>
        <p><strong>Location:</strong> ${contato.location}</p>
    `;
}

// Função para criar partículas animadas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posição inicial aleatória
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Opacidade aleatória
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        
        particlesContainer.appendChild(particle);
    }
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    const body = document.body;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Hide theme toggle on scroll for mobile devices
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {
            themeToggle.style.opacity = '0';
            themeToggle.style.pointerEvents = 'none';
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                themeToggle.style.opacity = '1';
                themeToggle.style.pointerEvents = 'auto';
            }, 1500);
        }
    });
    
    // Apply saved theme
    if (savedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Dark';
    } else {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Light';
    }
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        
        if (currentTheme === 'light') {
            // Switch to dark mode
            body.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-sun';
            themeText.textContent = 'Light';
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light mode
            body.setAttribute('data-theme', 'light');
            themeIcon.className = 'fas fa-moon';
            themeText.textContent = 'Dark';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Carrega os dados quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    createParticles();
    initThemeToggle();
});
