---
title: Testando interfaces com Cypress.io e Circle.ci
date: "2024-02-21"
description: ferramenta valiosa que eleva a qualidade
---

Todos os programadores encontram bugs. Se você não testar seu código, seu projeto terá mais erros ao longo do tempo. Portanto, muitas equipes têm um testador que detecta bugs e os reporta à equipe.

Nos últimos 6 meses temos trabalhado num painel de controle de caixa postal eletrônica para entrega automática de encomendas.
O projeto possui uma arquitetura cliente-servidor complexa construída nos frameworks React e Node.js.

Naquela época, a equipe não tinha um testador e não conseguiu testar o código por conta própria. Isso resultou em um grande número de bugs e na necessidade de gastar tempo em correções e melhorias, e implementamos a plataforma de testes automatizados [Cypress.io](http://cypress.io/) para encontrar e corrigir erros em tempo hábil. Além disso, utilizamos o sistema de integração contínua [CircleCI](https://circleci.com/) .

# Algumas palavras sobre testes

Existem muitos métodos de teste, mas para efeitos deste artigo gostaríamos de nos limitar aos três principais.

![img](/content/blog/cypress/piramide.webp)
_Pirâmide de testes clássica_

- **Os testes unitários** são fáceis de escrever e um projeto deve ter mais deles. Sua finalidade é testar um componente, módulo ou função isoladamente;

- **Os testes** **de integração** exigem muito trabalho. Eles testam como dois ou mais componentes ou módulos interagem entre si;

- **Os testes ponta a ponta (e2e)** verificam o sistema completa e extensivamente. Se encontrarem um erro, significa que um dos outros testes falhou ou está faltando.

# Cypress.io

A plataforma Cypress.io é excelente para testar interfaces de aplicativos web. Sua principal tarefa é verificar como a parte cliente interage com a parte servidor (testes ponta a ponta) e os componentes individuais da página entre si (testes de integração).

![img](/content/blog/cypress/Vantagens%20da%20plataforma.webp)

Vantagens da plataforma

1. Cypress opera na camada de rede e é capaz de gerenciar o tráfego de aplicativos;
2. Facilmente integrado em um projeto;
3. Possui um navegador Google Chrome separado;
4. Combina outros tipos de testes em uma plataforma;
5. Capaz de acessar todos os objetos de página da web no DOM.

Mesmo que você nunca tenha escrito testes antes, você será capaz de descobrir isso graças à [documentação](https://docs.cypress.io/guides/overview/why-cypress.html) clara. Cypress funciona de acordo com um script predefinido.

O algoritmo reflete a sequência usual de comandos. Por exemplo, “Ouça, Cypress. Acesse a página principal do aplicativo, serão exibidos os componentes da página “Autorização”. Você precisa inserir os dados do usuário em dois campos. Eles precisam ser enviados para o servidor, você deve ser redirecionado para a próxima página.” Esta é a aparência de um teste Cypress típico:

![img](/content/blog/cypress/Exemplo%20de%20script%20de%20teste.webp)
_Exemplo de script de teste_

Para demonstrar o Cypress.io em ação, lançamos um aplicativo web React.js simples com a estrutura já implementada. Para fazer isso, siga o [link](https://github.com/Rodscaloppe/cypress-demo) e siga as instruções.

A interface do Cypress possui uma aparência simples, que exibe uma lista de testes que estão localizados no diretório em:

`cypress/integration/examples`

Para desenvolver um script de teste, você precisará colocá-lo neste diretório e, no futuro, o teste poderá ser usado para a finalidade pretendida. Cada um dos casos de teste acima já pode ser executado imediatamente e, para fazer isso, você precisará executar os comandos:

```
clone do git https://github.com/Rodscaloppe/cypress-demo
npm i
npm run cypress
```

A seguinte interface será exibida:

![img](/content/blog/cypress/exemplo%20script.webp)
_Exemplos de script de teste Cypress.io_

Você pode então selecionar e executar todos ou alguns dos testes – uma janela separada do navegador será aberta. Todos os exemplos mostram o sistema interagindo com elementos DOM: usando scripts, o Cypress é capaz de inserir informações automaticamente em campos de texto, limpar dados e clicar em botões. Essas operações podem ser usadas em seu projeto para testar a funcionalidade das páginas. Gravamos um vídeo demonstrando como isso acontece

As respostas do servidor aos dados enviados são rastreadas na guia à esquerda. Se algo deu errado, o Cypress irá reportar: quantos testes foram realizados, qual ação foi realizada e o que está contido nos logs. O Cypress também pode aguardar uma resposta a determinados eventos - por exemplo, enquanto as informações são atualizadas no lado do servidor após o envio de uma solicitação POST.

Como resultado, as informações relevantes serão exibidas:

![img](/content/blog/cypress/pratica.webp)
_Resultado do teste de demonstração Cypress.io_

Cypress funciona com qualquer site e está integrado em frameworks escritos em Javascript: React, Vue, Elm, Angular e outros. Esta é a sua principal vantagem, pela qual a apreciamos.

# CircleCI

Além do Cypress, usamos o sistema de integração contínua baseado em nuvem [Circle.ci](https://circleci.com/) . Funciona com GitHub e executa várias verificações automaticamente. No nosso caso, quando um commit é enviado ao repositório, o projeto é reimplantado no ambiente de teste e executa todos os scripts Cypress. Dentro da própria plataforma está nossa linha de comando favorita, uma máquina virtual Linux e uma interface intuitiva. A plataforma é gratuita para uso não comercial.

![img](/content/blog/cypress/circleCI.webp)
_Interface Circle.ci_

# Resumindo

Como nossa prática tem mostrado, os desenvolvedores também podem verificar um projeto usando ferramentas para criar cenários de teste. As plataformas Cypress e CircleCI são perfeitas para isso e oferecem todo o arsenal necessário. E planejamos continuar dedicando tempo aos testes e trabalhando diariamente para melhorar o código.

Não monitoramos a quantidade de erros antes e depois da implementação, mas com a ajuda de novas ferramentas a equipe conseguiu economizar tempo nas verificações, reduzir a quantidade de bugs e melhorar a qualidade do código do projeto. Há um mês lançamos o projeto com sucesso.
