/// <reference types="cypress" />

import { RegisterPage } from '../support/Pages/registerPage'
import { LoginPage } from '../support/Pages/LoginPage';
import { HomePage } from '../support/Pages/homePage';
import { ProductPage } from '../support/Pages/productPage';
import { ShoppingCartPage } from '../support/Pages/shoppingCartPage';


describe('desafioTres', () => {
  let loginData;
  let datos;
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const shoppingCartPage = new ShoppingCartPage();


  before("Ingresar con datos validos", () => {
    cy.fixture('misDatos').then(data => {
      loginData = data
    });

    cy.fixture('Products').then(data => {
      datos = data;
    });

  });

  beforeEach('Login', () => {
    cy.visit('');
    registerPage.dblClickIniciaSesion();
    loginPage.writteUser(loginData.test1.loginData.usuario);
    loginPage.writtePassword(loginData.test1.loginData.contraseña);
    loginPage.clickLogIn();

  })

  it('Desafio Tres', () => {
    const homePage = new HomePage();
    homePage.clickInOnlineShop();
    productPage.clickAddtoCart(datos.producto);
    productPage.clickAddtoCart(datos.producto2);
    productPage.clickGoShoppingCart();
    cy.contains('20').should('exist');
    cy.contains('15').should('exist');
    shoppingCartPage.clickshowTotalPrice();
    cy.get('#price').should('have.text', '35');

  });
});

