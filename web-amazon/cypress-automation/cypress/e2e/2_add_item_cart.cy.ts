import { CartPage } from '../support/page/cartPage';
import { HomePage } from '../support/page/homePage';
import { ListItemPage } from '../support/page/listItemPage';

const cartUI = new CartPage();
const homeUI = new HomePage();
const resultUI = new ListItemPage();
const mouseName = 'Razer Basilisk V3';
const resultInRow = 1

describe('User can add and delete item to card without login¡™£', () => {
    it('4-AZ: user add item to cart without login', () => {
      cy.visit('/');

      // page home
      homeUI.skipAlertCountry();
      cy.wait(2000); // waiting allert is show
      homeUI.fillSearchField(mouseName);
      cy.wait(3000); // waiting load search item
      homeUI.clickSearch();

      // page result
      resultUI.assertResultPage();
      resultUI.clickAddItemtoCartInRow(resultInRow);
      resultUI.clickCartIcon();

      // page cart
      cartUI.assertCartPage();
      cartUI.assertMouseItemInCart();
      cartUI.assertQuantityIs(1);
    })

    it('5-AZ: user can delete item in cart without login', () => {
        cy.visit('/');
  
        // page home
        homeUI.skipAlertCountry();
        cy.wait(2000); // waiting allert is show
        homeUI.fillSearchField(mouseName);
        cy.wait(2000); // waiting load search item
        homeUI.clickSearch();
  
        // page result
        resultUI.assertResultPage();
        resultUI.clickAddItemtoCartInRow(resultInRow);
        resultUI.clickCartIcon();
  
        // page cart
        cartUI.assertCartPage();
        cartUI.assertMouseItemInCart();
        cartUI.assertQuantityIs(1);

        // delete cart
        cartUI.decreaseQuantity();
        cartUI.assertItemSuccessDelete();
      })
})