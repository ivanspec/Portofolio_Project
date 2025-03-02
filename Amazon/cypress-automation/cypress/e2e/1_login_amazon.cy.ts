import { LoginPage } from '../support/page/loginPage';

const loginUI = new LoginPage();

describe('Login Sauce Demo', () => {
  it('User can see login page', () => {
    cy.visit('/');
    loginUI.clickloginBtn();
    loginUI.assertLoginPage();
  });
});