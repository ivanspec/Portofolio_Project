import { LoginPage } from '../support/page/loginPage';

const loginUI = new LoginPage();

describe('Amazon Web', () => {
  it('User succesfully login amazon', () => {
    cy.visit('/');
    loginUI.clickloginBtn();
    loginUI.assertLoginPage();
    loginUI.fillUsername(Cypress.env("username"));
    loginUI.clickContinueBtn();
    loginUI.assertPasswordPage();
    loginUI.fillPassword(Cypress.env("password"));
    loginUI.clickSignInBtn();
    loginUI.successFullLogin();
  });
});