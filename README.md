
# Resumé/Portfolio - Jonnathan Riquelmo

Este repositório contém o código-fonte para o meu site pessoal, que funciona como um resumé e portfólio de projetos. O site foi desenvolvido com uma arquitetura simples e eficiente, utilizando HTML, CSS, JavaScript e JSON. A ideia é criar uma página única que seja facilmente acessível, bem organizada e, ao mesmo tempo, profissional.

## Arquitetura e Estrutura 🎨

O design do site foi baseado em uma abordagem moderna, que separa dados, lógica e apresentação, garantindo manutenibilidade e escalabilidade no longo prazo. Aqui estão os principais pontos dessa arquitetura:

- **Manutenibilidade**: O site usa um arquivo JSON para armazenar todos os dados importantes, como informações sobre educação, experiência profissional e links sociais. Isso facilita a atualização do conteúdo sem precisar mexer diretamente no código HTML ou JavaScript.
- **Separação de Responsabilidades**: O modelo de dados (JSON) está totalmente separado da lógica (JavaScript) e da apresentação (HTML/CSS). Isso torna o código mais organizado e de fácil manutenção.
- **Escalabilidade**: A estrutura é flexível, permitindo que novos campos ou seções possam ser adicionados sem grandes alterações no código.

## Implementação Técnica ✨

- **HTML**: A estrutura do site é limpa e semântica, com seções bem definidas para informações pessoais, projetos, educação, experiência profissional e links sociais.
- **JavaScript**: O código JavaScript é modular e eficiente, responsável por carregar os dados do arquivo JSON e manipular a DOM para exibição dinâmica.
- **CSS**: O design é moderno e responsivo, garantindo que o site funcione bem em diferentes dispositivos e tamanhos de tela. Variáveis CSS são usadas para facilitar ajustes de estilo.
- **JSON**: O arquivo JSON organiza todos os dados de forma simples e flexível. Ele é usado para armazenar as informações apresentadas na página, tornando o conteúdo facilmente atualizável.

## Pontos Fortes 🏆

Aqui estão os principais benefícios desse projeto:

1. **Manutenção Simplificada**: Atualizar qualquer informação, como novos projetos ou experiências, requer apenas a edição do arquivo JSON.
2. **Design Responsivo**: O layout do site se adapta bem a diferentes tamanhos de tela, proporcionando uma boa experiência tanto em dispositivos móveis quanto em desktops.
3. **Performance**: Como o site é estático, o carregamento é rápido e eficiente, sem a necessidade de servidores dinâmicos.
4. **Acessibilidade**: A estrutura semântica do HTML facilita o uso de leitores de tela e garante uma boa experiência para pessoas com deficiência.
5. **Visual Moderno**: O design é minimalista, mas profissional, com ênfase em clareza e organização.

## Possíveis Melhorias 🚀

Embora o site já esteja em uma boa forma, há algumas melhorias que podem ser feitas no futuro:

1. **Cache**: Implementar cache para o arquivo JSON pode melhorar a performance offline e reduzir o tempo de carregamento em visitas subsequentes.
2. **Validação de Dados**: Adicionar validação de esquema para o JSON pode garantir que os dados sejam bem formados e evitar erros na exibição.
3. **Loading States**: Implementar estados de carregamento (loading states) para dar um feedback visual ao usuário enquanto os dados estão sendo carregados.

## Arquitetura do Site 🏗️

O site segue a arquitetura **JAMstack** (JavaScript, APIs e Markup), com a seguinte implementação:

- **Markup**: O HTML estático é usado como a estrutura base da página.
- **JavaScript**: O JavaScript manipula a DOM, carrega os dados do arquivo JSON e os insere nas seções apropriadas do HTML.
- **JSON**: O arquivo JSON atua como uma API local, armazenando dados sobre mim, minhas experiências e links sociais.

Além disso, a estrutura do site segue o padrão **MVC** (Model-View-Controller):

- **Model**: O arquivo `data.json` contém os dados utilizados no site.
- **View**: O arquivo `index.html` apresenta os dados e o `styles.css` garante que o layout seja atraente e responsivo.
- **Controller**: O arquivo `script.js` é responsável pela lógica do site, carregando os dados e manipulando a DOM.

## Como Usar 🖥️

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/JonnathanRiquelmo/jonnathanriquelmo.github.io.git
   ```
2. **Abra o arquivo `index.html` em seu navegador** para visualizar o site.

3. **Editar os dados**:
   O conteúdo do site é alimentado pelo arquivo `data.json`. Para adicionar ou atualizar informações (como projetos ou links sociais), basta editar esse arquivo.

4. **Personalize o design**:
   O design é controlado pelo arquivo `styles.css`. Faça ajustes nas variáveis CSS para mudar cores, fontes ou layout conforme desejar.

## Conclusão 💬

Este projeto foi desenvolvido com foco em simplicidade, flexibilidade e manutenibilidade. A escolha de uma arquitetura estática com uso de JSON facilita a atualização do conteúdo e garante uma experiência rápida e fluida para o usuário. A separação de responsabilidades entre os dados, a lógica e a apresentação torna o código mais organizado e escalável.

Agradeço por visitar meu portfólio! Se você tiver qualquer dúvida ou sugestão, fique à vontade para entrar em contato.