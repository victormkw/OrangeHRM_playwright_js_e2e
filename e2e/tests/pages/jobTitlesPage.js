class JobTitlesPage {
  constructor(page) {
    this.page = page;
    this.elementos = {
      menuAdmin: page.getByRole('link', { name: 'Admin' }),
      menuJob: page.getByRole('listitem').filter({ hasText: 'Job' }),
      menuJobTitles: page.locator('a:has-text("Job Titles")'),
      tituloPagina: page.getByRole('heading', { name: 'Job Titles' }),
      botaoAdd: page.getByRole('button', { name: 'Add' }),
      campoPesquisa: page.getByPlaceholder('Search'),
      tabela: page.getByRole('table'),
      mensagemSalvo: page.getByText('Successfully Saved').first(),
      mensagemAtualizado: page.getByText('Successfully Updated').first(),
      mensagemExcluido: page.getByText('Successfully Deleted').first(),
      botaoConfirmarExclusao: page.getByText('Yes, Delete')
    };
  }

  async navegarParaJobTitles() {
    await this.elementos.menuAdmin.click();
    await this.elementos.menuJob.click();
    await this.elementos.menuJobTitles.click();
  }

  async clicarBotaoAdd() {
    await this.elementos.botaoAdd.click();
  }

  async pesquisarJobTitle(jobTitle) {
    await this.elementos.campoPesquisa.fill(jobTitle);
    await this.elementos.campoPesquisa.press('Enter');
  }

  async editarJobTitle(jobTitle) {
    await this.obterLinha(jobTitle).locator('button').last().click();
  }

  async excluirJobTitle(jobTitle) {
    await this.obterLinha(jobTitle).locator('button').first().click();
  }

  async removerSeExistir(jobTitle) {
    const linha = this.obterLinha(jobTitle);
    if (await linha.count() > 0) {
      await linha.locator('button').first().click();
      await this.confirmarExclusao();
    }
  }

  async confirmarExclusao() {
    await this.elementos.botaoConfirmarExclusao.click();
  }

  obterLinha(jobTitle) {
    return this.page.locator('.oxd-table-card').filter({ hasText: jobTitle }).first();
  }
}

module.exports = JobTitlesPage;
