export class CartPage {
    assertCartPage(){
        cy.get('#sc-active-items-header').should('contain', 'Shopping Cart')
    }
    assertMouseItemInCart(){
        cy.get('.a-truncate-cut').should('contain', 'Razer Basilisk V3 Customizable Ergonomic Gaming Mouse: Fastest Gaming Mouse Switch - Chroma RGB Lighting - 26K DPI Optical Sensor - 11 Programmable Buttons - HyperSc…')
    }
    assertQuantityIs(quantity: number){
        cy.get('[data-a-selector="value"]').should('have.text',quantity)
    }
    decreaseQuantity(){
        cy.get('[name="sc-quantity"] > [data-a-selector="decrement"]').click()
    }
    assertItemSuccessDelete(){
        cy.get('[data-action="delete"] > .a-size-base').should('contain', 'was removed from Shopping Cart.')
    }
}