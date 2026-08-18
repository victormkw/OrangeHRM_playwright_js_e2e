const { expect } = require('@playwright/test');
class AdminPage {

    constructor(page) {
        this.page = page;
        this.elementos = {
            //elementos da tela de pesquisa de usuários
            campoUsernameSystemUsers: this.page.getByRole('textbox').nth(1),
            botaoSearchSystemUsers: this.page.getByRole('button', { name: 'Search' }),
            campoUserRoleSystemUsers: this.page.getByText('-- Select --').first(),
            campoEmployeeNameSystemUsers: this.page.getByRole('textbox', { name: 'Type for hints...' }),
            campoStatusSystemUsers: this.page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
            botaoSearchSystemUsers: this.page.getByRole('button', { name: 'Search' }),
            mensagemUsuarioCriado: this.page.getByText('Successfully Saved'),
            mensagemUsuarioEditado: this.page.getByText('Successfully Updated'),
            mensagemUsuarioExcluido: this.page.getByText('Successfully Deleted'),

            //elementos da tela de cadastro de usuário
            botaoAdd: this.page.getByText('Add'),
            campoUserRole: this.page.getByText('-- Select --').first(),
            opcaoUserRoleAdmin: this.page.getByRole('option', { name: 'Admin' }),
            opcaoUserRoleESS: this.page.getByRole('option', { name: 'ESS' }),
            campoStatus: this.page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
            opcaoStatusEnabled: this.page.getByRole('option', { name: 'Enabled' }),
            opcaoStatusDisabled: this.page.getByRole('option', { name: 'Disabled' }),
            campoEmployeeName: this.page.getByRole('textbox', { name: 'Type for hints...' }),
            campoUsername: this.page.getByRole('textbox').nth(2),
            campoPassword: this.page.getByRole('textbox').nth(3),
            campoConfirmPassword: this.page.getByRole('textbox').nth(4),
            botaoSave: this.page.getByRole('button', { name: 'Save' }),
        };
}

    async clicarBotaoAdd() {
        await this.elementos.botaoAdd.click();
    }

    async cadastrarUsuario() {
        await this.elementos.campoUserRole.click();
        await this.elementos.opcaoUserRoleAdmin.click();
        await this.elementos.campoEmployeeName.fill("Christopher Mcmillan");
        await this.page.getByText('Christopher Mcmillan').click();
        await this.elementos.campoStatus.click();
        await this.elementos.opcaoStatusEnabled.click();
        await this.elementos.campoUsername.fill('teste');
        await this.elementos.campoPassword.fill('teste123');
        await this.elementos.campoConfirmPassword.fill('teste123');
        await this.elementos.botaoSave.click();
    }

    async validarUsuarioCriado() {
        await this.page.getByRole('textbox').nth(1).fill('teste');
        await this.elementos.campoUserRoleSystemUsers.click();
        await this.elementos.opcaoUserRoleAdmin.click();
        await this.elementos.campoStatusSystemUsers.click();
        await this.elementos.opcaoStatusEnabled.click();
        await this.elementos.botaoSearchSystemUsers.click();
        const usuarioCriado = this.page.getByRole('row').filter({ hasText: /Christopher/i });
        await expect(usuarioCriado.first()).toContainText('testeAdminChristopher McmillanEnabled');
    }
}
module.exports = AdminPage;