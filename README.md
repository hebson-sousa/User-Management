# Gerenciamento de Usuários - Projeto React

Este projeto foi desenvolvido com o intuito de criar uma aplicação web interativa e estilizada que permita o gerenciamento de usuários. A aplicação utiliza React, manipulando estados, props, children e integrando com uma API externa para realizar operações de listagem, adição e exclusão de usuários.

## Funcionalidades

- Listar usuários utilizando a API **JSONPlaceholder**.
- Adicionar novos usuários.
- Excluir usuários existentes.
- Exibir mensagens de sucesso ou erro para cada operação.
- Verificar o status da API (online ou offline).

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação da interface.
- **CSS**: Utilizado para estilização dos componentes.
- **API JSONPlaceholder**: API externa usada para simular operações CRUD com usuários.
- **Hooks React**: Utilização dos hooks `useState` e `useEffect` para gerenciamento de estados e ciclo de vida dos componentes.
- **Async/Await**: Para lidar com operações assíncronas nas requisições HTTP (GET, POST, DELETE).

## Pré-requisitos

Antes de começar, certifique-se de ter o **Node.js** instalado em sua máquina.

## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório do projeto:

   ```bash
   git clone https://github.com/hebson-sousa/User-Management.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd user-management
   ```

3. Instale as dependências necessárias:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Acesse o projeto no navegador através da URL:

   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

- **Header**: Componente de cabeçalho da aplicação.
- **UserForm**: Componente responsável por adicionar novos usuários.
- **UserList**: Componente que exibe a lista de usuários.
- **UserItem**: Componente que representa cada usuário individual.
- **Notification**: Componente para exibir notificações (sucesso/erro).
- **ApiStatus**: Componente para verificar o status da API.
- **Footer**: Componente de rodapé da aplicação.

## Como Funciona

- A aplicação faz uma requisição para a API **JSONPlaceholder** para buscar uma lista de usuários.
- O usuário pode adicionar um novo usuário através do formulário e excluir usuários existentes na lista.
- O status da API é monitorado e exibido no rodapé.

## Autor

Desenvolvido por **Hebson Sousa**.
