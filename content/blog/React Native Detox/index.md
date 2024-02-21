---
title: Teste E2E com React Native, Detox e GraphQL
date: "2024-02-21"
description: React Native conectando com um back-end GraphQL em testes de integração. Uma breve visão geral alguns exemplos concretos de testes.
---

**React Native** é um framework de código aberto criado pelo Facebook que permite o desenvolvimento de aplicativos para iOS e Android usando JavaScript e React. A principal vantagem do React Native é a capacidade de escrever o código uma vez e executá-lo em ambas as plataformas, o que pode economizar significativamente tempo e recursos durante o desenvolvimento de aplicativos. Com o React Native, os desenvolvedores podem aproveitar a rica biblioteca de componentes de interface do usuário do React e seu sistema de atualização eficiente para criar aplicativos que se sentem nativos em cada plataforma.

**Detox** é uma solução de teste end-to-end (E2E) para aplicativos móveis, desenvolvida especificamente para trabalhar com tecnologias como React Native. Detox visa proporcionar uma forma confiável e eficiente de automatizar os testes do usuário em um ambiente real de aplicativo. Ao contrário de outras soluções de teste que podem ser lentas ou propensas a flakiness (testes que falham de forma intermitente sem uma causa clara), Detox foi projetado para ser rápido e consistente, reduzindo a flakiness através da sincronização automática entre o código de teste e o aplicativo. Isso significa que Detox espera que as operações no aplicativo sejam concluídas antes de prosseguir com o teste, o que ajuda a garantir que os testes sejam tanto precisos quanto confiáveis.

A integração entre React Native e Detox é natural, pois ambos visam simplificar e melhorar o processo de desenvolvimento de aplicativos móveis. Enquanto o React Native foca na criação de aplicativos com uma base de código única para várias plataformas, Detox oferece uma ferramenta robusta para testar esses aplicativos de forma eficaz. Usar Detox em projetos React Native pode ajudar a garantir que os aplicativos não só funcionem bem em diferentes dispositivos e plataformas, mas também ofereçam uma experiência de usuário de alta qualidade, graças a testes E2E automatizados e confiáveis.

> React Native conectando com um back-end GraphQL em testes de integração. Uma breve visão geral alguns exemplos concretos de testes.

# **Por que precisamos de testes de integração?**

Quando nossa equipe começou a criar um aplicativo React Native, sabíamos que precisaríamos de cobertura das principais jornadas do usuário no aplicativo para garantir que as partes móveis complexas do aplicativo (como autenticação ou autorização) estivessem funcionando conforme o esperado.
Conjuntos de testes robustos são ferramentas necessárias para o trabalho diário de um engenheiro de software. Eles ajudam a fornecer a garantia de que o aplicativo está funcionando conforme o esperado, eles podem conduzir o código que escrevemos e podem automatizar o que, de outra forma, seria um teste manual tedioso.
Testes de ponta a ponta, ou testes de integração, estão no topo da famosa [pirâmide de testes](https://martinfowler.com/articles/practical-test-pyramid.html) ágeis. Como eles podem levar muito tempo para serem executados e podem exigir mais poder de processamento, eles geralmente testam jornadas fundamentais, ou caminhos felizes, em um aplicativo. Enquanto os testes de unidade podem usar [Mocks, Stubs, and Spies](https://dev.to/danimal141/the-difference-between-mocks-stubs-and-spies-11k9) para replicar o comportamento real da estrutura em torno do código em teste, os testes de integração usarão as peças "reais" do quebra-cabeça para garantir que tudo esteja conversando com todo o resto corretamente.

# **Web vs Móvel**

Descobrimos rapidamente que o teste de integração em dispositivos móveis funciona de forma bem diferente de testes semelhantes para aplicativos baseados na Web:

- Os testes devem ser executados em uma instância de um dispositivo simulado. Isso significa criar e executar uma versão do aplicativo em um simulador, o que é demorado e precisa de um pouco de trabalho para configurar.
- Há um pouco de desleixo que é introduzido por causa disso - sincronizar os testes com o aplicativo pode ser complicado.
- É um ciclo de feedback muito lento. Criar e executar os testes localmente ou em CI pode levar de 20 a 30 minutos.
- Normalmente, os testes de integração seriam executados automaticamente através do pipeline de CI, mas construir e executar os emuladores na nuvem seria caro!
- Não há uma grande quantidade de documentação ou recursos por aí.

Esse último ponto é por isso que queremos compartilhar este post com a comunidade, caso ele possa ajudar qualquer colega desenvolvedor móvel :)

# **A abordagem**

Existem duas ferramentas principais para usar para testes de integração móvel — [Appium](https://appium.io/docs/en/about-appium/intro/) e [Detox](https://github.com/wix/Detox). Appium tem sido em torno do mais tempo, por isso tem uma grande comunidade de desenvolvedores por trás dele, e fornece suporte para [BrowserStack](https://www.browserstack.com/). No entanto, ele não é focado em JavaScript e usa testes de ["caixa preta",](https://en.wikipedia.org/wiki/Black-box_testing) então teríamos problemas para ver o estado interno do aplicativo ao depurar os testes.
Detox, por outro lado, é "caixa cinza", o que significa que teríamos mais informações sobre o aplicativo à medida que ele está testando. Também é menos flakey por causa desse maior controle, e é voltado diretamente para aplicativos React Native.
Como esses testes são caros de executar, decidimos acionar o conjunto de testes no IC manualmente por enquanto. Também decidimos manter o número de testes o mais enxuto possível – isso significa que os principais "caminhos felizes" e qualquer coisa que estejamos preocupados pode não ser suficientemente coberta por testes de unidade.

# **A implementação**

Então, uma vez que tivéssemos o básico decidido, precisávamos descobrir como simular nossa API GraphQL para esses testes conversarem.
Por isso, devemos muita dívida ao pessoal da Software Mansion por este post de 2018, _[Detox your GraphQL](https://blog.swmansion.com/detox-your-graphql-74b58dca3221)._ Seguimos aqui os conceitos básicos de:

- Usar introspecção para criar um esquema fictício
- Executar um servidor Apollo simulado com esse esquema
- Início da chamada no Apollo Server a partir de testes com os simulados para esse teste

Mas sentimos que simplificamos um pouco e valeria a pena compartilhar a maneira como fizemos as coisas.

# **Configuração detox**

Confira o [repositório Detox para obter mais informações](https://github.com/wix/Detox) sobre como configurar o Detox em seu projeto. Depois de tudo configurado, você está pronto para escrever alguns testes.

# **O teste**

Temos uma tela de login simples para a qual queremos testar um caminho feliz:
Quando um usuário abre o aplicativo E digita seu e-mail e senha E clica em Entrar Em seguida, eles devem ser levados para a tela inicial
Em um teste de Detox que se parece um pouco com isto:

```typescript
import { describe, test } from "@jest/globals"
import { by, device, element, expect } from "detox"

describe("authentication", () => {
  test("launching the app and signing in", async () => {
    await device.launchApp({ delete: true })

    await expect(element(by.id("email-input"))).toExist()
    await element(by.id("email-input")).typeText("example@example.com")
    await element(by.id("password-input")).typeText("password123")

    await expect(element(by.id("sign-in-button"))).toExist()
    await element(by.id("sign-in-button")).tap()

    await expect(element(by.text("Home"))).toExist()
  })
})
```

Mas espere – esse "botão de entrada" está fazendo uma chamada para o back-end do GraphQL. Precisamos fornecer um servidor simulado para que ele converse.

# Zombando do GraphQL

Supondo que você já esteja configurado com o [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/), você precisará de um arquivo de ambiente para dizer ao aplicativo qual porta usar. Nós salvamos o nosso em '.env.e2e' e, em seguida, usar [dotenv](https://www.npmjs.com/package/dotenv) e '[process.env](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7)' para encontrar a porta certa em tempo de execução, mas para os fins deste artigo vamos codificá-lo para 'http://localhost:8089/graphql`

Uma das coisas mágicas sobre o Apollo Server é que ele pode gerar automaticamente simulações para definições de tipo. Você só precisa passar um esquema e ele faz o resto. Felizmente o GraphQL também tem sua própria magia – a introspecção. Isso significa que você pode obter tudo o que o servidor precisa saber sobre seu esquema usando [uma consulta de introspecção](https://graphql.org/learn/introspection/). Isso recuperará todos os recursos em seu esquema em um bom formato JSON. Você pode ir em frente e usar uma consulta[ como esta](https://gist.github.com/barsumek/e0c90f1b8dff17944c48d0607f794a64) em seu esquema ([nossa equipe é fã de Insônia](https://insomnia.rest/) para chamadas de API) e salvar a saída em um arquivo. Apenas lembre-se de que esse arquivo precisa ser mantido em sincronia com o esquema remoto, então ele pode ficar confuso se você esquecer de atualizá-lo. [Usamos a útil ferramenta codegen](https://www.graphql-code-generator.com/docs/plugins/introspection) para cuidar disso para nós — ela gera um arquivo JSON e um arquivo 'schema.graphql' mais legível por humanos de todos os nossos tipos.

# Criar um mock ApolloServer

Agora precisamos de uma maneira de iniciar uma instância do 'ApolloServer' usando esse esquema que acabamos de gerar. Essa função será chamada por um arquivo spec, então queremos ser capazes de passar resolvedores personalizados para cada teste e retornar a instância do servidor. Como a Apollo usa o GraphQL Tools para suas zombarias, também queremos [retornar uma 'mockStore'](https://www.graphql-tools.com/docs/mocking#mockstore) que nos permitirá definir campos simulados.
Você pode ver abaixo que configuramos alguns simulados padrão para um valor 'dateTime' que precisamos em outro lugar no aplicativo - isso é apenas um exemplo das coisas divertidas que você pode fazer com simulações no Apollo e definitivamente recomendamos [verificar seus documentos](https://www.apollographql.com/docs/apollo-server/testing/mocking/#default-mock-example).

```typescript
import { ApolloServer } from "apollo-server"
import {
  addMocksToSchema,
  createMockStore,
  IMockStore,
} from "@graphql-tools/mock"
import { IResolvers } from "@graphql-tools/utils"
import { buildClientSchema } from "graphql"
import * as introspectedSchema from "../graphql/introspection.json"

const PORT = process.env.LOCAL_SERVER_GRAPHQL_API_PORT

const DEFAULT_MOCKS = {
  ISO8601DateTime: () => new Date().toUTCString(),
}

export type MockServerContext = {
  server: ApolloServer
  mockStore: IMockStore
}

export async function startMockServer(
  resolvers?: IResolvers | ((store: IMockStore) => IResolvers)
): Promise<MockServerContext> {
  const schema = buildClientSchema(introspectedSchema as any)

  const mockStore = createMockStore({
    schema,
    mocks: DEFAULT_MOCKS,
  })

  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema,
      store: mockStore,
      resolvers,
      preserveResolvers: true,
    }),
  })

  await server.listen(PORT)

  return { server, mockStore }
}
```

# Use o ApolloServer mock em nosso teste

Agora podemos chamar a função 'startMockServer' do nosso teste com simulações personalizadas e recuperar o 'mockServerContext'.

```typescript
import { afterAll, beforeAll, describe, test } from "@jest/globals"
import { by, device, element, expect } from "detox"
import { ApolloServer } from "apollo-server"

import { startMockServer } from "../mockServer"

describe("authentication", () => {
  let mockServer: ApolloServer

  beforeAll(async () => {
    mockServer = await startMockServer({
      UserAuthenticatePayload: () => ({
        isAuthenticated: true,
        token: "example-token",
      }),
      User: () => ({ id: "123", firstName: "Duggee" }),
    })
  })

  afterAll(() => mockServer.stop())

  test("launching the app and signing in", async () => {
    await device.clearKeychain()
    await device.launchApp({ delete: true })

    await expect(element(by.id("email-input"))).toExist()
    await element(by.id("email-input")).typeText("example@example.com")
    await element(by.id("password-input")).typeText("password123")

    await expect(element(by.id("sign-in-button"))).toExist()
    await element(by.id("sign-in-button")).tap()

    await expect(element(by.text("Hello Duggee"))).toExist()
  })
})
```

Quando chamamos 'startMockServer' estamos passando um objeto com alguns resolvedores fictícios para os campos que este teste está usando, apenas o suficiente para o código do lado do cliente seguir feliz. Todos os resolvedores que não forem especificados serão resolvidos para cadeias de caracteres padrão.

Observe que no resolvedor para 'exampleUserQuery' estamos chamando 'get' na loja para dizer qual usuário recuperar e, mais tarde, estamos chamando 'set' para definir os campos personalizados desse usuário. Isso ocorre porque os resolvedores não podem ser usados para substituir simulações. Você pode ler mais sobre o 'mockStore' nos [documentos do GraphQL Tools](https://www.graphql-tools.com/docs/mocking#mockstore).
