const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que eu acesse a página de login', async function () {
  // 'this.page' vem da aba criada dentro do hooks.js
  await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('eu preencher o usuário {string} e a senha {string}', async function (usuario, senha) {
  await this.page.locator('[name="username"]').fill(usuario);
  await this.page.locator('[name="password"]').fill(senha);
});

When('clicar no botão de login', async function () {
  await this.page.click('button[type="submit"]');
});

Then('devo ver o dashboard do sistema', async function () {
  const dashboardHeading = await this.page.getByRole('heading', { name: 'Dashboard' });
  await expect(dashboardHeading).toContainText('Dashboard')
});