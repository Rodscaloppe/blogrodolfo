---
title: Teste de Contrato. O que é e como usar em JavaScript
date: "2024-02-12"
description: uma técnica de teste de software que garante que diferentes partes de um sistema
---

## O que é

Um teste de contrato é um tipo de teste que verifica se o **consumidor** (sua aplicação) e o **provedor** (uma API, por exemplo) estão em conformidade com um contrato pré-definido. Esse contrato define os endpoints da API, a estrutura das requisições e respostas, e outros aspectos da comunicação entre o consumidor e o provedor.
O teste de contrato é uma técnica de teste de software que garante que diferentes partes de um sistema, como um cliente e um servidor, estejam em conformidade com um contrato acordado. O contrato define as expectativas de comunicação entre as partes, incluindo:

- Endpoints da API
- Estrutura das requisições e respostas
- Códigos de status
- Cabeçalhos
- Corpo da mensagem

### Benefícios dos Testes de Contrato

- **Detecção Precoce de Erros de Integração:** Permite identificar problemas de integração assim que ocorrem, facilitando a correção antes que afetem outros sistemas.
- **Automação e Continuidade:** Facilita a automação dos testes em pipelines de CI/CD, contribuindo para a entrega contínua.
- **Documentação Viva:** Serve como uma forma de documentação viva que especifica como os serviços interagem.

### Ferramentas para Teste de Contrato em JavaScript

Algumas ferramentas populares para realizar testes de contrato em projetos JavaScript incluem:

- **Pact:** É uma das ferramentas de teste de contrato mais conhecidas que suporta várias linguagens de programação, incluindo JavaScript. Pact permite testar a interação entre serviços de consumidores e provedores de forma isolada, garantindo que ambos atendam ao contrato definido.
- **Dredd:** Especialmente útil para testar APIs REST, Dredd compara a descrição da API em formato de documentação, como OpenAPI (anteriormente conhecido como Swagger), com sua implementação real.
- **Postman:** Embora seja mais conhecido como uma ferramenta para desenvolvimento e teste manual de APIs, o Postman também pode ser usado para testes de contrato automatizados através de scripts.

## Schema

Em testes de contrato, o "schema" refere-se à especificação formal da estrutura de dados esperada por uma API ou outro componente de software. Essa especificação inclui detalhes sobre os tipos de dados, formatos, campos obrigatórios e opcionais, restrições e outras regras que os dados devem seguir para serem considerados válidos. O schema atua como o "contrato" entre diferentes partes de um sistema, estabelecendo claramente como a informação deve ser formatada e transmitida.

### Importância do Schema em Testes de Contrato

- **Validação:** O schema é usado para validar se os dados enviados e recebidos em chamadas de API estão corretos e completos. Por exemplo, um schema pode definir que uma resposta de API deve incluir um campo `id` que é um número inteiro e um campo `name` que é uma string. A validação contra o schema assegura que esses campos estão presentes e corretamente formatados.
- **Documentação:** O schema serve como documentação para desenvolvedores, facilitando o entendimento de como interagir com uma API ou componente. Ele descreve o formato esperado dos dados, tornando mais fácil para os desenvolvedores que estão integrando serviços saberem o que esperar e como estruturar suas requisições e respostas.
- **Automação de Testes:** Em testes de contrato automatizados, o schema é frequentemente utilizado para verificar automaticamente se as interações entre serviços cumprem com o contrato definido. Ferramentas de teste podem usar o schema para gerar dados de teste, simular requisições e validar respostas de API.

### Como o Schema é Usado

O schema pode ser definido em vários formatos, dependendo das ferramentas e tecnologias utilizadas. Alguns formatos comuns incluem:

- **JSON Schema:** Uma linguagem de schema poderosa para validar a estrutura de documentos JSON. É amplamente usada em APIs RESTful para descrever o formato esperado das requisições e respostas.
- **XML Schema (XSD):** Usado para definir a estrutura e regras de validação para documentos XML. É similar ao JSON Schema, mas para XML.
- **OpenAPI (Swagger):** Uma especificação para arquivos JSON ou YAML que descrevem APIs RESTful. O OpenAPI inclui definições de schema para as requisições e respostas de API, além de detalhes sobre endpoints, métodos HTTP, códigos de status, e mais.
- **Protocol Buffers (Protobuf):** Uma linguagem de descrição de interface do Google que especifica a estrutura de dados que será serializada/deserializada.

### Exemplo de JSON Schema

Aqui está um exemplo simples de um JSON Schema que define o formato esperado para uma resposta de API que retorna informações do usuário:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    }
  },
  "required": ["id", "name", "email"]
}
```

Este schema define que a resposta deve ser um objeto contendo três campos obrigatórios: `id` (um inteiro), `name` (uma string), e `email` (uma string que deve estar no formato de um e-mail).

Testes de contrato utilizam esses schemas para assegurar que os dados trocados entre sistemas estejam em conformidade com o contrato acordado, facilitando a integração e reduzindo a probabilidade de falhas causadas por incompatibilidades de dados.

# Teste de Contrato com Playwright

Criar um teste de contrato usando Playwright envolve algumas etapas e conceitos que precisam ser esclarecidos. Playwright é uma ferramenta de automação de navegador que permite a simulação de interações do usuário com a web, principalmente para fins de teste de UI (Interface do Usuário). Um teste de contrato, por outro lado, geralmente se refere a validar a comunicação e o contrato entre diferentes serviços ou componentes de um sistema, como APIs.

Embora o Playwright seja primariamente focado em testes de interface do usuário, você pode usá-lo para testar o contrato de uma API de maneira indireta, verificando se a UI se comporta conforme esperado em resposta a diferentes respostas da API. No entanto, para testes de contrato de API mais diretos, ferramentas como Postman, REST-assured (para projetos Java), ou supertest (para projetos Node.js) podem ser mais adequadas
Se o objetivo é integrar testes de contrato no fluxo de trabalho de testes de UI com Playwright, uma abordagem possível é mockar as chamadas de API para retornar diferentes respostas e usar o Playwright para verificar se a UI se comporta conforme o esperado.

Para criar um teste de contrato usando o Playwright, siga estas etapas:

**1. Defina o Contrato:**

Comece definindo o contrato entre o consumidor (sua aplicação frontend) e o provedor (a API). Isso pode ser feito usando um formato como OpenAPI (Swagger) ou JSON Schema. O contrato define os seguintes aspectos:

- **Endpoints da API:** URLs que o consumidor pode usar para interagir com o provedor.
- **Solicitações:** Estrutura das requisições que o consumidor pode enviar, incluindo métodos HTTP, cabeçalhos e corpo da requisição.
- **Respostas:** Estrutura das respostas que o provedor pode enviar, incluindo códigos de status, cabeçalhos e corpo da resposta.

**2. Instale o Playwright:**

Instale o Playwright e suas dependências:

```bash
npm install --global playwright
```

**3. Crie o Script de Teste:**

Crie um novo arquivo JavaScript que conterá o script de teste do Playwright.

**4. Importe as Bibliotecas:**

Importe as bibliotecas necessárias no script de teste:


```js
const playwright = require("playwright")
const { Pact } = require("@pact-foundation/pact")
```

**5. Crie o Consumidor:**

Crie uma classe que representa o consumidor da API. Essa classe deve ter métodos para enviar requisições para a API e verificar as respostas.

```js
class Consumer {
  constructor(pact) {
    this.pact = pact
  }

  async makeRequest(endpoint, method, body) {
    const response = await this.pact.provider.get(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    return response
  }

  async verifyResponse(response, expectedStatusCode, expectedBody) {
    expect(response.status).toBe(expectedStatusCode)
    expect(response.headers["Content-Type"]).toBe("application/json")
    expect(JSON.parse(response.body)).toEqual(expectedBody)
  }
}
```

**6. Crie o Provedor:**

Crie uma classe que representa o provedor da API. Essa classe deve ter métodos para interceptar requisições e fornecer as respostas predefinidas no contrato.

```js
class Provider {
  constructor(pact) {
    this.pact = pact
  }

  async interceptRequest(endpoint, method, body) {
    const interaction = await this.pact.provider.verify(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    return interaction
  }

  async provideResponse(interaction, expectedStatusCode, expectedBody) {
    await interaction.respondWith({
      status: expectedStatusCode,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expectedBody),
    })
  }
}
```

**7. Execute o Teste:**

Crie uma função que executa o teste de contrato. Essa função deve:

- Criar instâncias do consumidor e do provedor.
- Chamar os métodos do consumidor para enviar requisições para a API.
- Verificar as respostas da API usando os métodos do provedor.

```js
async function runTest() {
  const pact = new Pact({
    consumer: "MyConsumer",
    provider: "MyProvider",
    port: 1234,
  })

  await pact.setup()

  const consumer = new Consumer(pact)
  const provider = new Provider(pact)

  // Teste de endpoint específico
  const endpoint = "/api/users"
  const method = "GET"
  const body = null

  const response = await consumer.makeRequest(endpoint, method, body)
  await provider.verifyResponse(response, 200, {
    // Corpo da resposta esperado
  })

  await pact.finalize()
}

runTest()
```

**8. Verifique os Resultados:**

Após a execução do teste, o Pact gerará relatórios que podem ser usados para verificar se o consumidor e o provedor estão em conformidade com o contrato.

**Observações:**

- Este é um exemplo básico de teste de contrato com Playwright.
- O script de teste pode ser adaptado para diferentes tipos de testes, como testes de API, testes de integração e testes de ponta

**Dicas para Testes de Contrato com Playwright**

- **Uso de Variáveis de Ambiente:** Utilize variáveis de ambiente para configurar URLs de API e outros parâmetros configuráveis. Isso torna seus testes mais flexíveis e fáceis de executar em diferentes ambientes.
- **Validação Detalhada:** Além de verificar se os elementos esperados estão visíveis, considere validar o conteúdo exato desses elementos para garantir que os dados estão sendo exibidos conforme esperado.
- **Testes de Cenários Negativos:** Não se esqueça de testar cenários negativos, como respostas de erro da API, para garantir que sua aplicação lida corretamente com falhas.
- **Modularização:** Organize seus testes em arquivos separados com base em funcionalidades ou componentes da sua aplicação. Isso ajuda a manter seu conjunto de testes organizado e facilita a manutenção.
- **Execução Paralela:** Aproveite a capacidade do Playwright de executar testes em paralelo para acelerar a execução do seu conjunto de testes. Configure adequadamente para evitar conflitos entre testes que podem interferir uns com os outros.

Essas dicas e exemplos devem ajudá-lo a começar a escrever testes de contrato mais avançados usando o Playwright, mesmo que o foco principal dessa ferramenta seja testes de

UI. Lembre-se de que o sucesso dos testes de contrato depende não apenas da ferramenta escolhida, mas também de uma boa compreensão dos contratos de API e de como sua aplicação deve reagir a diferentes respostas.
