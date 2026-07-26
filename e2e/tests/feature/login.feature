# language: pt
Funcionalidade: Login no sistema

  Cenário: Login com sucesso
    Dado que eu acesse a página de login
    Quando eu preencher o usuário "Admin" e a senha "admin123"
    E clicar no botão de login
    Então devo ver o dashboard do sistema