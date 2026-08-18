class LoginPage {

    constructor(page) {
        this.page = page;
        this.url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
        this.elementos = {
            campoUsuario: this.page.locator('[name="username"]'),
            campoSenha: this.page.locator('[name="password"]'),
            botaoLogin: this.page.getByRole('button', { name: 'Login' }),
            mensagemErro: this.page.getByRole('alert'),
            mensagemErroUsuario: this.page.getByText('Required').first(),
            mensagemErroSenha: this.page.getByText('Required').nth(1),
            linkEsqueciSenha: this.page.getByText('Forgot your password?'),
        };
    }

    async navegar() {
        await this.page.goto(this.url);
    }

    async preencherCredenciais(usuario, senha) {
        await this.elementos.campoUsuario.fill(usuario);
        await this.elementos.campoSenha.fill(senha);
    }

    async clicarBotaoLogin() {
        await this.elementos.botaoLogin.click();
    }
}

module.exports = LoginPage;