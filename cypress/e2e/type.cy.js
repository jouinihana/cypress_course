describe('Type Command', () => {
    it('should type a text', () => {
        cy.visit('cypress/fixtures/index.html'); // Replace with your URL
        cy.get('.invoice-button').last().click(); // Replace with your button selector
    });
});