export class LoginPage {
    constructor() {
        this.usuarioInput = '#user';
        this.contraseñaInput = '#pass';
        this.loginButton = 'Log in';
    }

    writteUser(usuario) {
        cy.get(this.usuarioInput).type(usuario);
    }

    writtePassword(contraseña) {
        cy.get(this.contraseñaInput).type(contraseña);
    }

    clickLogIn() {
        cy.contains(this.loginButton).click();
    }
};

//shift + alt + f