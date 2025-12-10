# Jonnathan Riquelmo - Portfolio

Este é o repositório do meu portfólio pessoal, uma single-page application (SPA) totalmente reformulada para refletir uma estética "Modern Matrix". O projeto demonstra minhas habilidades em engenharia de software, design de sistemas e atenção aos detalhes, utilizando tecnologias web nativas com uma arquitetura limpa e organizada.

[Veja a demonstração ao vivo](https://jonnathanriquelmo.github.io/)

---

## Sumário

- [Funcionalidades](#funcionalidades)
- [Design System & UI](#design-system--ui)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Personalização](#personalização)
- [Licença](#licença)

---

## Funcionalidades

- **Arquitetura Moderna**: Separação clara de responsabilidades entre Estrutura (HTML), Estilo (CSS) e Comportamento/Dados (JS).
- **Design Responsivo**: Layout fluido que se adapta perfeitamente a desktops, tablets e dispositivos móveis.
- **Internacionalização (i18n)**: Suporte nativo para Português (PT) e Inglês (EN) com alternância instantânea.
- **Renderização Dinâmica**: Todo o conteúdo (experiência, formação, skills) é gerado via JavaScript a partir de um arquivo de dados centralizado.
- **Menu Mobile Interativo**: Navegação otimizada para telas sensíveis ao toque com animações fluidas.

## Design System & UI

O projeto adota uma estética **"Modern Matrix"**, combinando o visual cyberpunk clássico com práticas modernas de UX:

- **Paleta de Cores**: Fundo escuro profundo (`#050505`) com acentos em verde neon (`#00ff41`) e verde escuro (`#0d0208`).
- **Tipografia**: Uso da fonte monoespaçada `JetBrains Mono` para código/títulos e `Inter` para legibilidade em textos longos.
- **Efeitos Visuais**:
  - **Matrix Rain**: Animação de fundo com canvas HTML5 customizável.
  - **Glitch Effect**: Efeitos de distorção digital em textos e hover de cards.
  - **Scanlines**: Sobreposição sutil para simular monitores CRT antigos.
  - **Typewriter**: Efeito de digitação automática na seção Hero.
  - **Glassmorphism**: Elementos de UI com fundos semitransparentes e desfoque.

## Tecnologias Utilizadas

- **HTML5**: Semântica e acessibilidade.
- **CSS3**:
  - CSS Variables (Custom Properties) para design tokens.
  - Flexbox e Grid para layout.
  - Animações CSS (@keyframes) para efeitos de glitch e cursor.
- **JavaScript (ES6+)**:
  - Módulos para organização do código.
  - Canvas API para o efeito Matrix.
  - Manipulação eficiente do DOM.
  - Não utiliza frameworks externos (Vanilla JS).
- **Google Fonts**: JetBrains Mono e Inter.
- **Font Awesome**: Ícones vetoriais.

## Estrutura do Projeto

A estrutura de arquivos foi organizada para facilitar a manutenção e escalabilidade:

```
/
├── LICENSE
├── README.md
├── index.html          # Ponto de entrada (estrutura base)
├── css/
│   └── style.css       # Design System e estilos globais
└── js/
    ├── app.js          # Lógica da aplicação, efeitos e renderização
    └── data.js         # Repositório de dados (conteúdo do currículo)
```

## Como Executar

O projeto não requer build tools ou dependências complexas (npm/yarn), pois utiliza tecnologias nativas.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/JonnathanRiquelmo/jonnathanriquelmo.github.io.git
    ```
2.  **Navegue até o diretório:**
    ```bash
    cd jonnathanriquelmo.github.io
    ```
3.  **Inicie um servidor local** (recomendado para evitar bloqueios de CORS em alguns navegadores, embora funcione diretamente também):
    *   Com Python:
        ```bash
        python -m http.server
        ```
    *   Com Node.js (se tiver `live-server` ou similar):
        ```bash
        npx live-server
        ```
4.  **Acesse:** `http://localhost:8000`

## Personalização

Para atualizar as informações do portfólio, você só precisa editar um arquivo:

*   **`js/data.js`**: Este arquivo contém um objeto `resumeData`. Altere os valores dentro dele (Experiência, Educação, Skills, etc.) e o site será atualizado automaticamente. O arquivo suporta campos bilíngues (pt/en).

Exemplo:
```javascript
export const resumeData = {
    profile: {
        name: "Seu Nome",
        role: { pt: "Seu Cargo", en: "Your Role" },
        // ...
    },
    // ...
};
```

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

# English Version

# Jonnathan Riquelmo - Portfolio

This is the repository for my personal portfolio, a single-page application (SPA) completely overhauled to reflect a "Modern Matrix" aesthetic. The project demonstrates my skills in software engineering, system design, and attention to detail, using native web technologies with a clean and organized architecture.

[View the live demo](https://jonnathanriquelmo.github.io/)

---

## Table of Contents

- [Features](#features)
- [Design System & UI](#design-system--ui)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Customization](#customization)
- [License](#license)

---

## Features

- **Modern Architecture**: Clear separation of concerns between Structure (HTML), Style (CSS), and Behavior/Data (JS).
- **Responsive Design**: Fluid layout that adapts perfectly to desktops, tablets, and mobile devices.
- **Internationalization (i18n)**: Native support for Portuguese (PT) and English (EN) with instant toggling.
- **Dynamic Rendering**: All content (experience, education, skills) is generated via JavaScript from a centralized data file.
- **Interactive Mobile Menu**: Optimized navigation for touch screens with fluid animations.

## Design System & UI

The project adopts a **"Modern Matrix"** aesthetic, combining the classic cyberpunk look with modern UX practices:

- **Color Palette**: Deep dark background (`#050505`) with neon green accents (`#00ff41`) and dark green (`#0d0208`).
- **Typography**: Uses `JetBrains Mono` for code/headings and `Inter` for readability in long texts.
- **Visual Effects**:
  - **Matrix Rain**: Background animation with customizable HTML5 canvas.
  - **Glitch Effect**: Digital distortion effects on text and card hovers.
  - **Scanlines**: Subtle overlay to simulate old CRT monitors.
  - **Typewriter**: Automatic typing effect in the Hero section.
  - **Glassmorphism**: UI elements with semi-transparent backgrounds and blur.

## Technologies Used

- **HTML5**: Semantics and accessibility.
- **CSS3**:
  - CSS Variables (Custom Properties) for design tokens.
  - Flexbox and Grid for layouts.
  - CSS Animations (@keyframes) for glitch and cursor effects.
- **JavaScript (ES6+)**:
  - Modules for code organization.
  - Canvas API for the Matrix effect.
  - Efficient DOM manipulation.
  - No external frameworks (Vanilla JS).
- **Google Fonts**: JetBrains Mono and Inter.
- **Font Awesome**: Vector icons.

## Project Structure

The file structure has been organized for maintainability and scalability:

```
/
├── LICENSE
├── README.md
├── index.html          # Entry point (base structure)
├── css/
│   └── style.css       # Design System and global styles
└── js/
    ├── app.js          # Application logic, effects, and rendering
    └── data.js         # Data repository (resume content)
```

## How to Run

The project does not require build tools or complex dependencies (npm/yarn), as it uses native technologies.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JonnathanRiquelmo/jonnathanriquelmo.github.io.git
    ```
2.  **Navigate to the directory:**
    ```bash
    cd jonnathanriquelmo.github.io
    ```
3.  **Start a local server** (recommended to avoid CORS blocks in some browsers, although it may work directly):
    *   With Python:
        ```bash
        python -m http.server
        ```
    *   With Node.js (if you have `live-server` or similar):
        ```bash
        npx live-server
        ```
4.  **Access:** `http://localhost:8000`

## Customization

To update the portfolio information, you only need to edit one file:

*   **`js/data.js`**: This file contains a `resumeData` object. Change the values inside it (Experience, Education, Skills, etc.) and the site will update automatically. The file supports bilingual fields (pt/en).

Example:
```javascript
export const resumeData = {
    profile: {
        name: "Your Name",
        role: { pt: "Seu Cargo", en: "Your Role" },
        // ...
    },
    // ...
};
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
