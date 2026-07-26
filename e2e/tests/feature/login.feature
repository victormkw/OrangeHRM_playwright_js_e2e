# language: pt
Funcionalidade: Login no sistema

  Cenário: Login com sucesso
    Dado que eu acesse a página de login
    Quando eu preencher o usuário "Admin" e a senha "admin123"
    E clicar no botão de login
    Então devo ver o dashboard do sistema

  Cenário: Login inválido
    Dado que eu acesse a página de login
    Quando eu preencher o usuário "Adm" e a senha "admin123"
    E clicar no botão de login
    Então deverá apresentar a mensagem Invalid credentials

  Cenário: Campos obrigatórios não preenchidos
    Dado que eu acesse a página de login
    Quando eu preencher o usuário "" e a senha ""
    E clicar no botão de login
    Então deverá apresentar a mensagem Required nos campos obrigatórios

  Cenário: Resetar senha 
    Dado que eu acesse a página de login
    E que eu cliquei em Esqueci minha senha
    E que eu preenchi o meu usuário "teste"
    Quando clicar no botão de resetar senha
    Então deverá apresentar a mensagem de reset com sucesso
