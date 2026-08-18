const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const AdminPage = require('../pages/AdminPage');

Given('o usuário clica no botão "Add"', async function () {
  await this.page.getByRole('button', { name: /Add/ }).click();
});

Given('realiza o cadastro de um usuario como admin', async function () {
  this.adminPage = new AdminPage(this.page);
  await this.adminPage.cadastrarUsuario();

});

Then('deverá ser exibida uma mensagem de sucesso indicando que o usuário foi criado com sucesso', async function () {
  const mensagemSucesso = await this.adminPage.elementos.mensagemUsuarioCriado;
  await expect(mensagemSucesso).toContainText('Successfully Saved');
  await expect(this.adminPage.elementos.botaoSearchSystemUsers).toBeVisible();
  await this.adminPage.validarUsuarioCriado();
});
