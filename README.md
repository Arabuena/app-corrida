# App Corrida

**App Corrida** é uma plataforma inovadora para conectar motoristas e passageiros, oferecendo uma experiência de transporte segura, rápida e eficiente. Desenvolvido com foco em usabilidade e performance, o aplicativo visa simplificar o processo de corrida, do início ao fim.

## Visão Geral

Este repositório contém tanto o frontend quanto o backend do projeto **App Corrida**. O aplicativo foi construído para funcionar em dispositivos móveis e inclui funcionalidades como:

- Registro de passageiros e motoristas
- Solicitação de corridas em tempo real
- Acompanhamento de geolocalização durante a corrida
- Processamento de pagamentos seguros
- Simulação de rota e geolocalização precisa

O backend foi projetado com uma arquitetura robusta, utilizando MongoDB e PostgreSQL para persistência de dados, enquanto o frontend foi desenvolvido em React Native para uma experiência de usuário otimizada em dispositivos móveis.

## Funcionalidades

### Para Passageiros

- **Registro e Login:** Crie sua conta e faça login para solicitar corridas.
- **Solicitação de Corridas:** Solicite uma corrida em tempo real, informando a localização de coleta e destino.
- **Acompanhamento de Corrida:** Monitore a localização do motorista durante a viagem.
- **Histórico de Corridas:** Acesse o histórico de todas as corridas realizadas.
- **Pagamento:** Pague pela corrida diretamente no aplicativo de maneira segura.

### Para Motoristas

- **Registro e Login:** Registre-se como motorista e faça login para começar a aceitar corridas.
- **Aceitação de Corridas:** Aceite corridas solicitadas por passageiros na sua área.
- **Acompanhamento de Rota:** Visualize a rota recomendada para cada corrida com base na geolocalização.
- **Histórico de Corridas:** Acesse o histórico de todas as corridas realizadas.

### Backend

- **Gestão de Usuários:** Controle de registros e autenticação de passageiros e motoristas.
- **Geolocalização em Tempo Real:** Rastreie e atualize as localizações de motoristas e passageiros em tempo real.
- **Simulação de Rota:** Calcule as melhores rotas para as corridas utilizando APIs de mapas.
- **Processamento de Pagamentos:** Integração com gateways de pagamento para realizar transações seguras.

## Tecnologias Usadas

### Frontend
- **React Native:** Para o desenvolvimento do aplicativo móvel, garantindo uma experiência de usuário nativa em dispositivos Android e iOS.
- **Redux:** Para gerenciar o estado da aplicação de forma eficiente.
- **React Navigation:** Para a navegação entre as telas do aplicativo.

### Backend
- **Node.js:** Ambiente de execução para o servidor backend.
- **Express:** Framework para construção da API RESTful.
- **MongoDB:** Banco de dados NoSQL para armazenar informações sobre usuários, motoristas, corridas, entre outros.
- **PostgreSQL:** Banco de dados relacional utilizado para transações de pagamento e registro de corridas.

### Serviços Externos
- **Google Maps API:** Para fornecer recursos de geolocalização e cálculo de rotas.
- **Stripe:** Para o processamento seguro de pagamentos.

## Como Rodar o Projeto

### Requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [PostgreSQL](https://www.postgresql.org/download/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Passos para rodar o Backend

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/app-corrida.git
   cd app-corrida/backend
