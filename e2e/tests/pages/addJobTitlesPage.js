class addJobTitlesPage {
  constructor(page) {
    this.page = page;
    this.elementos = {
      campoJobTitle: page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('input'),
      campoDescricao: page.getByPlaceholder('Type description here'),
      campoNota: page.getByPlaceholder('Add note'),
      botaoSave: page.getByRole('button', { name: 'Save' }),
      botaoCancel: page.getByRole('button', { name: 'Cancel' }),
      validacaoObrigatoria: page.getByText('Required').first()
    };
  }

  async preencherJobTitle(jobTitle) {
    await this.elementos.campoJobTitle.fill(jobTitle);
  }

  async preencherDescricao(descricao) {
    await this.elementos.campoDescricao.fill(descricao);
  }

  async preencherNota(nota) {
    await this.elementos.campoNota.fill(nota);
  }

  async salvar() {
    await this.elementos.botaoSave.click();
    await this.page.waitForLoadState('networkidle');
  }

  async cancelar() {
    await this.elementos.botaoCancel.click();
  }
}

module.exports = addJobTitlesPage;
