# Jonnathan Riquelmo - Portfolio

Este é o repositório do meu portfólio pessoal, uma single-page application (SPA) criada para mostrar minhas habilidades, experiência profissional e formação acadêmica. O projeto foi desenvolvido com foco em design moderno, interatividade e performance, utilizando apenas tecnologias web nativas (HTML, CSS e JavaScript).

[Veja a demonstração ao vivo](https://jonnathanriquelmo.github.io/)

---

## Sumário

- [Funcionalidades](#funcionalidades)
- [Recursos Visuais](#recursos-visuais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Personalização](#personalização)
- [Licença](#licença)

---

## Funcionalidades

- **Design Responsivo**: Totalmente adaptável a diferentes tamanhos de tela, de desktops a dispositivos móveis.
- **Tema Claro/Escuro**: Permite ao usuário alternar entre um tema claro e um escuro, com a preferência salva no `localStorage`.
- **Multilíngue (i18n)**: Suporte para Português (pt-BR) e Inglês (en), com o idioma salvo no `localStorage`.
- **Carregamento de Conteúdo Dinâmico**: Todas as informações (experiência, formação, etc.) são carregadas a partir de um único objeto JSON, facilitando a manutenção.
- **Navegação Suave**: Animação de rolagem suave ao navegar pelas seções.
- **Menu Mobile Otimizado**: Menu de navegação especial para dispositivos móveis, com fundo opaco e fechamento automático ao clicar em um link.

## Recursos Visuais

- **Animação de Fundo "Matrix"**: Um efeito de "chuva digital" inspirado no filme *Matrix* foi criado com a API de Canvas, adicionando um toque cyberpunk e dinâmico ao fundo da página.
- **Animações de Entrada**: Elementos aparecem com animações sutis de fade-in e slide-in conforme o usuário rola a página.
- **Elementos Interativos**: Efeitos de hover e foco em botões, links e cards para melhorar a experiência do usuário.
- **Design "Glassmorphism"**: Uso de transparência e desfoque para criar um efeito de vidro fosco em elementos como o cabeçalho e os cards.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e moderna.
- **CSS3**: Estilização avançada com:
  - **Variáveis CSS**: Para fácil gerenciamento de temas e cores.
  - **Flexbox e Grid Layout**: Para criação de layouts complexos e responsivos.
  - **Animações e Transições**: Para interatividade e feedback visual.
- **JavaScript (Vanilla)**: Todo o dinamismo do site é construído com JavaScript puro, sem a necessidade de frameworks ou bibliotecas externas.
  - **DOM Manipulation**: Para criar e atualizar elementos da página dinamicamente.
  - **Fetch API**: Para carregar dados (embora neste projeto os dados estejam em um objeto JSON local).
  - **Canvas API**: Para a animação de fundo "Matrix".
  - **Intersection Observer API**: Para acionar animações de entrada de forma performática.
- **Font Awesome**: Para ícones vetoriais.
- **Google Fonts**: Para tipografia personalizada.

## Estrutura do Projeto

```
/
├── LICENSE
├── README.md
└── index.html
```

- **`index.html`**: O único arquivo que contém toda a estrutura, estilo e lógica da aplicação.
  - **CSS**: O CSS está embutido na tag `<style>` dentro do `<head>`.
  - **JavaScript**: O código JS está embutido na tag `<script>` antes do fechamento do `<body>`.
  - **Dados**: Todas as informações de texto estão centralizadas em um objeto JSON (`jsonData`) dentro do script.
- **`README.md`**: Este arquivo.
- **`LICENSE`**: A licença do projeto.

## Como Executar

Como este é um projeto front-end puro, você pode simplesmente abrir o arquivo `index.html` em qualquer navegador moderno.

Para uma experiência mais próxima de um ambiente de desenvolvimento, você pode usar um servidor local:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/JonnathanRiquelmo/jonnathanriquelmo.github.io.git
    ```
2.  **Navegue até o diretório:**
    ```bash
    cd jonnathanriquelmo.github.io
    ```
3.  **Inicie um servidor local.** Se você tiver o Python instalado, pode usar:
    ```bash
    python -m http.server
    ```
    Ou, se tiver o Node.js, pode usar o pacote `live-server`:
    ```bash
    npx live-server
    ```
4.  **Abra o navegador** e acesse `http://localhost:8000` (ou a porta indicada pelo servidor).

## Personalização

Para personalizar o conteúdo do portfólio, basta editar o objeto `jsonData` dentro da tag `<script>` no arquivo `index.html`. Você pode alterar:

- Informações pessoais (nome, título, descrição).
- Links de redes sociais.
- Experiência profissional.
- Formação acadêmica.
- Habilidades técnicas.
- Informações de contato.
- Traduções de texto.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

# English Version

# Jonnathan Riquelmo - Portfolio

This is the repository for my personal portfolio, a single-page application (SPA) created to showcase my skills, professional experience, and academic background. The project was developed with a focus on modern design, interactivity, and performance, using only native web technologies (HTML, CSS, and JavaScript).

[View the live demo](https://jonnathanriquelmo.github.io/)

---

## Table of Contents

- [Features](#features)
- [Visual Features](#visual-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Customization](#customization)
- [License](#license)

---

## Features

- **Responsive Design**: Fully adaptable to different screen sizes, from desktops to mobile devices.
- **Light/Dark Theme**: Allows the user to switch between a light and a dark theme, with the preference saved in `localStorage`.
- **Multilingual (i18n)**: Support for Portuguese (pt-BR) and English (en), with the language saved in `localStorage`.
- **Dynamic Content Loading**: All information (experience, education, etc.) is loaded from a single JSON object, making maintenance easy.
- **Smooth Scrolling**: Smooth scrolling animation when navigating through sections.
- **Optimized Mobile Menu**: A special navigation menu for mobile devices, with an opaque background and auto-closing on link clicks.

## Visual Features

- **"Matrix" Background Animation**: A "digital rain" effect inspired by the movie *The Matrix* was created with the Canvas API, adding a dynamic and cyberpunk touch to the page background.
- **Entry Animations**: Elements appear with subtle fade-in and slide-in animations as the user scrolls the page.
- **Interactive Elements**: Hover and focus effects on buttons, links, and cards to enhance the user experience.
- **"Glassmorphism" Design**: Use of transparency and blur to create a frosted glass effect on elements like the header and cards.

## Technologies Used

- **HTML5**: Semantic and modern structure.
- **CSS3**: Advanced styling with:
  - **CSS Variables**: For easy management of themes and colors.
  - **Flexbox and Grid Layout**: For creating complex and responsive layouts.
  - **Animations and Transitions**: For interactivity and visual feedback.
- **JavaScript (Vanilla)**: All site dynamism is built with pure JavaScript, without the need for external frameworks or libraries.
  - **DOM Manipulation**: To dynamically create and update page elements.
  - **Fetch API**: To load data (although in this project, the data is in a local JSON object).
  - **Canvas API**: For the "Matrix" background animation.
  - **Intersection Observer API**: To trigger entry animations performantly.
- **Font Awesome**: For vector icons.
- **Google Fonts**: For custom typography.

## Project Structure

```
/
├── LICENSE
├── README.md
└── index.html
```

- **`index.html`**: The single file containing the entire structure, style, and logic of the application.
  - **CSS**: The CSS is embedded in the `<style>` tag within the `<head>`.
  - **JavaScript**: The JS code is embedded in the `<script>` tag before the closing `<body>`.
  - **Data**: All text information is centralized in a JSON object (`jsonData`) within the script.
- **`README.md`**: This file.
- **`LICENSE`**: The project license.

## How to Run

As this is a pure front-end project, you can simply open the `index.html` file in any modern browser.

For an experience closer to a development environment, you can use a local server:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JonnathanRiquelmo/jonnathanriquelmo.github.io.git
    ```
2.  **Navigate to the directory:**
    ```bash
    cd jonnathanriquelmo.github.io
    ```
3.  **Start a local server.** If you have Python installed, you can use:
    ```bash
    python -m http.server
    ```
    Or, if you have Node.js, you can use the `live-server` package:
    ```bash
    npx live-server
    ```
4.  **Open your browser** and go to `http://localhost:8000` (or the port indicated by the server).

## Customization

To customize the portfolio content, simply edit the `jsonData` object within the `<script>` tag in the `index.html` file. You can change:

- Personal information (name, title, description).
- Social media links.
- Professional experience.
- Academic background.
- Technical skills.
- Contact information.
- Text translations.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.