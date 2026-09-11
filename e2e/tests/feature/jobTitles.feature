# language: pt

Funcionalidade: Gestão de Job Titles no OrangeHRM

  Contexto: que o administrador acessa a tela Job Titles
    Dado que o usuário está logado como Administrador
    E navega até a tela "Job Titles"

  Cenário: Criar um Job Title com sucesso
    Dado que o Job Title "Automation Tester" anterior seja removido
    Quando o usuário clica no botão "Add Job Titles"
    E preenche o Job Title "Automation Tester"
    E preenche a descrição do Job Title
    E preenche a nota do Job Title
    E salva o Job Title
    Então deverá ser exibida uma mensagem de sucesso para o Job Title

  Cenário: Validar campo obrigatório ao criar um Job Title
    Quando o usuário clica no botão "Add Job Titles"
    E salva o Job Title sem preencher os campos obrigatórios
    Então deverá ser exibida uma validação de campo obrigatório do Job Title

  Cenário: Pesquisar um Job Title existente
    Quando o usuário pesquisa o Job Title "Automation Tester"
    Então o Job Title pesquisado deve ser exibido na tabela

  Cenário: Editar um Job Title existente
    Quando o usuário edita o Job Title "Automation Tester"
    E altera a descrição do Job Title
    E salva o Job Title
    Então deverá ser exibida uma mensagem de atualização do Job Title

  Cenário: Excluir um Job Title existente
    Quando o usuário exclui o Job Title "Automation Tester"
    E confirma a exclusão do Job Title
    Então deverá ser exibida uma mensagem de exclusão do Job Title

  Cenário: Cancelar a criação de um Job Title
    Quando o usuário clica no botão "Add Job Titles"
    E preenche o Job Title "Automation Tester Cancelled"
    E cancela o cadastro do Job Title
    Então a tela de Job Titles deve ser exibida
