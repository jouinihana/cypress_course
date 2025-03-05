

["macbook-16", "ipad-2", "iphone-6"].forEach(viewport => {
    it(`should be able to open the website in ${viewport} view`, () => {
        cy.viewport(viewport);
        cy.visit("cypress/fixtures/index.html");
    });
}
);
