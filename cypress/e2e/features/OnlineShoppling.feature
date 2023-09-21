Feature: Katalon Online shopping

  Background:
  Given I am on the Katalon Ecommerce website 

  Scenario: Verify the online shopping sceanrios for Katalon Ecommerce website
    When I add four random items to my cart
    And I view my cart
    Then I find total '4' items listed in my cart
    When I search for lowest price item
    And I am able to remove the lowest price item from my cart
    Then I find total '3' items listed in my cart