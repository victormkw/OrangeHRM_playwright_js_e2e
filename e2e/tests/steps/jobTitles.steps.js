const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const JobTitlesPage = require('../pages/jobTitlesPage');
const addJobTitlesPage = require('../pages/addJobTitlesPage');

Given('navega até a tela "Job Titles"', async function () {
  this.jobTitlesPage = new JobTitlesPage(this.page);
  this.addJobTitlesPage = new addJobTitlesPage(this.page);
  await this.jobTitlesPage.navegarParaJobTitles();
});

Given('que o Job Title {string} anterior seja removido', async function (jobTitle) {
  await this.jobTitlesPage.removerSeExistir(jobTitle);
});

When('o usuário clica no botão "Add Job Titles"', async function () {
  await this.jobTitlesPage.clicarBotaoAdd();
});

When('preenche o Job Title {string}', async function (jobTitle) {
  await this.addJobTitlesPage.preencherJobTitle(jobTitle);
});

When('preenche a descrição do Job Title', async function () {
  await this.addJobTitlesPage.preencherDescricao('Cargo criado por teste automatizado.');
});

When('preenche a nota do Job Title', async function () {
  await this.addJobTitlesPage.preencherNota('Nota do teste automatizado.');
});

When('salva o Job Title', async function () {
  await this.addJobTitlesPage.salvar();
});

Then('deverá ser exibida uma mensagem de sucesso para o Job Title', async function () {
  await expect((this).page.locator('.oxd-table-card').filter({ hasText: 'Automation Tester' }).first()).toBeVisible();
});

When('salva o Job Title sem preencher os campos obrigatórios', async function () {
  await this.addJobTitlesPage.salvar();
});

Then('deverá ser exibida uma validação de campo obrigatório do Job Title', async function () {
  await expect(this.addJobTitlesPage.elementos.validacaoObrigatoria).toBeVisible();
});

When('o usuário pesquisa o Job Title {string}', async function (jobTitle) {
  await this.jobTitlesPage.pesquisarJobTitle(jobTitle);
});

Then('o Job Title pesquisado deve ser exibido na tabela', async function () {
  await expect(this.jobTitlesPage.obterLinha('Automation Tester')).toBeVisible();
});

When('o usuário edita o Job Title {string}', async function (jobTitle) {
  await this.jobTitlesPage.editarJobTitle(jobTitle);
});

When('altera a descrição do Job Title', async function () {
  await this.addJobTitlesPage.preencherDescricao('Descrição atualizada por teste automatizado.');
});

Then('deverá ser exibida uma mensagem de atualização do Job Title', async function () {
  await expect(this.jobTitlesPage.elementos.mensagemAtualizado).toBeVisible();
});


When('o usuário exclui o Job Title {string}', async function (jobTitle) {
  await this.jobTitlesPage.excluirJobTitle(jobTitle);
});

When('confirma a exclusão do Job Title', async function () {
  await this.jobTitlesPage.confirmarExclusao();
});

Then('deverá ser exibida uma mensagem de exclusão do Job Title', async function () {
  await expect(this.jobTitlesPage.elementos.mensagemExcluido).toBeVisible();
});

When('cancela o cadastro do Job Title', async function () {
  await this.addJobTitlesPage.cancelar();
});

Then('a tela de Job Titles deve ser exibida', async function () {
  await expect(this.jobTitlesPage.elementos.tituloPagina).toBeVisible();
});