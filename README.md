# banco-web-tests

## Objetivo

Este projeto tem como objetivo demonstrar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress com JavaScript. O foco está na organização do código utilizando Custom Commands e na geração de relatórios automatizados.

## Componentes do Projeto

- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de ações comuns nos testes.
- **cypress-mochawesome-reporter**: Geração de relatórios em HTML dos testes executados.
- **Estrutura de pastas**:
  - `cypress/e2e/`: Scripts de testes automatizados.
  - `cypress/fixtures/`: Dados de teste (fixtures).
  - `cypress/support/commands/`: Implementação dos Custom Commands.
  - `cypress/reports/`: Relatórios gerados após execução dos testes.

## Pré-requisitos

- Node.js instalado.
- Clonar e executar a [API](https://github.com/juliodelimas/banco-api) e a [aplicação WEB](https://github.com/juliodelimas/banco-web).

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/IaraStevani/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução dos Testes

- Para rodar todos os testes em modo headless:
  ```sh
  npm test
  ```
- Para abrir o Cypress em modo interativo:
  ```sh
  npm run cy:open
  ```
- Os relatórios em HTML serão gerados em `cypress/reports/html/index.html`.

## Documentação dos Testes

### Testes Automatizados

- **Login**: Testa login com credenciais válidas e inválidas.
- **Transferência**: Testa transferências válidas e cenários de erro (ex: valor acima de R$5.000,00 sem autenticação).

Os testes estão localizados em:
- [`cypress/e2e/login.cy.js`](cypress/e2e/login.cy.js)
- [`cypress/e2e/transferencia.cy.js`](cypress/e2e/transferencia.cy.js)

### Custom Commands

Os comandos personalizados estão implementados em [`cypress/support/commands/`](cypress/support/commands/):

- [`cy.fazerLoginComCredenciaisValidas`](cypress/support/commands/login.js): Realiza login com usuário e senha válidos.
- [`cy.fazerLoginComCredenciaisInvalidas`](cypress/support/commands/login.js): Realiza login com credenciais inválidas.
- [`cy.verificarMensagemNoToast`](cypress/support/commands/common.js): Verifica mensagens exibidas em toasts.
- [`cy.selecionarOpcaoNaCombobox`](cypress/support/commands/common.js): Seleciona opções em comboboxes pelo label.
- [`cy.realizarTransferencia`](cypress/support/commands/transferencia.js): Executa o fluxo de transferência entre contas.

## Observações

- Certifique-se de que a API e a aplicação web estejam rodando antes de executar os testes.
- Os dados de acesso utilizados nos testes estão em [`cypress/fixtures/credenciais.json`](cypress/fixtures/credenciais.json).

---
Mentoria 2.0 - Automação de Testes com Cypress
