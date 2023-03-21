export class ShoppingCartPage {

    constructor() {
        this.gotoProductsButton = 'Go to products'
        this.showTotalPriceButton = 'Show total price'
    };

    clickGotoProducts() {
        cy.contains(this.gotoProductsButton).click();
    }

    clickshowTotalPrice() {
        cy.contains(this.showTotalPriceButton).click();
    }

};