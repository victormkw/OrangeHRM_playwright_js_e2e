const { expect } = require('@playwright/test');
class AddUserPage {

    constructor(page) {
        this.page = page;
        this.elementos = {
            //elementos da tela de cadastro de usuário
            tituloAddUser: this.page.getByText('Add User'),
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
            botaoCancel: this.page.getByRole('button', { name: 'Cancel' }),
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

    async selecionarUserRoleAdmin() {
        await this.elementos.campoUserRole.click();
        await this.elementos.opcaoUserRoleAdmin.click();
    }

    async selecionarUserRoleESS() {
        await this.elementos.campoUserRole.click();
        await this.elementos.opcaoUserRoleESS.click();
    }

    async preencherEmployeeName(employeeName) {
        await this.elementos.campoEmployeeName.fill(employeeName);
        await this.page.getByText(employeeName).first().click();
    }

    async selecionarStatusEnabled() {
        await this.elementos.campoStatus.click();
        await this.elementos.opcaoStatusEnabled.click();
    }
    
    async selecionarStatusDisabled() {
        await this.elementos.campoStatus.click();
        await this.elementos.opcaoStatusDisabled.click();
    }

    async preencherUsername(username) {
        await this.elementos.campoUsername.fill(username);
    }

    async preencherPassword(password) {
        await this.elementos.campoPassword.fill(password);
    }

    async preencherConfirmPassword(confirmPassword) {
        await this.elementos.campoConfirmPassword.fill(confirmPassword);
    }
    
    async clicarBotaoSave() {
        await Promise.all([
            this.page.waitForURL('**/admin/viewSystemUsers'),
            this.elementos.botaoSave.click(),
        ]);
    }

    async clicarBotaoCancel() {
        await this.elementos.botaoCancel.click();
    }

}
module.exports = AddUserPage;