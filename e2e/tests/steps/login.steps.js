const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');


Given('que eu acesse a página de login', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navegar();
});

When('eu preencher o usuário {string} e a senha {string}', async function (usuario, senha) {
  await this.loginPage.preencherCredenciais(usuario, senha);
});

When('clicar no botão de login', async function () {
  await this.loginPage.clicarBotaoLogin();
});

Then('devo ver o dashboard do sistema', async function () {
  const dashboardHeading =  this.page.getByRole('heading', { name: 'Dashboard' });
  await expect(dashboardHeading).toContainText('Dashboard')
});

When('deverá apresentar a mensagem Invalid credentials', async function () {
  const mensagemErro =  this.page.getByRole('alert');
  await expect(mensagemErro).toContainText('Invalid credentials');
}); 

When('deverá apresentar a mensagem Required nos campos obrigatórios', async function () {
  const mensagemErroUsuario =  this.page.getByText('Required').first()
  const mensagemErroSenha = this.page.getByText('Required').nth(1);
  await expect(mensagemErroUsuario).toContainText('Required');
  await expect(mensagemErroSenha).toContainText('Required');
}); 

Given('que eu cliquei em Esqueci minha senha', async function () {
  await this.page.getByText('Forgot your password?').click();
});

Given('que eu preenchi o meu usuário {string}', async function (usuario) {
  await this.page.getByRole('textbox', {name: 'Username'}).fill(usuario);
});

When('clicar no botão de resetar senha', async function () { 
  await this.page.getByRole('button', {name: 'Reset Password'}).click();
});

Then ('deverá apresentar a mensagem de reset com sucesso', async function () {
  const mensagemResetSenha = await this.page.getByRole('heading', {name: 'Reset Password link sent successfully'});
  await expect(mensagemResetSenha).toContainText('Reset Password link sent successfully');
});

Given ('que o usuário está logado como Administrador', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navegar(); 
  await this.loginPage.preencherCredenciais('Admin', 'admin123');
  await this.loginPage.clicarBotaoLogin();
});

Given ('navega até a tela "Admin User Management"', async function () {
  await this.page.getByRole('link', {name: 'Admin'}).click();
});

