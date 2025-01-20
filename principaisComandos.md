# 🎮 Cypress Playground: Seu Laboratório de Testes Automatizados

## 🌟 Introdução
**O que é o Cypress Playground?**

O Cypress Playground é uma aplicação web criada para ensinar automação de testes de maneira prática.

**O que aprenderei usando o Cypress Playground?**

Utilizando o Cypress Playground, você aprenderá casos de uso comuns em automação de testes, com explicações e exemplos detalhados.

**Como posso praticar automação de testes usando o Cypress Playground?**

Você pode praticar lendo o conteúdo de cada seção e tentando implementar os conceitos explicados para testar partes específicas do aplicativo Cypress Playground.

**Lembre-se:**
- A prática leva à perfeição.

## 📝 `describe()` e `it()`
No Cypress, os casos de teste são organizados em uma suíte de testes utilizando duas funções diferentes: `describe()` e `it()` do Mocha.

- `describe()`: Define uma suíte de testes.
  - Primeiro argumento: descrição da suíte de testes (ex: 'Autenticação', 'Busca de Produtos', 'Lista de Usuários').
  - Segundo argumento: uma função callback que contém os casos de teste.

- `it()`: Define um caso de teste individual.
  - Primeiro argumento: descrição do caso de teste (ex: 'login bem-sucedido', 'busca por produto inexistente').
  - Segundo argumento: uma função callback que contém a implementação do teste.

**Exemplo de uma suíte de testes:**
```javascript
describe('Autenticação', () => {
  it('login bem-sucedido', () => {
    // implementação do teste aqui.
  })

  it('logout bem-sucedido', () => {
    // implementação do teste aqui.
  })
})
🔍 cy.visit()
Ao escrever testes automatizados para aplicações web, o primeiro passo é visitar a URL da aplicação sob teste.

Exemplo:

javascript
Copiar código
beforeEach(() => {
  cy.visit('https://exemplo.com')
})
🖱️ .click()
Um dos comandos mais comuns em testes de aplicações web é clicar em um botão para enviar um formulário, por exemplo.

Exemplo:

javascript
Copiar código
cy.get('button[type="submit"]').click();
📝 .type()
Outra tarefa comum em testes de aplicações web é digitar em campos de texto.

Exemplo:

javascript
Copiar código
cy.get('textarea').type('Cypress é incrível!');
✅ .check() e .uncheck()
Às vezes, você precisa marcar (ou desmarcar) uma caixa de seleção.

Exemplo de marcação:

javascript
Copiar código
cy.get('input[type="checkbox"]').check();
Exemplo de desmarcação:

javascript
Copiar código
cy.get('input[type="checkbox"]').uncheck();
🔘 .select()
Para interagir com campos de seleção dropdown, o Cypress oferece o comando .select().

Exemplos de seleção:

javascript
Copiar código
// Seleção pelo conteúdo:
cy.get('select').select('Opção1');

// Seleção pelo valor:
cy.get('select').select('valor1');

// Seleção pelo índice:
cy.get('select').select(0);
📂 .selectFile()
Para selecionar um arquivo em um campo de entrada do tipo arquivo, o Cypress oferece o comando .selectFile().

Exemplo:

javascript
Copiar código
cy.get('input[type="file"]').selectFile('cypress/fixtures/exemplo.json')
📡 cy.intercept(...).as('alias') e cy.wait('@alias')
Uma das funcionalidades mais incríveis do Cypress é sua capacidade de "ouvir" o que está acontecendo no nível de rede.

Exemplo completo:

javascript
Copiar código
cy.intercept('GET', 'https://api.exemplo.com/todos/1').as('getTodo')
cy.contains('button', 'Obter TODO').click();
cy.wait('@getTodo');