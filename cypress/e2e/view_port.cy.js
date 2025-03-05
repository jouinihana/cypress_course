[]


it("should be able to open the website in different view", () => {
    cy.viewport("macbook-16");
    cy.visit("cypress/fixtures/index.html");
});