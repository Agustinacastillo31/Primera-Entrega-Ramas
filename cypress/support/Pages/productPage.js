export class ProductPage {

    constructor() {
        this.closeModal = '#closeModal'
        this.goShoppingCartButton = '#goShoppingCart'
    };

    clickAddtoCart(producto) {
        cy.get(`[value="${producto}"]`).click();
        cy.get(this.closeModal).click();
    }
    clickGoShoppingCart() {
        cy.get(this.goShoppingCartButton).click();
    }


    clickAddtoCart(producto) {
        cy.get(`[value="${producto}"]`).click();
        cy.get(this.closeModal).click();
        
    }
    clickGoShoppingCart() {
        cy.get(this.goShoppingCartButton).click();
    }

    retornarPrecios(){
        return cy.get('#productPrice').should('exist');
        
       

    }

};