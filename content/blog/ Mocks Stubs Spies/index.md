---
title:  Mocks, Stubs e Spies
date: "2024-02-21"
description: como eles incentivam o teste com base em verificação de comportamento e como a comunidade ao seu redor os usa para desenvolver um estilo diferente de teste.
---

### A Diferença entre Mocks, Stubs e Spies em Testes de Software

No mundo do desenvolvimento de software, especificamente na área de testes, é essencial entender as diferenças entre Mocks, Stubs e Spies. Essas ferramentas são utilizadas para simular o comportamento de componentes externos ou internos de um sistema, permitindo que os desenvolvedores testem partes do código isoladamente. Vamos explorar cada uma dessas técnicas e ver como elas podem ser aplicadas em Node.js.

#### Mocks

Mocks são objetos que simulam o comportamento de objetos reais de maneira controlada. Eles são usados para testar interações entre objetos, onde você pode pré-definir resultados de métodos específicos, verificar se certos métodos foram chamados, quantas vezes foram chamados e com quais parâmetros. Os Mocks são particularmente úteis em testes de unidade onde a peça de código em teste interage com um componente externo ou uma classe que é difícil de instanciar (por exemplo, uma conexão de banco de dados).

**Exemplo em Node.js:**

Utilizando a biblioteca `jest` para criar um Mock:

```javascript
// UserService.test.js
const UserService = require('./UserService');
const UserRepository = jest.mock('./UserRepository'); // Mock da UserRepository

test('deve criar um usuário', () => {
  const user = { nome: 'Novo Usuário' };
  UserRepository.create.mockResolvedValue(user); // Define o comportamento mockado
  
  const userService = new UserService(UserRepository);
  await expect(userService.createUser(user)).resolves.toEqual(user);
  
  expect(UserRepository.create).toHaveBeenCalledWith(user); // Verifica a chamada do método mockado
});
```

#### Stubs

Stubs são objetos que também simulam os comportamentos de objetos reais, mas de maneira mais simples que os Mocks. Eles são usados para fornecer respostas pré-definidas a chamadas de métodos, sem necessariamente verificar como ou quantas vezes são chamados. Stubs são úteis para simular partes de um sistema que ainda não foram implementadas ou para substituir partes que seriam muito lentas ou difíceis de usar em um teste (como chamadas de API externas).

**Exemplo em Node.js:**

Utilizando a biblioteca `sinon` para criar um Stub:

```javascript
// paymentService.test.js
const sinon = require('sinon');
const PaymentService = require('./PaymentService');
const PaymentGateway = require('./PaymentGateway');

test('deve processar o pagamento', () => {
  const stub = sinon.stub(PaymentGateway, 'charge').returns(true); // Stub do método charge
  
  const paymentService = new PaymentService(PaymentGateway);
  const result = paymentService.processPayment(100);
  
  expect(result).toBe(true);
  stub.restore(); // Limpa o stub
});
```

#### Spies

Spies são semelhantes aos Mocks, mas são usados principalmente para coletar informações sobre como funções são chamadas. Eles podem registrar quantas vezes uma função foi chamada, com quais argumentos e quais valores foram retornados. Diferente dos Mocks, os Spies não alteram o comportamento das funções; eles apenas "espionam" as chamadas existentes.

**Exemplo em Node.js:**

Utilizando `jest` para criar um Spy:

```javascript
// loggerService.test.js
const loggerService = require('./loggerService');
const app = require('./app');

jest.spyOn(loggerService, 'log'); // Spy no método log

test('deve logar mensagens', () => {
  app.doSomething();
  
  expect(loggerService.log).toHaveBeenCalledWith('doSomething foi chamado');
});
```

### Conclusão

Entender as diferenças entre Mocks, Stubs e Spies é fundamental para criar testes eficazes e eficientes. Cada um desses métodos tem seu lugar dependendo do que você precisa testar. Mocks são ideais para testar interações e comportamentos, Stubs são ótimos para simular respostas de dependências externas, e Spies são perfeitos para observar como as funções são utilizadas sem alterar seu comportamento. No Node.js, bibliotecas como `jest` e `sinon` facilitam a implementação dessas técnicas, permitindo que desenvolvedores escrevam testes mais robustos e confiáveis.