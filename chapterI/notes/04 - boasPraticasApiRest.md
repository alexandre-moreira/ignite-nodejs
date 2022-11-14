# Boas práticas API Rest

* A utilização correta dos métodos HTTP
* A utilização correta dos status no retorno das respostas
* Padrão de nomeclatura
    - Busca de usuários - GET
        - http://enderecoservidor.com.br/v1/users

    - Busca de usuários do id - GET
         - http://enderecoservidor.com.br/v1/users/1

    - Busca de endereço do usuário - GET
         -  http://enderecoservidor.com.br/v1/users/1/address

    - Deleção de um usuário - DELETE
         - http://enderecoservidor.com.br/v1/users/1
    
    - Atualização do status do usuário - PATCH
         - http://enderecoservidor.com.br/v1/users/1/status
