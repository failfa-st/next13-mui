import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the application is opened", () => {
  cy.visit("/");
});

Then("the welcome message is displayed", () => {
  cy.get('[data-cy="welcome-message"]').should("be.visible");
});

Then("the welcome message contains a brief description of the app's purpose", () => {
  cy.get('[data-cy="welcome-message"]').should("contain.text", "brief description");
});

Then("the welcome message is clear and easy to read", () => {
  cy.get('[data-cy="welcome-message"]').should("have.css", "font-size", "16px");
  cy.get('[data-cy="welcome-message"]').should("have.css", "color", "rgb(0, 0, 0)");
});
