
describe("log in functionalities", ()=>{
    before(()=>{
        cy.log("I am inside the before hook !")
    });
    beforeEach(()=>{
        cy.log("I will run before each test !")
    });
    after(()=>{
        cy.log("I am inside the after hook !")
    });
afterEach(()=>{
    cy.log("I will run after each test !")
});

it("Should log in with a valid email and password correctly", function(){
    cy.log("Should log in with a valid email and password correctly")
});
    
it("Should not log in if the username is wrong", ()=>{
        cy.log("Should not log in if the username is wrong")
    });
    
    it("Should be able to reset the password", ()=>{
        cy.log("Should be able to reset the password")
    });
});

describe("Order management functionalities", ()=>{
    it("Should be able to order a new food", ()=>{
        cy.log("Should be able to order a new food")
    });
});
