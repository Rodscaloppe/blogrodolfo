---
title: Padronização de Teste de Software
date: "2024-02-12"
description: "ligando a etapa de testagem às demais instâncias de sua atuação. Plenamente articulada com a Qualidade"
---

O objetivo deste trabalho é definir padrões que, a médio e longo prazos, melhorem o serviço oferecido aos usuários, e que permitam pensar e planejar sua atuação de modo orgânico, ligando a etapa de testagem às demais instâncias de sua atuação. Plenamente articulada com a Qualidade, foi concebida e desenvolvida tendo em mente a necessidade de desenvolver práticas de gestão que garantam a infraestrutura apropriada e a disponibilidade de sistemas essenciais de TI, e foram calcadas em uma análise das reais necessidades de teste, tendo em vista o objetivo da organização e a natureza do software produzido. A partir do momento em que se estabelece o que as atividades de teste devem atingir na organização. Trabalhar para definir como os objetivos serão atingidos. Como um texto inicial, buscou-se apresentar os conceitos fundamentais de teste de uma forma simples e breve: o objetivo; os procedimentos; o processo; os tipos; os níveis e as técnicas aplicadas à atividade de teste.



## Visão geral

A tarefa de efetuar testes em software foi considerada secundária por muito tempo. Geralmente era vista com o um castigo para o programador, ou como uma tarefa onde não se deveria gastar muito com tempo e investimentos. O tema esteve relegado a segundo plano, e, até alguns anos atrás, não se encontrava muita literatura sobre o assunto. Idealmente, toda permutação possível do software deveria ser testada. Entretanto, isso se torna impossível para a ampla maioria dos casos devido à quantidade impraticável de possibilidades.

**Em uma visão simplificada, a realização do teste envolve:**

A. Selecionar valores para as variáveis de entrada a serem submetidas ao software
em teste (chamados de dados de entrada ou dados de teste). Esta seleção é feita a
partir do conjunto de todos os possíveis valores que podem ser usados para
executar o software, chamado de domínio de entrada do software.

B. Executar o software com os dados de teste, ou seja, informar os valores para as
variáveis de entrada e acionar alguma função no software  

C. Avaliar se a saída produzida corresponde à saída esperada segundo a
especificação do software, isto é, se o comportamento e os valores produzidos
como resultado da execução foram os corretos.

### Plano de Teste

O plano de teste é um documento com uma abordagem sistemática para o teste de sistemas como hardware ou software. Consiste numa modelagem detalhada do fluxo de trabalho durante o processo. Um dos oito documentos descritos na IEEE 829, uma norma que especifica a forma e o conjunto de artefatos no teste de software. 

**Captura os seguintes elementos de informações: **

- A definição das metas e dos objetivos do esforço de teste no escopo da iteração (ou do projeto). 

- A definição dos itens de teste de destino. 

- Uma explicação da abordagem ou estratégia que será utilizada. 

- Os recursos e o planejamento necessários. 

- Os produtos liberados a serem produzidos.

#### Qualidade do software

O teste de software pode ser visto como uma parcela do processo de qualidade de
software. A norma ISO/IEC 9126 relaciona um conjunto de características que devem ser
verificadas em um software para que ele seja considerado um software de qualidade. Vejamos:

| Característica         | Sub-Característica                    | Nível de Suporte                                                                 |
| ---------------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| **Funcionalidade**     |                                       |                                                                                  |
|                        | **Interoperabilidade**                | É capaz de interagir com os sistemas especificados?                              |
|                        | **Conformidade**                      | Está de acordo com normas e convenções previstas em leis e descrições similares? |
| **Confiabilidade**     |                                       |                                                                                  |
|                        | **Tolerância a falhas**               | Qual a reação quando ocorrem falhas?                                             |
|                        | **Recuperabilidade**                  | É capaz de recuperar dados após uma falha?                                       |
|                        | **Maturidade**                        | Qual a frequência das falhas?                                                    |
| **Operacionabilidade** |                                       |                                                                                  |
|                        | **Facilidade de Operação e Controle** | É fácil de operar e controlar?                                                   |
|                        | **Inteligibilidade**                  | É fácil de entender os conceitos utilizados?                                     |
|                        | **Apreensibilidade**                  | Facilidade de Aprendizagem                                                       |
| **Eficiência**         |                                       |                                                                                  |
|                        | **Tempo**                             | Tempo de Resposta e Processamento                                                |
|                        | **Recursos Utilizados**               | Qual recurso utiliza e por quanto tempo?                                         |
| **Manutenibilidade**   |                                       |                                                                                  |
|                        | **Modificabilidade**                  | É fácil modificar e corrigir defeitos?                                           |
|                        | **Estabilidade**                      | Existe grande risco quando se efetuam alterações?                                |
|                        | **Testabilidade**                     | É fácil testar após alterações?                                                  |
| **Portabilidade**      |                                       |                                                                                  |
|                        | **Adaptabilidade**                    | É fácil adaptar a outros ambientes?                                              |
|                        | **Instalabilidade**                   | É fácil instalar em outros ambientes?                                            |
|                        | **Conformidade**                      | Está de acordo com os padrões de portabilidade?                                  |
|                        | **Capacidade de ser substituído**     | É fácil de ser substituído por outro software?                                   |

Além disso, a norma também estabelece os seguintes requisitos de qualidade:

- Descrição do produto compreensível e completa para ajudar o usuário ou comprador em potencial na avaliação da adequação do produto a sua realidade e fornecer informações comerciais;
- Documentação do usuário de fácil compreensão, permitindo uma visão geral do produto e de todas as suas funções, identificando conhecimento necessário para uso da aplicação;
- Identificação do tipo de interface com o usuário: interface gráfica, linha de comando, menu de comandos, janelas, etc.;
- Instruções detalhadas sobre como instalar o produto, caso a instalação possa ser conduzida pelo usuário;
-  Possibilidade de verificar se a instalação foi bem sucedida;
- Especificação de valores-limite para quantidade de registros e dados de entrada, como, por exemplo, precisão de casa decimal;
- Operação normal, mesmo quando os dados informados estão fora dos limites especificados;
- Consistência de vocabulário entre as mensagens e a documentação;
- Função de auxílio (help) sensível ao contexto;
- Mensagens de erro com informações necessárias para solucionar o problema;
- Diferenciação de tipos de mensagem: confirmação, consulta, advertência e erro;
- Clareza e padronização nos formatos de telas de entrada, relatórios e outras entradas e saídas;
- Capacidade de reverter funções de efeito drástico;
- Capacidade de recuperar dados após uma falha de hardware ou software, queda de energia ou erro fatal;
- Alertas claros para o usuário das conseqüências de uma determinada confirmação;
- Identificação dos arquivos utilizados pelo programa;
- Identificação da função do programa que está sendo executada no momento;
- Capacidade de interromper um processamento demorado.



### Tipos, técnicas ou níveis de teste

Após o desenvolvimento de cada unidade do software, é realizado o teste de unidade (ou teste unitário), para identificar defeitos introduzidos nos algoritmos e estruturas de dados dessas unidades. Em geral, o teste de unidade é feito pelo próprio desenvolvedor da unidade. As unidades são então integradas e testadas (teste de integração), para identificar defeitos de interface entre as unidades. Depois de integrado, o software é testado “como um todo”: o teste de sistema é o nível de teste cujos requisitos são derivados da especificação de requisitos funcionais e não funcionais, e é aplicado para verificar se o software e o hardware executam corretamente ou não quando integrados ao ambiente de operação. O teste de aceitação é então conduzido para estabelecer se o sistema satisfaz ou não os critérios de aceitação definidos com o cliente. 

### Técnicas de Teste:

#### Caixa Branca

Também chamado de teste orientado à lógica, a técnica de caixa-branca avalia o comportamento interno do componente de software. São testados os caminhos lógicos através do software, fornecendo casos de teste que põem a prova conjuntos específicos de condições e/ou garante que todos os caminhos independentes dentro de um módulo tenham sido exercitados pelo menos uma vez. Essa técnica trabalha diretamente sobre o código fonte do componente de software para avaliar aspectos tais como: teste de condição, teste de fluxo de dados, teste de ciclos, teste de caminhos lógicos, códigos nunca executados. 

Os aspectos avaliados nesta técnica de teste dependerão da complexidade e da tecnologia que determinarem a construção do componente de software, cabendo portanto avaliação de mais aspectos que os citados anteriormente. O testador tem acesso ao código fonte da aplicação e pode construir códigos para efetuar a ligação de bibliotecas e componentes. Este tipo de teste é desenvolvido analisando o código fonte e elaborando casos de teste que cubram todas as possibilidades do componente de software. Dessa maneira, todas as variações relevantes originadas por estruturas de condições são testadas. 

Um exemplo bem prático desta técnica de teste é o uso da ferramenta livre JUnit para desenvolvimento de classes de teste para testar classes ou métodos desenvolvidos em Java. Também se enquadram nessa técnica testes manuais ou testes efetuados com apoio de ferramentas para verificação de aderência a boas práticas de codificação reconhecidas pelo mercado de software. A aderência a padrões e boas práticas visa principalmente a diminuição da possibilidade de erros de codificação e a busca de utilização de comandos que gerem o melhor desempenho de execução possível. Apesar de muitos desenvolvedores alegarem que não há ganhos perceptíveis com essa técnica de teste aplicada sobre unidades de software, devemos lembrar que, no ambiente produtivo, cada programa pode vir a ser executado milhares ou milhões de vezes em intervalos de tempo pequenos. É na realidade de produção que a soma dos aparentes pequenos tempos de execução e consumo de memória de cada programa poderá levar o software a deixar de atender aos objetivos esperados. A técnica de teste de caixa-branca é recomendada para as fases de teste de unidade e teste de integração.



#### Caixa Preta

Também chamada de teste orientado a dado ou orientado a entrada e saída, a técnica de caixa-preta avalia o comportamento externo do componente de software, sem se considerar o comportamento interno do mesmo. São usados para demonstrar que as funções dos softwares são operacionais, que a entrada é adequadamente aceita e a saída é corretamente produzida; que a integridade das informações externas é mantida. 

Dados de entrada são fornecidos, o teste é executado e o resultado obtido é comparado a um resultado esperado previamente conhecido. Como detalhes de implementação não são considerados, os casos de teste são todos derivados da especificação. 

Quanto mais entradas são fornecidas, mais rico será o teste. Numa situação ideal todas as entradas possíveis seriam testadas, mas na ampla maioria dos casos isso é impossível. Outro problema é que a especificação pode estar ambígua em relação ao sistema produzido, e como resultado as entradas especificadas podem não ser as mesmas aceitas para o teste. Uma abordagem mais realista para o teste de caixa-preta é escolher um subconjunto de entradas que maximize a riqueza do teste. Pode-se agrupar subconjuntos de entradas possíveis que são processadas similarmente, de forma que testar somente um elemento desse subconjunto serve para averiguar a qualidade de todo o subconjunto. 

Por exemplo, em um sistema que aceita um inteiro como entrada, testar todos os casos possíveis pode gerar pelo menos dezenas de milhares de casos de testes distintos. Entretanto, a partir da especificação do sistema, pode-se encontrar um subconjunto de inteiros que maximizem a qualidade do teste. Depende do propósito do sistema, mas casos possíveis incluem inteiros pares, inteiros ímpares, zero, inteiros positivos, inteiros negativos, o maior inteiro, o menor inteiro. Essa técnica é aplicável a todas as fases de teste – teste unitário, teste de integração, teste de sistema e teste de aceitação. A aplicação de técnicas de teste leva o testador a produzir um conjunto de casos de teste (ou situações de teste). A aplicação combinada de outra técnica de particionamento de equivalência (ou uso de classes de equivalência) permite avaliar se a quantidade de casos de teste produzida é coerente. A partir das classes de equivalência identificadas, o testador construirá casos de teste que atuem nos limites superiores e inferiores destas classes, de forma que um número mínimo de casos de teste permita a maior cobertura de teste possível.

Uma abordagem no desenvolvimento do teste de caixa-preta é o teste baseado na
especificação, de forma que as funcionalidades são testadas de acordo com os requisitos. Apesar de necessário, esse tipo de teste é insuficiente para identificar certos riscos num projeto de software. 

É complementar aos testes de caixa branca, com a finalidade de descobrir tipos/classes de erros. Procura descobrir erro em funções incorretas ou ausentes; interface; estruturas de dados; acesso a bancos de dados externos; desempenho; inicialização e término.



#### Caixa-cinza

A técnica de teste de caixa-cinza é um mesclado do uso das técnicas de caixa-preta e de caixa-branca. Isso envolve ter acesso a estruturas de dados e algoritmos do componente a fim de desenvolver os caso de teste, que são executados como na técnica da caixa-preta. Manipular entradas de dados e formatar a saída não é considerado caixa-cinza pois a entrada e a saída estão claramente fora da caixa-preta. A caixa-cinza pode incluir também o uso de engenharia reversa para determinar por exemplo os limites superiores e inferiores das classes, além de mensagens de erro.



#### Baseada em erros

Consiste em incluir propositalmente algum erro no programa e observar o comportamento do programa com erro, comparando-o com o comportamento do programa original.



### Níveis de Teste:

#### Teste de Unidade

Conhecido como Teste Unitário ou de módulo. É a fase do processo de teste em que se testam as menores unidades de software desenvolvidas (pequenas partes ou unidades do sistema). O alvo são as subrotinas, os métodos dos objetos ou módulo/função ou mesmo pequenos trechos de código. O objetivo é encontrar falhas de funcionamento em uma pequena parte do sistema funcionando independentemente do todo. 

Os testes de unidade são feitos pelo npróprio programador geralmente usando o método caixa branca ou funcional.

- Deve ser escrito pelo mesmo programador que desenvolveu o código a ser testado.

- Serve como documentação do sistema

- Essencial para análise de desempenho
  
  

#### Teste de Integração


Na fase de teste de integração o objetivo é encontrar falhas provenientes da integração interna dos componentes de um sistema verificando se as unidades testadas individualmente executam de forma correta quando integradas. Geralmente os tipos de falhas encontradas são den transmissão de dados. Por exemplo, um componente A pode estar aguardando o retorno de um valor X ao executar um método do componente B; porém, B pode retornar um valor Y, gerando
uma falha. Não faz parte do escopo dessa fase de teste o tratamento de interfaces com outros sistemas (integração entre sistemas). Essas interfaces são testadas na fase de teste de sistema, apesar de, a critério do gerente de projeto, estas interfaces podem ser testadas mesmo antes de o sistema estar plenamente construído.
Tipos de teste de integração:



- Integração Não-Incremental que usa a abordagem Big-Bang;

- Integração Incremental onde o programa é construído e testado em pequenos segmentos;

- Integração Top-Down - de cima para baixo;

- Integração Botton-Up - de baixo para cima;
  

#### Teste de Sistema

O teste de sistema tem como objetivo executar o sistema sob ponto de vista de seu usuário final, varrendo as funcionalidades em busca de falhas. Os testes são executados em condições similares - de ambiente, interfaces sistêmicas e massas de dados - àquelas que um usuário utilizará no seu dia-a-dia de manipulação do sistema. De acordo com a política de uma organização podem ser utilizadas condições reais de ambiente, interfaces sistêmicas e massas de dados. No teste de sistema verifica-se o comportamento requisitado e a validação das funcionalidades especificadas pelo cliente.

- Comparar o sistema com seus objetivos originais

- Enfatizar a análise do comportamento da estrutura hierárquica de chamadas de módulos

- Fase mais complexa, devido à quantidade de informações envolvidas
  

#### Teste de Aceitação

Geralmente, os testes de aceitação são realizados por um grupo restrito de usuários finais do sistema, que simulam operações de rotina do sistema de modo a verificar se seu comportamento está de acordo com o solicitado. O teste baseia-se no método caixa-preta que visa demonstrar a conformidade ou não com os requisitos. Teste formal conduzido para determinar se um sistema satisfaz ou não seus critérios de aceitação e para permitir ao cliente determinar se aceita ou não o sistema. Pode incluir testes funcionais, de configuração, de recuperação de falhas, de segurança e de desempenho.



- Expectativas dos clientes documentadas

- Uso da documentação do usuário



O teste de aceitação é a ação de teste final antes da implantação do software. A meta do teste de aceitação é verificar se o software está pronto e pode ser utilizado pelos usuários, para desempenhar as funções e tarefas para as quais o software foi construído. Há três estratégias comuns para implementar um teste de aceitação. 

São elas:



- Aceitação Formal

- Aceitação Informal ou Teste Alfa

- Teste Beta
  
  

A estratégia selecionada baseia-se geralmente nos requisitos contratuais, nos padrões
organizacionais e corporativos, bem como no domínio do aplicativo.



#### Teste de Aceitação Formal

O teste de aceitação formal é um processo altamente gerenciado e costuma ser uma
extensão do teste do sistema. Os testes são planejados e projetados com o mesmo cuidado e no mesmo detalhe que o teste do sistema. Os casos de teste escolhidos devem ser um subconjunto dos que foram realizados no teste do sistema. É importante não desviar de nenhum dos casos de teste escolhidos. Em muitas organizações, o teste de aceitação formal é totalmente automatizado.

As tarefas e os produtos de trabalho são os mesmos do teste do sistema. Em algumas
organizações, a organização de desenvolvimento (ou o grupo de teste independente), com os representantes da organização do usuário final, executa o teste de aceitação. Em outras organizações, o teste de aceitação é executado inteiramente pela organização do usuário final ou por um grupo objetivo de pessoas por ela escolhidas.


Os benefícios dessa forma de teste são: 



- As funções e os recursos a serem testados são conhecidos.

- Os detalhes dos testes são conhecidos e podem ser medidos.

- Os testes podem ser automatizados, o que permite o teste de regressão.

- O progresso dos testes pode ser medido e monitorado.

- Os critérios de aceitabilidade são conhecidos.
  

As desvantagens incluem:

- São necessários recursos e planejamento significativos.

- Os testes podem ser uma nova implementação dos testes do sistema.

- O teste não pode revelar defeitos subjetivos no software, já que você está procurando apenas os defeitos esperados.
  

#### 

#### Teste de Aceitação Informal ou Alfa

No teste de aceitação informal, os procedimentos para executar o teste não são definidos com tanto rigor como no teste de aceitação formal. As funções e as atividades de negócios a serem exploradas são identificadas e documentadas, mas não há casos de teste específicos para seguir. O testador individual determina o que deve ser feito. Esta abordagem do teste de aceitação não é controlada como teste formal e é mais subjetiva que o tipo formal. O teste de aceitação informal é realizado com mais freqüência pela organização do usuário final.




Os benefícios dessa forma de teste são:

- As funções e os recursos a serem testados são conhecidos.

- O progresso dos testes pode ser medido e monitorado.

- Os critérios de aceitabilidade são conhecidos.

- Serão revelados defeitos mais subjetivos do que no teste de aceitação formal.
  

As desvantagens incluem:

- São necessários recursos, planejamento e recursos de gerenciamento.

- Você não tem controle sobre os casos de teste que são utilizados.

-  Usuários podem se adaptar à forma como o sistema funciona e não encontrar defeitos.

- Os usuários podem se concentrar na comparação do novo sistema com um sistema legado, em vez de procurar defeitos.

- Os recursos do teste de aceitação não estão mais sob o controle do projeto e podem ficar limitados.
  
  
  

#### Teste Beta

O teste beta é o menos controlado das três estratégias de teste de aceitação. No teste
beta, a quantidade de detalhes, os dados e a abordagem adotadas são de inteira escolha do testador individual. Cada testador é responsável por criar o próprio ambiente, selecionar os dados correspondentes e determinar as funções, os recursos ou as tarefas a serem exploradas. Cada um deles é responsável por identificar seus próprios critérios para aceitar, ou não, o sistema em seu estado atual. 

O teste beta é implementado por usuários, geralmente com pouco ou nenhum gerenciamento por parte da organização de desenvolvimento (ou outra que não seja do usuário final). O teste beta é o mais subjetivo de todas as estratégias de teste de aceitação.


Os benefícios dessa forma de teste são:

- O teste é implementado por usuários.

- Há grandes volumes de potenciais recursos de teste.

- Há uma maior satisfação do cliente para aqueles que participam.

- São revelados defeitos mais subjetivos que o teste de aceitação formal ou informal.
  

As desvantagens incluem:

- Talvez você não teste todas as funções ou os recursos. 

- É difícil medir o progresso do teste.

- Os usuários podem se adaptar à forma como o sistema funciona e não encontrar ou relatar defeitos.

- Os usuários podem se concentrar na comparação do novo sistema com um sistema legado, em vez de procurar defeitos.

- Os recursos do teste de aceitação não estão mais sob o controle do projeto e podem ficar limitados.

- Os critérios de aceitabilidade não são conhecidos.
  São necessários recursos com suporte adicional para gerenciar os testadores beta.



#### Teste de Regressão

Essa é uma técnica de teste aplicável a uma nova versão de software ou à necessidade de se executar um novo ciclo de teste durante o processo de desenvolvimento. Consiste em se aplicar, a cada nova versão do software ou a cada ciclo, todos os testes que já foram aplicados nas versões ou ciclos de teste anteriores do sistema. Inclui-se nesse contexto a observação de fases e técnicas de teste de acordo com o impacto de alterações provocado pela nova versão ou ciclo de teste. Para efeito de aumento de produtividade e de viabilidade dos testes, é recomendada a utilização de ferramentas de automação de teste, de forma que, sobre a nova versão ou ciclo de teste, todos os testes anteriores possam ser executados novamente com maior agilidade.


- Teste necessário para assegurar que modificações no programa não causaram novos erros

- Baseado em arquivo de 'log'
  
  

#### Técnicas não funcionais

Outras técnicas de teste existem para testar aspectos não-funcionais do software, como por exemplo de acordo com necessidades de negócio ou restrições tecnológicas. Em contraste às técnicas funcionais mencionadas acima, que verificam a operação correta do sistema em relação a sua especificação, as técnicas não funcionais verificam a operação correta do sistema em relação a casos inválidos ou inesperados de entrada. É uma forma de testar a tolerância e a robustez do software em lidar com o inesperado. 

Uma delas é o uso conjunto de teste de desempenho e teste de carga, que verifica se o
software consegue processar grandes quantidades de dados, e nas especificações de tempo de processamento exigidas, o que determina a escalabilidade do software. O teste de usabilidade é necessário para verificar se a interface de usuário é fácil de se aprender e utilizar. Entre verificações cabíveis estão a relação da interface com conhecimento do usuário, a compreensibilidade das mensagens de erro e a integridade visual entre diferentes componentes. 

Já o teste de confiabilidade é usado para verificar se o software é seguro em assegurar o sigilo dos dados armazenados e processados. O teste de recuperação é usado para verificar a robustez do software em retornar a um estado estável de execução após estar em um estado de falha.



#### Teste de operação

Nessa fase o teste é conduzido pelos administradores do ambiente final em que o sistema ou software entrará em ambiente produtivo. Vale ressaltar que essa fase é aplicável somente a sistemas de informação próprios de uma organização, cujo acesso pode ser feito interna ou externamente a essa organização. Nessa fase de teste devem ser feitas simulações para garantir que a entrada em produção do sistema será bem sucedida. Envolve testes de instalação, simulações com cópia de segurança dos bancos de dados, etc. Em alguns casos um sistema entrará em produção para substituir outro e é necessário garantir que o novo sistema continuará garantindo o suporte ao negócio.



#### Conclusão

A definição de uma padronização de Teste é fundamental para qualquer organização que pretende definir ou aprimorar as suas atividades de teste. Trata-se, portanto, de um primeiro passo importante que servirá de base para definição do processo de teste da organização. Define os objetivos e a visão estratégica em relação ao teste. Portanto, deve estar alinhada com a política de qualidade e com os objetivos de negócios da organização.

Ao se estabelecer uma visão comum sobre o teste para todos os envolvidos com esta atividade, obtém-se um alinhamento das iniciativas para a utilização ou melhoria do processo de teste, tanto no desenvolvimento como na manutenção de software. Recomenda-se, portanto, que a política de teste seja documentada, divulgada e tenha um responsável definido. A definição de indicadores associados aos objetivos do teste permite a avaliação e a melhoria contínua do processo de teste na organização.

Aborda:
objetivos e importância do teste; níveis de qualidade a serem atingidos; nível de independência da equipe de teste; principais responsabilidades; definição em alto nível do processo de teste; e separação entre teste e depuração. A partir do momento em que se estabelece “o quê” as atividades de teste devem atingir na organização – a pode-se trabalhar para definir “como” os objetivos serão atingidos. 
