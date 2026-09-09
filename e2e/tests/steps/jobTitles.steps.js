const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const JobTitlesPage = require('../pages/jobTitlesPage');

Given('navega até a tela "Job Titles"', async function () {
  this.jobTitlesPage = new JobTitlesPage(this.page);
  await this.jobTitlesPage.navegarParaJobTitles();
});

Given('que o Job Title {string} anterior seja removido', async function (jobTitle) {
  await this.jobTitlesPage.removerSeExistir(jobTitle);
});

When('o usuário clica no botão "Add Job Title"', async function () {
  await this.jobTitlesPage.clicarBotaoAdd();
});

When('o usuário pesquisa o Job Title {string}', async function (jobTitle) {
  await this.jobTitlesPage.pesquisarJobTitle(jobTitle);
});

When('o usuário edita o Job Title {string}', async function (jobTitle) {
  await this.jobTitlesPage.editarJobTitle(jobTitle);
});

When('o usuário exclui o Job Title {string}', async function (jobTitle) {
  await this.jobTitlesPage.excluirJobTitle(jobTitle);
});

When('confirma a exclusão do Job Title', async function () {
  await this.jobTitlesPage.confirmarExclusao();
});

Then('a tela de Job Titles deve ser exibida', async function () {
  await expect(this.jobTitlesPage.elementos.tituloPagina).toBeVisible();
});

Then('a tabela de Job Titles deve estar visível', async function () {
  await expect(this.jobTitlesPage.elementos.tabela).toBeVisible();
});

Then('o Job Title pesquisado deve ser exibido na tabela', async function () {
  await expect(this.jobTitlesPage.obterLinha('Automation Tester')).toBeVisible();
});

Then('deverá ser exibida uma mensagem de atualização do Job Title', async function () {
  await expect(this.jobTitlesPage.elementos.mensagemAtualizado).toBeVisible();
});

Then('deverá ser exibida uma mensagem de exclusão do Job Title', async function () {
  await expect(this.jobTitlesPage.elementos.mensagemExcluido).toBeVisible();
});
