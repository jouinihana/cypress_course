it ('right click test', ()=>{

    cy.visit("cypress/fixtures/index.html");
    cy.get('[value="Click me"]').rightclick();
    
});