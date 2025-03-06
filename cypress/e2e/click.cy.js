describe('Click Command', () => {
    it('should click on a button', () => {
        cy.visit('cypress/fixtures/index.html'); // Replace with your URL
        cy.get('.invoice-button').last().click(); // Replace with your button selector
    });
    it.only('should click on a button', () => {
        cy.visit('cypress/fixtures/index.html'); // Replace with your URL
        cy.get('.hidden-button').click({force: true}); // Replace with your button selector
    });
});


