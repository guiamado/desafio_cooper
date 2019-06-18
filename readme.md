# Desafio CooperSystem
Esse sistema possui funcionalidades de Operar produtos e pedidos de uma empresa.

As tecnologias utilizadas foram:
- Laravel (api)
- VueJS (frontEnd)
- Vuetify
- Vuex
- Docker compose
- Teste de integraçao com Cypress

Para utilizar o sistema siga os passos:

- Copiando o exemplo do docker compose para ser conseguir ser utilizado:

``` cp docker-compose.exemplo docker-compose.yml ```

- Subindo o servico do banco pelo docker compose:

``` docker-compose up ```

- Instalando dependencias da api:

``` composer update ```

- Copiar o exemplo de variaveis de ambiente da api:

 ``` cp .env.example .env ```

- Para gerar sua chave da aplicacao use:

``` php artisan key:generate ```

- Para realizar migraçoes e popular o banco de dados use:

``` php artisan migrate --seed ```

- Para subir a api use o comando:

``` php artisan serve ```

- Instalando dependencias do frontend:

``` npm install ```

- Subindo o frontend:

``` npm run serve ```

- Acesse o frontend no seu host na porta 8080, exemplo:

``` http://localhost:8080 ```

###Obs: ``` npm run serve ```, ``` php artisan serve ``` e ``` docker-compose up ``` devem rodar juntos, pois sao dependentes um do outro.

- Para rodar os testes de integraçao com Cypress use:

``` $(npm bin)/cypress run ```
