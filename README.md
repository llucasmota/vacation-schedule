## Sobre o projeto

- Quando ocorre o período de marcação de férias no Sicoob precisamos seguir certas regras que sempre entravam em choque, pois pessoas diferentes mexiam na planilha causando dados meio incertos, arquivos corrompidos e férias que não atendiam as regras, que basicament são:

- Pessoas da mesma equipe não podem tirar férias num mesmo período;
- Férias não podem ser marcadas para um período já vencido;
- Lideres de equipes não podem tirar férias ao mesmo tempo, mesmo que estejam em equipes diferentes;
- Os períodos de férias devem ter as seguintes regras:
  - 30 dias completos
  - Férias divididas em dois períodos de 15 dias
  - Férias divididas com um período de 20 dias e um de 10 dias

## Sobre as tecnologias utilizadas:

- NodeJS;
- ExpressJS como um servidor web para fornecer uma api rest;
- Banco não relacional: MongoDB;
- Autenticação JWT;
- Eslint;
- Supertest, Mocha(para testes de serviço);

## Como clonar o projeto?

- `git clone https://github.com/llucasmota/vacation-schedule.git`

## Instalando as dependências:

### Na raiz do projeto executar:

- `npm install`

## Instalando imagem do mongoDB no docker:

### Pré-requisito: Docker instalado

### Executar o seguinte comando no terminal:

`docker run --name mongo-serve -p 27017:27017 -d -t mongo`
