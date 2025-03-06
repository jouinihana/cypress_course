

it('Select command', () => {
    cy.visit("cypress/fixtures/index.html");
    cy.get('#courses').select('selenium');
});