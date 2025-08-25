# Landing Page - Dra. Laenne Valentim

Este repositório contém o código-fonte da landing page desenvolvida para a Dra. Laenne Valentim, médica especialista em diagnóstico e tratamento de Autismo e TDAH. O projeto foi construído com foco em performance, design profissional e otimização para conversão, seguindo as melhores práticas de marketing digital.

---

## ✨ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

-   **[React](https://reactjs.org/)**: Biblioteca JavaScript para a construção da interface de usuário.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código, aumentando a robustez e a manutenibilidade.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para a criação de designs customizados de forma rápida e eficiente.
-   **[Create React App](https://create-react-app.dev/)**: Ambiente de desenvolvimento configurado para aplicações React.

---

## 📂 Estrutura do Projeto

A estrutura de pastas principal do projeto está organizada da seguinte forma:

```
landing-page-laenne/
├── .gitignore
├── node_modules/
├── public/
│   ├── index.html
│   ├── laene.jpg
│   ├── laene2.jpg
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── CtaButton.tsx
│   │   │   ├── Icons.tsx
│   │   │   └── types.ts
│   │   ├── About.tsx
│   │   ├── CtaSection.tsx
│   │   ├── ExitIntentModal.tsx
│   │   ├── Faq.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Testimonials.tsx
│   │   └── VideoSection.tsx
│   ├── data/
│   │   └── content.ts
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## 🚀 Instalação e Execução

Para rodar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

-   **[Node.js](https://nodejs.org/)**: Versão 16.x ou superior.
-   **npm**: Gerenciador de pacotes (geralmente instalado junto com o Node.js).

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/NovakBraido/Laene-Landing-Page/
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd landing-page-laene
    ```

3.  **Instale as dependências:**
    Este comando irá baixar todas as bibliotecas listadas no `package.json` para a pasta `node_modules`.
    ```bash
    npm install
    ```

4.  **Execute o projeto em modo de desenvolvimento:**
    Este comando iniciará um servidor local (geralmente em `http://localhost:3000`) e abrirá o site no seu navegador. A página será recarregada automaticamente sempre que você fizer uma alteração no código.
    ```bash
    npm start
    ```

---

## 📜 Scripts Disponíveis

Neste projeto, você pode rodar os seguintes scripts:

-   `npm start`: Executa o aplicativo em modo de desenvolvimento.
-   `npm run build`: Gera a versão de produção otimizada do seu site na pasta `build`. É esta pasta que você deve usar para fazer o deploy em serviços como Netlify ou Vercel.

---

## 🌐 Deploy

Para colocar o site no ar, gere a versão de produção com `npm run build` e faça o upload da pasta `build` para um serviço de hospedagem de sites estáticos, como:

-   [Vercel](https://vercel.com)
-   [Netlify](https://www.netlify.com)

---

## 👨‍💻 Autor

Desenvolvido por um estudante de Análise e Desenvolvimento de Sistemas (ADS), amante de desenvolvimento web.

