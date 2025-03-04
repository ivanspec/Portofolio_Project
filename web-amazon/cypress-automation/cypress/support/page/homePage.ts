export class HomePage {
  fillSearchField(item: string) {
    cy.get('#nav-search').type(item);
  }
  clickSearch() {
    cy.get('#nav-search-submit-button').click();
  }
  skipAlertCountry() {
    cy.get('#glow-toaster-body').should('be.visible');
    cy.get('[data-action-type="DISMISS"]').click();
  }
}
