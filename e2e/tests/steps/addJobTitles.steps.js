const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const AddJobTitlesPage = require('../pages/addJobTitlesPage');

function obterPaginaCadastro(contexto) {
  if (!contexto.addJobTitlesPage) {
    contexto.addJobTitlesPage = new AddJobTitlesPage(contexto.page);
  }
  return contexto.addJobTitlesPage;
}

When('preenche o Job Title {string}', async function (jobTitle) {
  await obterPaginaCadastro(this).preencherJobTitle(jobTitle);
});

When('preenche a descrição do Job Title', async function () {
  await obterPaginaCadastro(this).preencherDescricao('Cargo criado por teste automatizado.');
});

When('preenche a nota do Job Title', async function () {
  await obterPaginaCadastro(this).preencherNota('Nota do teste automatizado.');
});

When('altera a descrição do Job Title', async function () {
  await obterPaginaCadastro(this).preencherDescricao('Descrição atualizada por teste automatizado.');
});

When('salva o Job Title', async function () {
  await obterPaginaCadastro(this).salvar();
});

When('salva o Job Title sem preencher os campos obrigatórios', async function () {
  await obterPaginaCadastro(this).salvar();
});

When('cancela o cadastro do Job Title', async function () {
  await obterPaginaCadastro(this).cancelar();
});

Then('deverá ser exibida uma mensagem de sucesso para o Job Title', async function () {
  await expect(obterPaginaCadastro(this).page.locator('.oxd-table-card').filter({ hasText: 'Automation Tester' }).first()).toBeVisible();
});

Then('deverá ser exibida uma validação de campo obrigatório do Job Title', async function () {
  await expect(obterPaginaCadastro(this).elementos.validacaoObrigatoria).toBeVisible();
});
