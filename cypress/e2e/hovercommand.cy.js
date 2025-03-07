it('hover over command', () => {
    cy.visit('cypress/fixtures/index.html'); // Replace with your URL
    cy.get('.trigger').trigger('mouseover'); // Replace with your button selector
});
it.only('hover out command', () => {
    cy.visit('cypress/fixtures/index.html'); // Replace with your URL
    cy.get('.trigger').trigger('mouseout'); // Replace with your button selector
});