// Write step definitions using const { When, Then } = require("@badeball/cypress-cucumber-preprocessor"); for feature "Feature: View a List of Items
// Here is the updated step definitions with Cypress commands for each step:

const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");

Given('the user is on the home page', () => {
    cy.visit('http://localhost:3001/');
});

When('the user clicks on the {List of items} link', (linkText) => {
    cy.contains('a', 'List of items').click();
});

Then('the user should see a list of items in a table format', () => {
    cy.get('table').should('be.visible');
});

Then('the user should see a message {string}', (message) => {
    cy.contains(message).should('be.visible');
});

