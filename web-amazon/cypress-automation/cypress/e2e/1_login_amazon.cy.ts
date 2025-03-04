import { LoginPage } from '../support/page/loginPage';

const loginUI = new LoginPage();

// Documantation scenario : https://docs.google.com/spreadsheets/d/1PDgkWa_QUfMz9yJJ9bgA7aKmIrSx7BGORem9hJ98qYw/edit?usp=sharing
describe('Login Amazon', () => {
  it('1-AZ: user succesfully login amazon', () => {
    cy.visit('/');
    loginUI.clickloginBtn();
    loginUI.assertLoginPage();
    loginUI.fillUsername(Cypress.env("username"));
    loginUI.clickContinueBtn();
    loginUI.assertPasswordPage();
    loginUI.fillPassword(Cypress.env("password"));
    loginUI.clickSignInBtn();
  });

  it('2-AZ: user fill wrong password and got error', () => {
    cy.visit('/');
    loginUI.clickloginBtn();
    loginUI.assertLoginPage();
    loginUI.fillUsername(Cypress.env("username"));
    loginUI.clickContinueBtn();
    loginUI.assertPasswordPage();
    loginUI.fillPassword(Cypress.env("wrongPassword"));
    loginUI.clickSignInBtn();
    loginUI.assertAllertWrongPwd();
  });
  
  it('3-AZ: user fill wrong username and got error', () => {
    cy.visit('/');
    loginUI.clickloginBtn();
    loginUI.assertLoginPage();
    loginUI.fillUsername(Cypress.env("wrongUsername"));
    loginUI.clickContinueBtn();
    loginUI.assertAllertWrongUsername();
  });
});