# 🌟 Personal Portfolio - Jonnathan Riquelmo

> [🇧🇷 Versão em Português](#-versão-em-português) | [🇺🇸 English Version](#-english-version)

---

## 🇺🇸 English Version

A modern and interactive personal portfolio developed as a Single Page Application (SPA) to showcase professional experiences, academic background, and technical skills.

### ✨ Key Features

- **🎨 Responsive Design**: Adaptable to different screen sizes (desktop, tablet, mobile)
- **🌓 Light/Dark Theme**: Theme switching with localStorage persistence
- **🌍 Multilingual**: Support for Portuguese (pt-BR) and English (en)
- **✨ Interactive Animations**: Animated particle system with mouse interaction
- **🚀 Smooth Navigation**: Smooth scrolling between sections
- **📱 Mobile Menu**: Interface adapted for mobile devices

### 🛠️ Technologies Used

#### Frontend
- **HTML5**: Semantic page structure
- **CSS3**: Advanced styling with:
  - CSS Variables (Custom Properties) for themes
  - Flexbox and Grid Layout
  - CSS animations and transitions
  - Media queries for responsiveness
  - Backdrop-filter for blur effects
- **JavaScript (Vanilla)**: Interactive functionalities without frameworks

#### External Libraries
- **Font Awesome 6.4.0**: Vector icons for interface and social media
- **Google Fonts**: Typography (Segoe UI as fallback)

#### Visual Resources
- **Canvas API**: Real-time animated particle system
- **CSS Gradients**: Visual effects on texts and elements
- **Box Shadow**: Depth and elevation of components
- **Glassmorphism**: Glass effect on header with backdrop-filter

### 📁 Project Structure

```
jonnathanriquelmo.github.io/
├── index.html          # Main file (SPA)
├── README.md          # Project documentation
└── LICENSE           # Project license
```

### 🎨 Detailed Features

#### Theme System
- **Dark Theme**: Cyberpunk palette with cyan blue (#00d9ff) and magenta (#ff00ff) tones
- **Light Theme**: Professional palette with blue (#0066cc) and purple (#9c27b0)
- **Persistence**: Preference saved in browser localStorage

#### Internationalization (i18n)
- **Brazilian Portuguese**: Default language
- **English**: Complete interface translation
- **Automatic Detection**: Based on saved preference or system default
- **Dynamic Switching**: Toggle without page reload

#### Particle Animation
- **Canvas 2D**: Rendering of 100 animated particles
- **Mouse Interaction**: Particles react to cursor proximity
- **Dynamic Connections**: Lines connect nearby particles
- **Responsive**: Adapts to window resizing
- **Optimized**: RequestAnimationFrame for smooth performance

#### Navigation and UX
- **Fixed Header**: Always visible navigation with blur effect
- **Smooth Scroll**: Animated transitions between sections
- **Hamburger Menu**: Mobile interface with side menu
- **Social Links**: Integration with LinkedIn, GitHub, Lattes, etc.

### 📊 Structured Data

Content is organized in an embedded JSON object, including:

- **Personal Information**: Name, title, description
- **Professional Experience**: Work history with details
- **Academic Background**: Education and qualifications
- **Technical Skills**: Technologies and tools
- **Contact**: WhatsApp, email, location
- **Social Networks**: Links to professional profiles

### 🚀 How to Run

#### Option 1: Local Server
```bash
# Clone the repository
git clone https://github.com/JonnathanRiquelmo/jonnathanriquelmo.github.io.git

# Enter the directory
cd jonnathanriquelmo.github.io

# Start a local server (Python)
python -m http.server 8000

# Or using Node.js
npx serve .
```

#### Option 2: GitHub Pages
The project is configured for automatic deployment via GitHub Pages:
- **URL**: https://jonnathanriquelmo.github.io
- **Branch**: main
- **Folder**: root

#### Option 3: Local File
Open the `index.html` file directly in any modern browser.

### 🌐 Compatibility

#### Supported Browsers
- **Chrome/Chromium**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

#### Used Resources
- CSS Custom Properties (IE 11+ with polyfill)
- Canvas API (All modern browsers)
- LocalStorage (IE 8+)
- Backdrop-filter (Chrome 76+, Firefox 103+)

### 📱 Responsiveness

#### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

#### Mobile Adaptations
- Hamburger menu
- Vertical timeline
- Font resizing
- Spacing optimization
- Touch-friendly buttons

### 🎯 Performance

#### Implemented Optimizations
- **Inline CSS**: Reduces HTTP requests
- **Vanilla JavaScript**: No framework overhead
- **Lazy Loading**: Dynamically loaded content
- **RequestAnimationFrame**: Optimized animations
- **LocalStorage**: Preference caching

#### Expected Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### 🔧 Customization

#### Modify Personal Data
Edit the `jsonData` object in the `index.html` file (line ~520):

```javascript
const jsonData = {
    "name": "Your Name",
    "title": {
        "pt-BR": "Seu Título em Português",
        "en": "Your Title in English"
    },
    // ... other data
};
```

#### Customize Colors
Modify the CSS Custom Properties in `:root` (line ~7):

```css
:root {
    --accent-color: #00d9ff;        /* Primary color */
    --accent-secondary: #ff00ff;    /* Secondary color */
    --bg-color: #0f0f1e;           /* Background */
    /* ... other variables */
}
```

#### Add Languages
1. Extend the `translations` object (line ~720)
2. Add translations to the `jsonData` object
3. Implement detection logic in JavaScript

### 📄 License

This project is licensed under the [MIT License](LICENSE).

### 👨‍💻 Author

**Jonnathan Riquelmo**
- LinkedIn: [jonnathan-riquelmo](https://www.linkedin.com/in/jonnathan-riquelmo)
- GitHub: [JonnathanRiquelmo](https://github.com/JonnathanRiquelmo)
- Email: jonnathan.riquelmo@gmail.com

---

*Developed with ❤️ using modern web technologies*

---

## 🇧🇷 Versão em Português

Um portfólio pessoal moderno e interativo desenvolvido como Single Page Application (SPA) para apresentar experiências profissionais, formação acadêmica e habilidades técnicas.

### ✨ Principais Funcionalidades

- **🎨 Design Responsivo**: Adaptável a diferentes tamanhos de tela (desktop, tablet, mobile)
- **🌓 Tema Claro/Escuro**: Alternância de tema com persistência no localStorage
- **🌍 Multilíngue**: Suporte para português (pt-BR) e inglês (en)
- **✨ Animações Interativas**: Sistema de partículas animadas com interação do mouse
- **🚀 Navegação Suave**: Scroll suave entre seções
- **📱 Menu Mobile**: Interface adaptada para dispositivos móveis

### 🛠️ Tecnologias Utilizadas

#### Frontend
- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização avançada com:
  - CSS Variables (Custom Properties) para temas
  - Flexbox e Grid Layout
  - Animações e transições CSS
  - Media queries para responsividade
  - Backdrop-filter para efeitos de desfoque
- **JavaScript (Vanilla)**: Funcionalidades interativas sem frameworks

#### Bibliotecas Externas
- **Font Awesome 6.4.0**: Ícones vetoriais para interface e redes sociais
- **Google Fonts**: Tipografia (Segoe UI como fallback)

#### Recursos Visuais
- **Canvas API**: Sistema de partículas animadas em tempo real
- **CSS Gradients**: Efeitos visuais em textos e elementos
- **Box Shadow**: Profundidade e elevação dos componentes
- **Glassmorphism**: Efeito de vidro no cabeçalho com backdrop-filter

### 📁 Estrutura do Projeto

```
jonnathanriquelmo.github.io/
├── index.html          # Arquivo principal (SPA)
├── README.md          # Documentação do projeto
└── LICENSE           # Licença do projeto
```

### 🎨 Funcionalidades Detalhadas

#### Sistema de Temas
- **Tema Escuro**: Paleta cyberpunk com tons de azul ciano (#00d9ff) e magenta (#ff00ff)
- **Tema Claro**: Paleta profissional com azul (#0066cc) e roxo (#9c27b0)
- **Persistência**: Preferência salva no localStorage do navegador

#### Internacionalização (i18n)
- **Português Brasileiro**: Idioma padrão
- **Inglês**: Tradução completa da interface
- **Detecção Automática**: Baseada na preferência salva ou padrão do sistema
- **Alternância Dinâmica**: Troca sem recarregamento da página

#### Animação de Partículas
- **Canvas 2D**: Renderização de 100 partículas animadas
- **Interação com Mouse**: Partículas reagem à proximidade do cursor
- **Conexões Dinâmicas**: Linhas conectam partículas próximas
- **Responsivo**: Adapta-se ao redimensionamento da janela
- **Otimizado**: RequestAnimationFrame para performance suave

#### Navegação e UX
- **Cabeçalho Fixo**: Navegação sempre visível com efeito de desfoque
- **Scroll Suave**: Transições animadas entre seções
- **Menu Hambúrguer**: Interface mobile com menu lateral
- **Links Sociais**: Integração com LinkedIn, GitHub, Lattes, etc.

### 📊 Dados Estruturados

O conteúdo é organizado em um objeto JSON incorporado, incluindo:

- **Informações Pessoais**: Nome, título, descrição
- **Experiência Profissional**: Histórico de trabalho com detalhes
- **Formação Acadêmica**: Educação e qualificações
- **Habilidades Técnicas**: Tecnologias e ferramentas
- **Contato**: WhatsApp, email, localização
- **Redes Sociais**: Links para perfis profissionais

### 🚀 Como Executar

#### Opção 1: Servidor Local
```bash
# Clone o repositório
git clone https://github.com/JonnathanRiquelmo/jonnathanriquelmo.github.io.git

# Entre no diretório
cd jonnathanriquelmo.github.io

# Inicie um servidor local (Python)
python -m http.server 8000

# Ou usando Node.js
npx serve .
```

#### Opção 2: GitHub Pages
O projeto está configurado para deploy automático via GitHub Pages:
- **URL**: https://jonnathanriquelmo.github.io
- **Branch**: main
- **Pasta**: root

#### Opção 3: Arquivo Local
Abra o arquivo `index.html` diretamente em qualquer navegador moderno.

### 🌐 Compatibilidade

#### Navegadores Suportados
- **Chrome/Chromium**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

#### Recursos Utilizados
- CSS Custom Properties (IE 11+ com polyfill)
- Canvas API (Todos os navegadores modernos)
- LocalStorage (IE 8+)
- Backdrop-filter (Chrome 76+, Firefox 103+)

### 📱 Responsividade

#### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

#### Adaptações Mobile
- Menu hambúrguer
- Timeline vertical
- Redimensionamento de fontes
- Otimização de espaçamentos
- Botões touch-friendly

### 🎯 Performance

#### Otimizações Implementadas
- **CSS Inline**: Reduz requisições HTTP
- **JavaScript Vanilla**: Sem overhead de frameworks
- **Lazy Loading**: Conteúdo carregado dinamicamente
- **RequestAnimationFrame**: Animações otimizadas
- **LocalStorage**: Cache de preferências

#### Métricas Esperadas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### 🔧 Personalização

#### Modificar Dados Pessoais
Edite o objeto `jsonData` no arquivo `index.html` (linha ~520):

```javascript
const jsonData = {
    "name": "Seu Nome",
    "title": {
        "pt-BR": "Seu Título em Português",
        "en": "Your Title in English"
    },
    // ... outros dados
};
```

#### Personalizar Cores
Modifique as CSS Custom Properties no `:root` (linha ~7):

```css
:root {
    --accent-color: #00d9ff;        /* Cor principal */
    --accent-secondary: #ff00ff;    /* Cor secundária */
    --bg-color: #0f0f1e;           /* Fundo */
    /* ... outras variáveis */
}
```

#### Adicionar Idiomas
1. Estenda o objeto `translations` (linha ~720)
2. Adicione as traduções no objeto `jsonData`
3. Implemente a lógica de detecção no JavaScript

### 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

### 👨‍💻 Autor

**Jonnathan Riquelmo**
- LinkedIn: [jonnathan-riquelmo](https://www.linkedin.com/in/jonnathan-riquelmo)
- GitHub: [JonnathanRiquelmo](https://github.com/JonnathanRiquelmo)
- Email: jonnathan.riquelmo@gmail.com

---

*Desenvolvido com ❤️ usando tecnologias web modernas*