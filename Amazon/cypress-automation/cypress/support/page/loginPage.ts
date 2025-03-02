export class LoginPage {
    clickloginBtn(){
        cy.get('#nav-link-accountList > .nav-line-2').click();
    }
    assertLoginPage(){
        cy.get('.a-form-label').should('contain', 'Email or mobile phone number')
        cy.get('.a-padding-extra-large > .a-spacing-small').should('contain', 'Sign in')
        cy.get('#legalTextRow').should('contain', 'By continuing, you agree to Amazon\'s Conditions of Use and Privacy Notice.')
        cy.get('.a-expander-header').should('contain', 'Need help?')
        cy.get('.a-text-bold').should('contain', 'Buying for work?')
        cy.get('h5').should('contain', 'New to Amazon?')
        cy.get('#createAccountSubmit').should('contain', 'Create your Amazon account')
    }
    
}