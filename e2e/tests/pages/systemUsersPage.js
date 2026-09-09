const { expect } = require('@playwright/test');
class SystemUsersPage {

    constructor(page) {
        this.page = page;
        this.elementos = {
            //elementos da tela de pesquisa de usuários
            botaoAdd: this.page.getByText('Add'),
            campoUsernameSystemUsers: this.page.getByRole('textbox').nth(1),
            botaoSearchSystemUsers: this.page.getByRole('button', { name: 'Search' }),
            campoUserRoleSystemUsers: this.page.getByText('-- Select --').first(),
            campoEmployeeNameSystemUsers: this.page.getByRole('textbox', { name: 'Type for hints...' }),
            campoStatusSystemUsers: this.page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
            botaoSearchSystemUsers: this.page.getByRole('button', { name: 'Search' }),
            mensagemUsuarioCriado: this.page.getByText('Successfully Saved'),
            mensagemUsuarioEditado: this.page.getByText('Successfully Updated'),
            mensagemUsuarioExcluido: this.page.getByText('Successfully Deleted'),
            botaoYesDelete: this.page.getByText('Yes, Delete'),
            botaoNoDelete: this.page.getByRole('button', { name: 'No, Cancel' }),

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

    async preencherEmployeeName(employeeName) {
        await this.elementos.campoEmployeeName.fill(employeeName);
        await this.page.getByText(employeeName).click();
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
    
    async clicarSave() {
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

    async preencherUsernameSystemUsers(username) {
        await this.elementos.campoUsernameSystemUsers.fill(username);
    }
    
    async preencherAdminUserRoleSystemUsers() {
        await this.elementos.campoUserRoleSystemUsers.click();
        await this.elementos.opcaoUserRoleAdmin.click();
    }

    async preencherStatusEnabledSystemUsers() {
        await this.elementos.campoStatusSystemUsers.click();
        await this.elementos.opcaoStatusEnabled.click();
    }

    async clicarBotaoSearchSystemUsers() {
        await this.elementos.botaoSearchSystemUsers.click();
    }

    async clicarBotaoEdit() {
        await this.page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
    }
    
    async clicarBotaoDelete() {
        await this.page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
    }   

    async clicarBotaoYesDelete() {
        await this.elementos.botaoYesDelete.click();
    }

    async clicarBotaoNoDelete() {
        await this.elementos.botaoNoDelete.click();
    }

}
module.exports = SystemUsersPage;