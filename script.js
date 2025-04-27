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
    document.getElementById('nome').textContent = data.nome;
    document.getElementById('titulo').textContent = data.titulo;
    document.getElementById('descricao').textContent = data.descricao;
    document.getElementById('sobre-mim').textContent = data.sobre_mim;

    // Links sociais
    const socialsContainer = document.getElementById('links-sociais');
    const iconMap = {
        linkedin: 'fab fa-linkedin',
        github: 'fab fa-github',
        lattes: 'fas fa-graduation-cap',
        email: 'fas fa-envelope',
        lastFm: 'fab fa-lastfm'
    };
    Object.entries(data.links_sociais).forEach(([platform, url]) => {
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
    data.experiencias_profissionais.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'experience-item';
        expElement.innerHTML = `
            <h3>${exp.cargo}</h3>
            <p class="period">${exp.periodo} - ${exp.empresa}</p>
            <ul>
                ${exp.descricao.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
        `;
        expContainer.appendChild(expElement);
    });

    // Formação acadêmica
    const educContainer = document.getElementById('formacao-academica');
    const diplomaMap = {
        'Mestrado em Engenharia de Software': 'assets/Mestrado-frente-edit.pdf',
        'Bacharelado em Engenharia de Software': 'assets/ES-frente-edit.pdf',
        'Bacharelado em Sistemas de Informação': 'assets/SI-frente-edit.pdf'
    };
    data.formacao_academica.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.className = 'education-item';
        const diplomaLink = diplomaMap[edu.curso] ? `<a href="${diplomaMap[edu.curso]}" target="_blank" class="diploma-link" title="Visualizar Diploma"><i class="fas fa-file-pdf"></i></a>` : '';
        eduElement.innerHTML = `
            <h3>${diplomaLink} ${edu.curso}</h3>
            <p class="period">${edu.periodo} - ${edu.instituicao}</p>
            <p>${edu.descricao}</p>
        `;
        educContainer.appendChild(eduElement);
    });

    // Habilidades técnicas
    const skillsContainer = document.getElementById('habilidades-tecnicas');
    data.habilidades_tecnicas.forEach(skill => {
        const skillElement = document.createElement('span');
        skillElement.className = 'skill-tag';
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });

    // Projetos
    const projectsContainer = document.getElementById('lista-projetos');
    data.projetos.forEach(projeto => {
        const projetoElement = document.createElement('div');
        projetoElement.className = 'project-item';
        projetoElement.innerHTML = `
            <h3><a href="${projeto.link}" target="_blank">${projeto.nome}</a></h3>
        `;
        projectsContainer.appendChild(projetoElement);
    });

    // Informações de contato
    const contactContainer = document.getElementById('info-contato');
    const contato = data.contato;
    contactContainer.innerHTML = `
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/${contato.whatsapp.replace(/[^0-9]/g, '')}">${contato.whatsapp}</a></p>
        <p><strong>E-mail:</strong> <a href="mailto:${contato.email}">${contato.email}</a></p>
        <p><strong>Localização:</strong> ${contato.localizacao}</p>
    `;
}

// Carrega os dados quando a página é carregada
document.addEventListener('DOMContentLoaded', loadData);
