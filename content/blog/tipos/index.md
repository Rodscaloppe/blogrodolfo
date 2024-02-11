---
title: Diferença entre fases de teste, tipos de teste e formas de execução
date: "2024-02-11"
description: "Diferença entre fases de teste, tipos de teste e formas de execução"
---


# Diferença entre fases de teste, tipos de teste e formas de execução


Hoje em dia há muita confusão quando se fala em **fases de teste, tipos de teste e formas de execução**. Mas existem diferenças entre eles e neste artigo vamos explicar cada um deles.

Se você, assim como eu, já ouviu as frases a seguir várias vezes, então esse artigo é para você!

- “Fulano sabe teste funcional e não automatizado”;
- “desenvolva o teste unitário antes dos funcionais”; 
- “precisamos que os testes sejam 100% automatizados”; 
- “cadê a massa de dados para os testes de contrato?”

## O que são níveis de teste?

Baseado na literatura do **[ISTQB (International Software Testing Qualifications Board)](https://www.istqb.org/)**, os níveis de teste são grupos de atividades de teste que são organizados e gerenciados juntos. Cada nível de teste é uma instância do processo de teste. Eles estão divididos da seguinte maneira:

### **Teste de Unidade**

O Teste de unidade ou de módulo, verifica o funcionamento da menor unidade de um código testável da aplicação, independente da interação dela com outras partes do nosso código. 

![Imagem referente ao conteúdo "tipos de testes", em que aparece ao centro um cubo mágico abrindo uma seta para a esquerda com o desenho de uma nuvem escrito "test double" e outra seta para o lado direito, com o desenho de um cilindro escrito "test double" também](https://lh4.googleusercontent.com/f7Nb3o0bZh-IoldhVwsogO0lvQES6QVBiyTElsP2ZjZVDNyoapEEqIFa-T6iocyYVQWNT5cfRU3LvvTwkbJ3dBdA7yeZSXLcvbeJKvX1UvcJpkKlpOtxXz5Q40Rd7VARzNZpdAi8)

Esse tipo de teste **geralmente é realizado isoladamente do resto do sistema**. Pode utilizar objetos simulados, virtualização de serviços, simuladores e controladores. O teste unitário pode cobrir funcionalidade (por exemplo: correção de cálculos), características não funcionais (por exemplo, busca de vazamentos de memória) e propriedades estruturais (por exemplo: teste de decisão).

Para realizar o **teste de unidade** você deve obrigatoriamente ter acesso ao código que está sendo testado. Esse tipo de teste geralmente é elaborado pelo desenvolvedor que escreveu o código. Testes de unidade são simples e rápidos, mas eles não são suficientes. É importante que eles sejam complementados com outras fases de teste.

### **Teste de integração**

Os **testes de integração são os mais comuns de serem esquecidos** na hora de escrever testes para um projeto. Mesmo testando duas unidades que interagem entre si separadamente, usando mocks, virtualização etc, e concluindo que ambas estão funcionando como esperado. Ainda assim, **é possível que as duas unidades não funcionem bem em conjunto**.

![Gif animado em que a mão de uma pessoa está abrindo a fechadura de uma porta Na parte superior do gif está escrito "Unit test vs Integration test", que em português significa "Teste de unidade x teste de integração"](https://lh5.googleusercontent.com/skR8_I2P0RxTBn-n4O-hc0kHwMNdJJGxbuo91cnzz-HbxLZdkPrUljy7tF268czAIvL50aVxFL4G7RnlYa62iIq5LEvKWcFvKCTRI3Wc2G8zFl3yjTI_db1oTCkNUz1WDh0Ldlb4)

Os testes de integração são mais complicados de desenvolver, manter e mais lentos que os testes de unidade, pois eles **testam funcionalidades inteiras**, muitas vezes com persistência de dados. 

Realizar testes de integração não é testar a lógica das unidades, mas **testar como as diferentes unidades interagem entre si**. Por outro lado, testes de integração são bem mais simples de desenvolver, manter e são bem mais rápidos que os testes de ponta a ponta.

### **Teste do sistema**

O teste de sistema se concentra no **comportamento e nas capacidades de todo um sistema ou produto.** Geralmente considerando as execuções das tarefas de ponta a ponta do sistema e os comportamentos não funcionais exibidos ao executar tais tarefas. 

![](https://lh6.googleusercontent.com/045VtSd12ocBlu7YZ0-U51GtEqpZKu1PpFrxFp2BD-18DmrdC3-cFRRWJkRW9FLWpgfMGGz68m6Pm_uqtarhBnw-nxuIx49S85v30gnG8Z6q8BBwtNDydUoGJBSdcR9LNecaCx14)

O teste do sistema geralmente produz informações que são usadas pelos stakeholders para tomar decisões de liberação. O teste do sistema também pode satisfazer requisitos ou padrões legais e regulatórios. Esse tipo de teste é o mais comum de se implantar, pois simula a experiência do usuário. São, portanto, muito importantes, pois são **os testes mais próximos do que o usuário realmente vai encontrar ao utilizar a aplicação**.

Geralmente esse tipo de teste é realizado no ambiente que antecede o ambiente de produção. O teste de sistema deve focar no comportamento geral, funcional e não funcional, de ponta a ponta do sistema como um todo.

Os testes de sistema agregam muito valor a qualidade do software, mas possuem alguns problemas como, por exemplo:

– São lentos de serem escritos e executados;

– São passíveis de “Flaky Test” (teste com falso negativo no caso de automação);

– Baixo detalhe do erro (Ao encontrar um erro, algumas vezes é difícil saber a origem exata do problema já que esses testes são definidos em um nível muito alto e cada passo pode envolver muitas unidades).

### **Teste de aceite**

O teste de aceite, como o teste do sistema, geralmente se concentra no comportamento e na capacidade de todo um sistema ou produto. Ele pode produzir informações para avaliar a situação do sistema para implantação e uso pelo cliente (usuário final). O teste de aceite também pode satisfazer requisitos, padrões legais ou regulatórios.

Formas comuns de testes de aceite incluem o seguinte:

#### **• Teste de aceite do usuário (UAT)**

Praticamente colocar o sistema em um ambiente controlado para que o usuário da aplicação faça um “TestDrive”. Esta é a hora onde podemos colher informações se o sistema atende aos requisitos e se o usuário consegue executar os processos de negócio com o mínimo de dificuldade, custo e risco.

#### **• Teste de aceite operacional (OAT)**

Esse tipo de teste é focado na equipe de administração do sistema. Realizado em um ambiente controlado, podem incluir testes como backup e restauração, instalação, recuperação de desastres, gerenciamento de usuários, tarefas de manutenção, vulnerabilidade, segurança e teste de performance. 

#### **• Teste de aceite contratual e regulatório**

O teste de aceite contratual é realizado com base nos critérios de aceite de um contrato para desenvolver softwares específicos.

### **Alfa e Beta teste**

O **teste Alfa** é semelhante ao teste de aceite, porém é realizado de uma forma não planejada, disponibilizando o sistema dentro da infraestrutura da empresa que desenvolveu o produto e para um pequeno grupo de pessoas. Essas **pessoas geralmente são membros da organização e também o cliente**. O objetivo é que esse grupo de pessoas deem feedbacks sobre a situação atual em que o sistema se encontra.

Já o **teste Beta** é realizado de forma não planejada e executado por um **grande número de pessoas desconhecidas**. O sistema é executado na infraestrutura dessas pessoas que não possuem nenhuma relação com a equipe ou empresa desenvolvedora. Ele é utilizado como uma forma de aceitação externa possibilitando avaliar o **feedback do mercado**.

## O que são tipos de teste?

Um tipo de teste é um grupo de atividades de teste destinado a testar características específicas de um sistema de software, ou parte de um sistema, com base em objetivos de teste específicos.

A seguir, vamos conhecer os principais tipos de testes.

### **Teste funcional**

O teste funcional de um sistema envolve testes que **avaliam as funções que o sistema deve executar**. Os requisitos funcionais podem ser descritos em produtos de trabalho, como especificações de requisitos, de negócios, épicos, histórias de usuários, casos de uso ou especificações funcionais, podendo ainda não estarem documentados. As funções são **“o que” o sistema deve fazer**.

O projeto e a execução de testes funcionais podem envolver habilidades ou conhecimentos especiais, como o conhecimento específico de um problema de negócios que o software resolve ou o papel específico que o software desempenha.

### **Teste não funcional**

Os testes não funcionais de um sistema avaliam as características de sistemas e de softwares, como usabilidade, eficiência de performance ou segurança. Consulte o [padrão [ISO25010]](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010) para obter uma classificação das características de qualidade do produto de software. O teste não funcional é o teste de **“quão bem” o sistema deve se comportar**.

### **Teste caixa-branca**

O teste caixa-branca é derivado de testes com base na estrutura interna ou na implementação do sistema. A estrutura interna pode incluir código, arquitetura, fluxos de trabalho e fluxos de dados dentro do sistema.

### **Testes relacionados à mudança**

Quando são feitas alterações em um sistema, seja para corrigir um defeito ou por causa de uma funcionalidade nova ou variável, deve-se testar para confirmar se as alterações corrigiram o defeito ou implementaram a funcionalidade corretamente e, principalmente, não causaram consequências adversas imprevistas. 

Para isso é utilizado o **Teste de confirmação** (depois que um defeito é corrigido, o software pode ser testado com todos os casos de teste que falharam devido ao defeito), e o Teste de regressão (o teste de regressão envolve a execução de testes para detectar esses efeitos colaterais indesejados).

## **Tipos de testes e níveis de teste**

É possível executar qualquer um dos **tipos de teste** mencionados acima em qualquer **nível de teste,** mas não é necessário ter todos os tipos de testes representados em todos os níveis.

### Teste manual e automatizado

Agora que já sabemos sobre tipos de teste e fases de teste, podemos falar sobre a forma de execução.

Podemos executar os teste de duas formas, manual ou automatizada.

#### **Teste Manual**

Teste manual significa **testar um aplicativo manualmente por um ser humano**. Um especialista em garantia de qualidade (testador) que executa testes manuais garante que um aplicativo esteja funcionando corretamente seguindo as condições descritas nos casos de teste. 

O testador avalia o design, a funcionalidade e o desempenho do aplicativo verificando vários elementos. Testes manuais são recomendados quando se utilizam testes exploratórios, testes de usabilidade e testes de aceite.

O teste manual é muito útil quando não é possível implementar o teste automatizado. 

Prós:

- O testador pode testar o sistema em condições semelhantes quando o sistema estiver em produção;
- Pode identificar problemas relacionados à aparência visual do aplicativo. Também ajuda a descobrir os problemas de usabilidade. Os testes automatizados não conseguem identificar essas lacunas;
- O teste manual requer baixo investimento, pois não precisa de ferramentas caras ou habilidades de alto nível para ser executado.

Contras:

- São testes muito lentos de serem executados;
- Como há interação 100% humana, a possibilidade de um bug passar despercebido é alta;
- Não é bom para realizar testes de carga e desempenho.

#### **Teste Automatizado**

Teste automatizado significa **desenvolver testes programados para serem executados automaticamente**. Esse tipo de teste compara resultados reais com os resultados esperados. 

Testes automatizados ajudam a saber se o software tem o desempenho esperado ou não. Eles são executados com auxílio de ferramentas, scripts e softwares.

Testes automatizados são recomendados para realizar testes de regressão, testes de carga e testes de performance.

Prós:

- Testes automatizados são mais confiáveis, pois são executados por ferramentas ou scripts;
- São executados com mais velocidade que o teste manual;
- São muito bons para realizar testes de carga e desempenho.

Contras:

- São mais demorados para se desenvolver;
- Tem limitação de ferramenta (para cada tipo e fase de teste é necessário um tipo de ferramenta e conhecimento sobre ela);
- Possui um custo maior, pois, dependendo da automação, você pode precisar de uma infraestrutura adicional para sua execução.
- Incapaz de detectar problemas de usabilidade.

Por que você precisa ser bom com tecnologias de testes? O Zup Decodifica te responde!

## **Pirâmide de teste**

Uma maneira mais visual de exemplificar um pouco sobre as fases de teste e os tipos de teste que cada fase contempla, é a **pirâmide de automação de teste**.

Existem diversas representações da pirâmide de teste, a que vou utilizar é a do [Martin Fowler](https://martinfowler.com/bliki/TestPyramid.html).

![Uma pirâmide coloria em que na parte superior da imagem está escrito "Manual testing" No topo da pirâmide temos "UI", no meio "Service" e na base "unit" Ao lado esquerdo podemos ver uma seta indicando para cima e para baixo, escrito cost; do outro lado, a mesma seta escrito "time"](https://lh5.googleusercontent.com/X-68m7pb9ZTvyya78WrLIwz9331GbhAHFziKDHaW-fXdqAxCMZFjmlWx1GM0TepbuvZn9ARWvotBn05WmWsNznDjxFmkslFab7IKxh8ghhPdM4t-f380m--Hbx4gqejRkYVh1jwZ)

A pirâmide de teste é uma maneira de pensar sobre como diferentes tipos de testes devem ser usados para criar uma estratégia de teste equilibrada. Seu ponto essencial é que você deve ter muito mais testes unitários de baixo nível do que de alto nível executando através de uma GUI.

A **pirâmide de teste** aparece muito quando se fala em teste no Agile. Um problema comum é que as equipes confundem alguns conceitos como testes de ponta a ponta, testes de UI e testes de aceite.

### **Teste de Unidade**

Nesta camada, os testes automatizados de unidade são realizados da mesma forma descrita neste artigo. Porém, nesta fase, a quantidade de testes deve ser maior do que as fases acima da pirâmide.

### **Teste de Serviço**

Neste tipo de divisão, temos a fase de teste de Serviços. Nesta camada são executados todos os testes considerados a nível de serviço (nesta camada são executados alguns tipos de teste como API, Integração e Contrato). Nesta camada os testes podem ser desenvolvidos e executados tanto pelo desenvolvedor, quanto pelo QA.

Abaixo temos alguns tipos de testes que podem ser aplicados a fase de teste de Serviço:

- **Teste de API**

O teste de API está entre a camada de teste unitário e de User Interface (UI) e podem ser automatizados em paralelo com o desenvolvimento. Eles realizam a validação de múltiplos cenários e garantem que o conteúdo do Json de retorno esteja correto.

- **Teste de Contrato**

É um tipo de teste executado na fase de Teste de Serviço. Em um contexto de services e microservices, os testes de contrato verificam a validade dos mocks que representam a simulação das comunicações entre serviço e consumidor. 

Com o decorrer do tempo, podem existir casos em que o provedor precise fazer modificações no seu serviço, seja alterando, adicionado ou apagando dados e dependendo do processo de atualização de API que ele utilize (se não utilizar um padrão de aumentar a versão de API para as alterações por exemplo), os mocks podem ficar obsoletos, causando falsos positivos e fazendo com que grandes incidentes sejam causados em produção.

![Consumer, Contract e Provider](https://lh6.googleusercontent.com/xXMS3pbVSf274F5LYhu5ei_su00JPAg7tzjVjXn0z4rf2A_p1-rL8IeiBiWXX_00A_iItVFx1NKW7UL1GxcHZ-ZRYegL-hccLX_AcDEMjc8FWzRNf2MCap4mLAYcOq88ewqca-2n)

Os testes de contrato (ou testes de contrato de integração) são efetivos, já que comparam principalmente os tipos de dados da comunicação dos endpoints de cliente e provedor com um arquivo de contrato, não se importando com o que ocorre antes e depois disso. 

Se um teste de contrato for quebrado, quer dizer que houve uma mudança do lado do provedor ou as modificações feitas pelo cliente têm um resultado diferente do que era esperado anteriormente.

O teste de contrato tem como objetivo garantir que o conteúdo fornecido não tenha sido modificado. **Podemos dizer que tem a finalidade de validar se o contrato acordado foi ou não quebrado.** Esse teste deve validar se o schema permanece o mesmo, garantindo assim a integridade dos dados na comunicação entre *client/server*.

A essência dos testes de contrato não é afirmar a funcionalidade. O que queremos alcançar é a verificação da semântica. Se o produtor e o consumidor podem se comunicar com sucesso no ambiente de produção.

### **Teste de UI**

Nesta camada são executados os testes automatizados a nível de interface do usuário. Esse tipo de teste simula o comportamento do usuário no sistema.

O testes de alto nível (no topo da pirâmide) é como uma segunda linha de defesa de teste. Se você tiver uma falha em um teste de alto nível, não apenas você tem um bug em seu código funcional, você também tem um teste de unidade que está faltando ou está incorreto. Assim, se aconselha que antes de corrigir um bug exposto por um teste de alto nível, você deve replicar o bug com um teste de unidade. 

### **Manual Testing**

Nesta fase são executados os testes manuais como exploratórios e de aceite. São executados em menor quantidade comparando com as outras fases de teste.

## **Conclusão**

Espero que tenha ficado mais fácil de entender o que é uma fase de teste, tipo de teste e as formas de execução. Relembrando:

- Teste manual é teste manual, já o teste funcional pode ser manual ou automatizado.
- Seu teste unidade (unitário) pode conter um teste funcional.

Para reduzir custo e tempo para conclusão de um projeto com alta qualidade, você não pode depender apenas do teste automatizado. Você precisa de uma combinação certa de testes manuais, testes automatizados e um equilíbrio na distribuição dos tipos de testes nas fases de teste para obter os melhores resultados.

Tenha em mente que você não precisa realizar todos os testes mencionados para o seu projeto. Os testes que você deve executar dependem do tipo de software que você está construindo e outros fatores.