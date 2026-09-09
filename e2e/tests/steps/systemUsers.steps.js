const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SystemUsersPage = require('../pages/systemUsersPage');
const AddUserPage = require('../pages/AddUserPage');

Given ('navega até a tela "Admin User Management"', async function () {
  this.systemUsersPage = new SystemUsersPage(this.page);
  this.AddUserPage = new AddUserPage(this.page);
  await this.page.getByRole('link', {name: 'Admin'}).click();
});
  
Given('o usuário clica no botão "Add"', async function () {
  
  await this.systemUsersPage.clicarBotaoAdd();
});

Given('realiza o cadastro de um usuario como admin', async function () {
    await this.AddUserPage.selecionarUserRoleAdmin();
    await this.AddUserPage.preencherEmployeeName('Christopher Mcmillan');
    await this.AddUserPage.selecionarStatusEnabled();
    await this.AddUserPage.preencherUsername('teste');
    await this.AddUserPage.preencherPassword('teste123');
    await this.AddUserPage.preencherConfirmPassword('teste123');
    await this.AddUserPage.clicarBotaoSave();
});

Then('deverá ser exibida uma mensagem de sucesso indicando que o usuário foi criado com sucesso', async function () {
  const mensagemSucesso = await this.page.getByText('Successfully Saved');
  await expect(mensagemSucesso).toBeVisible();
  await expect(this.page.getByRole('button', { name: 'Search' })).toBeVisible();
});

When('deixa os campos obrigatórios vazios', async function () {
  await this.AddUserPage.preencherUsername('');
  await this.AddUserPage.preencherPassword('');
  await this.AddUserPage.preencherConfirmPassword('');
});

When('clica no botão "Save"', async function () {
  await this.AddUserPage.clicarBotaoSave();
});

Then('deverá ser exibida uma mensagem de validação informando que os campos obrigatórios devem ser preenchidos', async function () {
  await expect(this.page.getByText('Required').first()).toBeVisible();
});

When('o usuário informa o username {string}', async function (username) {
  await this.systemUsersPage.preencherUsernameSystemUsers(username);
});

When('o usuário informa um username que não existe no sistema', async function () {
  const username = 'usuario_inexistente_123';  
  await this.systemUsersPage.preencherUsernameSystemUsers(username);
});

When('clica no botão "Search"', async function () {
  await this.systemUsersPage.clicarBotaoSearchSystemUsers();
});

Then('o sistema deve exibir o usuário correspondente na tabela', async function () {
  await expect(this.page.getByRole('table')).toContainText('teste');
});

Then('deverá ser exibida a mensagem "No Records Found"', async function () {
  const mensagem = this.page.getByText('No Records Found').first();
    await expect(mensagem).toBeVisible();
});

Then('a tabela deve estar vazia', async function () {
  await expect(this.page.getByRole('table')).not.toContainText('usuario_inexistente_123');
});

When('o usuário busca por um usuário cadastrado', async function () {
  await this.systemUsersPage.preencherUsernameSystemUsers('teste');
  await this.systemUsersPage.clicarBotaoSearchSystemUsers();
});

When('clica no botão "Edit" do usuário selecionado', async function () {
  await this.systemUsersPage.clicarBotaoEdit();
});

When('altera uma informação válida do cadastro', async function () {
  await this.AddUserPage.selecionarStatusDisabled();
});

When('clica no botão "Delete" do usuário selecionado', async function () {
  await this.systemUsersPage.clicarBotaoDelete();
});

When('confirma a exclusão', async function () {
  await this.systemUsersPage.clicarBotaoYesDelete();
});

Then('deverá ser exibida uma mensagem de sucesso indicando que as alterações foram salvas', async function () {
  //await expect(this.page.getByText('Successfully Updated')).toBeVisible();
    const mensagem = this.page.getByText('Successfully Updated').first();
    await expect(mensagem).toBeVisible();
});

Then('deverá ser exibida uma mensagem de sucesso indicando que o usuário foi deletado', async function () {
 //await expect(this.page.getByText('Successfully Deleted')).toBeVisible();
  const mensagem = this.page.getByText('Successfully Deleted').first();
    await expect(mensagem).toBeVisible();
});

When('preenche alguns dados do cadastro', async function () {
    await this.AddUserPage.selecionarUserRoleAdmin();
    await this.AddUserPage.preencherEmployeeName('Christopher Mcmillan');
    await this.AddUserPage.selecionarStatusEnabled();
    await this.AddUserPage.preencherUsername('testeCancelado');
    await this.AddUserPage.preencherPassword('teste123');
    await this.AddUserPage.preencherConfirmPassword('teste123');
});

When('clica no botão "Cancel"', async function () {
  await this.AddUserPage.clicarBotaoCancel();
});

Then('deverá retornar para a tela de listagem de usuários', async function () {
  await expect(this.page.getByText('System Users')).toBeVisible();
});

Then('o usuário não deve ser cadastrado', async function () {
  await this.systemUsersPage.preencherUsernameSystemUsers('testeCancelado');
  await this.systemUsersPage.clicarBotaoSearchSystemUsers();
});

When('o usuário seleciona a role "Admin"', async function () {
  await this.page.locator('.oxd-select-text').first().click();
  await this.page.getByRole('option', { name: 'Admin' }).click();
});

When('o usuário seleciona o status "Enabled"', async function () {
  await this.page.locator('.oxd-select-text').nth(1).click();
  await this.page.getByRole('option', { name: 'Enabled' }).click();
});

Then('a tabela deve exibir apenas usuários com a role selecionada', async function () {
  await expect(this.page.getByRole('table')).toContainText('Admin');
});

Then('a tabela deve exibir apenas usuários ativos', async function () {
  await expect(this.page.getByRole('table')).toContainText('Enabled');
});
