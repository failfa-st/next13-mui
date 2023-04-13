import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the website", () => {
  cy.visit("/");
});

When("I visit any page on the website", () => {
  cy.visit("/");
});

Then("the page title should display 'Welcome'", () => {
  cy.title().should("eq", "Welcome");
});

When("I navigate to different pages on the website", () => {
  cy.visit("/page1");
  cy.visit("/page2");
  cy.visit("/page3");
});

Then("the page title should display 'Welcome' on each page", () => {
  cy.visit("/page1");
  cy.title().should("eq", "Welcome");
  cy.visit("/page2");
  cy.title().should("eq", "Welcome");
  cy.visit("/page3");
  cy.title().should("eq", "Welcome");
});
