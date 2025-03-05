
it("Find element by tagname", ()=>{
    cy.visit("cypress/fixtures/index.html");
    cy.get('h1');
});
it("Find element by ID", ()=>{
    cy.visit("cypress/fixtures/index.html");
    cy.get('#welcome');
});
it("Find element by classname", ()=>{
    cy.visit("cypress/fixtures/index.html");
    cy.get('.list1.web');
});
it.only("Find element by attribute", ()=>{
    cy.visit("cypress/fixtures/index.html");
    cy.get('[name="Developer"]');
});