
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
it("Find element by attribute", ()=>{
    cy.visit("cypress/fixtures/index.html");
    cy.get('[name="Developer"]');
});
it("Find the first element", ()=>{
    cy.visit("cypress/fixtures/index.html");
    cy.get('h1').first();
});
it("Find the last element", ()=>{
    cy.visit("cypress/fixtures/index.html");
    cy.get('h1').last();
});
it("Find an element from a list of elements by index", ()=>{
    cy.visit("cypress/fixtures/index.html");
    cy.get('h1').eq(2);
});
it("Find elements with filter", ()=>{
    cy.visit("cypress/fixtures/index.html");
    cy.get('li').filter('.web');
});
it("Find elements by children", ()=>{
    cy.visit("cypress/fixtures/index.html");
    cy.get('.course-list').children();
});
it.only("Find elements by Find command", ()=>{
    cy.visit("cypress/fixtures/index.html");
    cy.get('.course-list').find('.web');
});