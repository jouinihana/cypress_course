describe('Type Command', () => {
    it('should type a text', () => {
        cy.visit('cypress/fixtures/index.html'); // Replace with your URL
        cy.get('#inputEmail').type('test@gmail.com', {delay: 1000}); // Replace with your button selector
        cy.get('#inputPassword').type('test@gmailcom'); // Replace with your button selector
    });
});