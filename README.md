# Challenge Softtek - Projeto React + Vite

Este projeto é uma aplicação React impulsionada pelo Vite, proporcionando um ambiente de desenvolvimento rápido e otimizado. A configuração inclui suporte para autenticação do Google Cloud, integração com APIs e ESLint para garantir a qualidade do código.

## Funcionalidades

- **Integração com Vite**: Utiliza Vite como ferramenta de build, proporcionando um ambiente de desenvolvimento extremamente rápido.
- **React**: Integrado com a versão mais recente do React para construir interfaces de usuário interativas.
- **ESLint**: Regras de linting configuradas para aplicar padrões de código e garantir a manutenibilidade.
- **Integração com Google Cloud**: Inclui dependências do Google Cloud para autenticação local e interação com APIs de forma fácil.

## Principais Dependências

- **React**: Versão 18.x para a construção da interface do usuário.
- **React Router DOM**: Versão 6.x para roteamento no lado do cliente.
- **gapi-script**: Facilita a integração com a biblioteca de cliente da API do Google.
- **@google-cloud/local-auth**: Permite autenticação local segura com os serviços do Google Cloud.
- **googleapis**: Biblioteca oficial da API do Google para Node.js.

## Dependências de Desenvolvimento

- **Vite**: Fornece início rápido do servidor, HMR (Hot Module Replacement) e builds otimizadas.
- **ESLint**: Garante a qualidade do código através da aplicação de regras de linting padrão.
- **@vitejs/plugin-react**: Plugin oficial do Vite para suporte ao React, incluindo o Fast Refresh.
- **Suporte a TypeScript**: Inclui os tipos do TypeScript para React e React DOM.

## Como Começar

1. **Clone o repositório**:
   ```bash
   git clone <repo-url>
   cd challenge-softtek
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Build para produção**:
   ```bash
   npm run build
   ```

5. **Visualize o build de produção**:
   ```bash
   npm run preview
   ```

6. **Execute o lint no código**:
   ```bash
   npm run lint
   ```

## Autenticação e Integração com APIs

Este projeto integra serviços de API do Google usando os pacotes `gapi-script` e `@google-cloud/local-auth`. Certifique-se de ter suas credenciais do Google Cloud e chaves de API configuradas corretamente no seu ambiente para autenticar e acessar os serviços do Google.

### Configurando a Autenticação com o Google Cloud

1. Siga o [Guia de Autenticação do Google Cloud](https://cloud.google.com/docs/authentication/getting-started) para gerar e gerenciar suas chaves de API.
2. Certifique-se de configurar corretamente a autenticação local usando `@google-cloud/local-auth`.

## Vite + React

Este projeto está configurado para utilizar o Vite com React. O Vite proporciona uma experiência de desenvolvimento fluida com HMR instantâneo, builds otimizadas e inicialização rápida do servidor.

Para mais detalhes, confira a [documentação do Vite](https://vitejs.dev/guide/) e a [documentação do React](https://reactjs.org/).

## Configuração do ESLint

O projeto inclui uma configuração do ESLint para garantir os padrões de codificação e as melhores práticas em projetos React. Ele utiliza os seguintes plugins:

- **eslint-plugin-react**: Aplica boas práticas em componentes React.
- **eslint-plugin-react-hooks**: Valida o uso correto dos hooks do React.

Para rodar o linter, utilize o seguinte comando:

```bash
npm run lint
```

## Autor

Eduardo Fronza e João Trein
