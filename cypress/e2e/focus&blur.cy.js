

it('focus command', () => {
        cy.visit('cypress/fixtures/index.html'); // Replace with your URL
        cy.get('.focus.blur').focus(); // Replace with your button selector
    });

it.only('blur command', () => {
        cy.visit('cypress/fixtures/index.html'); // Replace with your URL
        cy.get('.focus.blur').focus();
        cy.get('.focus.blur').blur(); // Replace with your button selector
    });