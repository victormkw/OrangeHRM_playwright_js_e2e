const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

// Aumenta o tempo limite global para 30 segundos
setDefaultTimeout(30000);

let browser;

BeforeAll(async function () {
  // Se estiver no GitHub Actions (CI), roda sem interface visual (headless: true)
  // Se estiver no seu computador, abre a janela do navegador (headless: false)
  const isCI = !!process.env.CI;

  browser = await chromium.launch({ 
    headless: isCI ? true : false 
  });
});

Before(async function () {
  // Cria uma nova aba limpa para cada cenário
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  // Fecha a aba após cada cenário
  await this.page.close();
  await this.context.close();
});

AfterAll(async function () {
  // Fecha o navegador ao terminar todos os testes
  await browser.close();
});