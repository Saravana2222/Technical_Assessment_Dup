/// <reference types= "cypress" /> 

class CartPage {  

    get Page_elements() {
        return require('../locators/locators.js')
    }

    viewCart(){
        cy.xpath(this.Page_elements.add_cart_btn).click();
        cy.reload();
    }

    verifyCartItems(items){
        cy.get(this.Page_elements.cart_Items).should('have.length', items);
    }

    findLowestPriceItem(){
        const cartProductPrice = [];
        cy.get(this.Page_elements.cart_Item_price)
         .each(($li) => cartProductPrice.push($li.text()))
         .then(() => {
            let product_price = (cartProductPrice.join(', ').toString()).replace('$', '').replace(' $', '').replace(' $', '').replace(' $', '').split(',');
            let lowest_price = product_price.sort();
            cy.log('Lowest price is : ' + lowest_price[0]); 
            cy.writeFile('cypress/fixtures/lowest_price.txt', lowest_price[0]);
        });
    }

    removeCartItem(lowestPrice){
        cy.xpath('(//td[@class="product-price"]/span[text()="' + lowestPrice + '"]/parent::td/parent::tr//td/a)[1]').click();
    }

}

export default CartPage;