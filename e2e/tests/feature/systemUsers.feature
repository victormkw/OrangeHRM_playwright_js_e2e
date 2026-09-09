# language: pt 
Funcionalidade: Gestão Administrativa de Usuários e Configurações no OrangeHRM

  Contexto: que eu acesse a página de login
    Dado que o usuário está logado como Administrador
    E navega até a tela "Admin User Management"

  Cenário: Criar um novo usuário com sucesso
    Quando o usuário clica no botão "Add"
    E realiza o cadastro de um usuario como admin
    Então deverá ser exibida uma mensagem de sucesso indicando que o usuário foi criado com sucesso

  Cenário: Validar campos obrigatórios ao criar um novo usuário
    Quando o usuário clica no botão "Add"
    E deixa os campos obrigatórios vazios
    E clica no botão "Save"
    Então deverá ser exibida uma mensagem de validação informando que os campos obrigatórios devem ser preenchidos

  Cenário: Pesquisar um usuário existente
    Quando o usuário informa o username "teste"
    E clica no botão "Search"
    Então o sistema deve exibir o usuário correspondente na tabela

  Cenário: Pesquisar um usuário inexistente
    Quando o usuário informa um username que não existe no sistema
    E clica no botão "Search"
    Então deverá ser exibida a mensagem "No Records Found"
    E a tabela deve estar vazia

  Cenário: Editar um usuário existente com sucesso
    Quando o usuário busca por um usuário cadastrado
    E clica no botão "Edit" do usuário selecionado
    E altera uma informação válida do cadastro
    E clica no botão "Save"
    Então deverá ser exibida uma mensagem de sucesso indicando que as alterações foram salvas

  Cenário: Excluir um usuário existente com sucesso
    Quando o usuário busca por um usuário cadastrado
    E clica no botão "Delete" do usuário selecionado
    E confirma a exclusão
    Então deverá ser exibida uma mensagem de sucesso indicando que o usuário foi deletado

  Cenário: Cancelar a criação de um novo usuário
    Quando o usuário clica no botão "Add"
    E preenche alguns dados do cadastro
    E clica no botão "Cancel"
    Então deverá retornar para a tela de listagem de usuários
    E o usuário não deve ser cadastrado
    E deverá ser exibida a mensagem "No Records Found"

  Cenário: Filtrar usuários por role
    Quando o usuário seleciona a role "Admin"
    E clica no botão "Search"
    Então a tabela deve exibir apenas usuários com a role selecionada

  Cenário: Filtrar usuários por status
    Quando o usuário seleciona o status "Enabled"
    E clica no botão "Search"
    Então a tabela deve exibir apenas usuários ativos
