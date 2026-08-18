# language: pt
Funcionalidade: Gestão Administrativa de Usuários e Configurações no OrangeHRM

Contexto: que eu acesse a página de login
    Dado que o usuário está logado como Administrador
    E navega até a tela "Admin User Management"

  Cenário: Criar um novo usuário com sucesso
    Quando o usuário clica no botão "Add"
    E realiza o cadastro de um usuario como admin  
    Então deverá ser exibida uma mensagem de sucesso indicando que o usuário foi criado com sucesso
