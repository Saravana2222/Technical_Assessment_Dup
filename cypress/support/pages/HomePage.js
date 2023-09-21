/// <reference types= "cypress" /> 

class HomePage {

    get Page_elements() {
        return require('../locators/locators.js')
    }

    addProductToCart(){
        cy.xpath(this.Page_elements.product_1)
        .trigger('mouseover')
        .then((productName) => {
            cy.xpath('(//h2[text()="'+ productName.text() +'"]/parent::a//preceding-sibling::div/a)[2]').click();
            cy.wait(200);
        });

        cy.xpath(this.Page_elements.product_2)
        .trigger('mouseover')
        .then((productName) => {
            cy.xpath('(//h2[text()="'+ productName.text() +'"]/parent::a//preceding-sibling::div/a)[2]').click();
            cy.wait(200);
        });

        cy.xpath(this.Page_elements.product_3)
        .trigger('mouseover')
        .then((productName) => {
            cy.xpath('(//h2[text()="'+ productName.text() +'"]/parent::a//preceding-sibling::div/a)[2]').click();
            cy.wait(200);
        });

        cy.xpath(this.Page_elements.product_4)
        .trigger('mouseover')
        .then((productName) => {
            cy.xpath('(//h2[text()="'+ productName.text() +'"]/parent::a//preceding-sibling::div/a)[2]').click();
            cy.wait(200);
        });
    }
}
export default HomePage;