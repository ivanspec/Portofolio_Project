export class ListItemPage {
  assertResultPage() {
    cy.get('[data-cel-widget="search_result_0"]').should('be.visible');
  }
  clickAddItemtoCartInRow(row: number) {
    cy.get('#a-autoid-1-announce').should('be.visible');
    cy.get(`#a-autoid-${row}-announce`).click();
  }
  clickCartIcon() {
    cy.get('#nav-cart').click();
  }
}
