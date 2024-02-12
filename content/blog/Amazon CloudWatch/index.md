---
title: O que é Amazon CloudWatch
date: "2024-02-12"
description: "pode coletar e rastrear métricas"
---


O Amazon CloudWatch é um serviço que você pode usar para monitorar seus recursos e aplicativos da AWS em tempo real. Com o Amazon CloudWatch, você pode coletar e rastrear métricas, criar alarmes que enviam notificações e fazem alterações nos recursos monitorados com base nas regras definidas por você.

Por exemplo, você pode optar por monitorar a utilização da CPU para decidir quando adicionar ou remover instâncias do Amazon EC2 em uma camada de aplicativo.

Ou, se uma métrica específica de aplicativo específica que não estiver visível para a AWS for o melhor indicador para avaliar suas necessidades de dimensionamento, você poderá executar uma solicitação PUT para inserir essa métrica no Amazon CloudWatch.

Você pode usar essa métrica personalizada para gerenciar a capacidade. Você pode especificar parâmetros para uma métrica durante um período de tempo e configurar alarmes e ações automatizadas quando um limite for atingido.

O Amazon CloudWatch oferece suporte a vários tipos de ações, como enviar uma notificação para um tópico do Amazon SNS (Serviço de Notificação Simples da Amazon) ou executar uma política de Auto Scaling.

O Amazon CloudWatch oferece monitoramento básico ou detalhado dos produtos suportados da AWS. O monitoramento básico envia pontos de dados ao Amazon CloudWatch a cada cinco minutos, para um número limitado de métricas pré-selecionadas, sem nenhum custo.

O monitoramento detalhado envia pontos de dados para o Amazon CloudWatch a cada minuto e permite a agregação de dados por uma taxa adicional. Se você deseja usar o monitoramento detalhado, deve habilitá-lo – básico é o padrão.

O Amazon CloudWatch suporta monitoramento e métricas específicas para a maioria dos serviços da AWS, incluindo:

`Auto Scaling
Amazon CloudFront
Amazon CloudSearch
Amazon DynamoDB
Amazon EC2
Amazon EC2 Container Service (Amazon ECS)
Amazon ElastiCache
Amazon ElastiCache
Amazon Elastic Block Store (Amazon EBS)
Elastic Load Balancing
Amazon Elastic MapReduce (Amazon EMR)
Amazon Elasticsearch Service
Amazon Kinesis Streams
Amazon Kinesis Firehose
AWS Lambda
Amazon Machine Learning
AWS OpsWorks
Amazon Redshift
Amazon Relational Database Service (Amazon RDS)
Amazon Route 53
Amazon SNS
Serviço de fila simples da Amazon (Amazon SQS)
Amazon S3
Serviço de fluxo de trabalho simples da AWS (Amazon SWF)
AWS Storage Gateway
AWS WAF
Amazon WorkSpaces`

As métricas do Amazon CloudWatch podem ser recuperadas executando uma solicitação GET. Ao usar o monitoramento detalhado, você também pode agregar métricas por um período especificado.

O Amazon CloudWatch não agrega dados entre regiões, mas pode agregar zonas de disponibilidade em uma região.

A AWS fornece um rico conjunto de métricas incluídas em cada serviço, mas você também pode definir métricas personalizadas para monitorar recursos e eventos que a AWS não tem visibilidade – por exemplo, consumo de memória da instância do Amazon EC2 e métricas de disco visíveis para o sistema operacional de a instância do Amazon EC2, mas não visível para a AWS ou limites específicos de aplicativos em execução em instâncias que não são conhecidas pela AWS.

O Amazon CloudWatch oferece suporte a uma API (Interface de programação de aplicativos) que permite que programas e scripts coloquem métricas no Amazon CloudWatch como pares de nome e valor que podem ser usados ​​para criar eventos e acionar alarmes da mesma maneira que as métricas padrão do Amazon CloudWatch.

Os logs do Amazon CloudWatch podem ser usados ​​para monitorar, armazenar e acessar arquivos de log de instâncias do Amazon EC2, AWS CloudTrail e outras fontes.

Você pode recuperar os dados do log e monitorar em tempo real os eventos – por exemplo, pode rastrear o número de erros nos logs do aplicativo e enviar uma notificação se uma taxa de erro exceder um limite. O Amazon CloudWatch Logs também pode ser usado para armazenar seus logs no Amazon S3 ou Amazon Glacier.

Os logs podem ser retidos indefinidamente ou de acordo com uma política antiga que excluirá os logs mais antigos quando não for mais necessário.

Está disponível um agente do CloudWatch Logs que fornece uma maneira automatizada de enviar dados de log para o CloudWatch Logs para instâncias do Amazon EC2 executando o Amazon Linux ou Ubuntu. Você pode usar o instalador do agente Amazon CloudWatch Logs em uma instância existente do Amazon EC2 para instalar e configurar o agente CloudWatch Logs. Após a conclusão da instalação, o agente confirma que foi iniciado e permanece em execução até você desativá-lo.

O Amazon CloudWatch possui alguns limites que você deve ter em mente ao usar o serviço. Cada conta da AWS é limitada a 5.000 alarmes por conta da AWS, e os dados das métricas são retidos por duas semanas por padrão (no momento da redação deste). Se você deseja manter os dados por mais tempo, precisará mover os logs para um armazenamento persistente como o Amazon S3 ou o Amazon Glacier.

Você deve se familiarizar com os limites do Amazon CloudWatch no Guia do desenvolvedor do Amazon CloudWatch.
