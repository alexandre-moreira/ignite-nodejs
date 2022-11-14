# Métodos de requisições - Http Verbs

* GET    - Leitura
* POST   - Criação
* PUT    - Atualização
* DELETE - Deleção
* PATCH  - Atualização parcial

# HTTP Codes

* 1XX: Informativo - a solicitação foi aceita ou o processo continua em andamento

* 2XX: Confirmação
       - 200: Requisição bem sucessedida
       - 201: Created - Geralmente usado para POST após uma inserção

* 3XX: Redirecionamento
       - 301: Moved Permanently
       - 302: Moved

* 4XX: Erro do cliente
       - 400 - Bad Request
       - 401 - Unauthorized
       - 402 - Forbidden
       - 403 - Not Found
       - 422 - Unprocessable Entity

* 5XX: Erro no servidor - O servidor falhou ao concluir a solicitação
       - 500 - Internal Server Error 
       - 502 - Bad Gateway

# Parametros das Requisições

*  Header Params
    authority: app.rocketseat.com.br
    method: GET
    path: /api/journey-nodes
    scheme: https
    referer: https://app.rocketseat.com.br/node/

* Query Params

    - http://enderecoservidor.com.br/v1/users?page=2&limit=50
    * Chave
    * Valor
    * Separação

* Route Params
    - http://enderecoservidor.com.br/v1/users/{id}

* Body Params
    {
        "name": "Alexandre",
        "username":"ale"
    }