import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import home_page from '../pages/HomePage.js';
import cart_page from '../pages/CartPage.js';


const homePage = new home_page();
const cartPage = new cart_page();

let testData;
let lowestPrice;


before(()=> {
    cy.fixture('urls.json').then((data) => {
        testData = data;
    });
    cy.fixture('lowest_price.txt').then((data) => {
        lowestPrice = data;
    });
     
});

Given('I am on the Katalon Ecommerce website', () => { 
    cy.visit(testData.katalan_url);

});

When('I add four random items to my cart', () => { 
    homePage.addProductToCart();
});

And('I view my cart', () => { 
    cartPage.viewCart();
});

And('I find total {string} items listed in my cart', (items) => { 
    cartPage.verifyCartItems(items);
});

When('I search for lowest price item', () => { 
cartPage.findLowestPriceItem();
});

And('I am able to remove the lowest price item from my cart', () => { 
    cartPage.removeCartItem(lowestPrice);
});