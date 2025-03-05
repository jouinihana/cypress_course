 
describe('Should visit the website correctly.', () => {
    it('should visit cypress documentation', () => {
        cy.visit({
            url: 'https://docs.cypress.io/',
            method: 'GET',
            headers: {
                'Accept': 'text/html',
            },
        }); 
    });

    it('should visit google', () => {
        cy.visit({
            url: 'https://www.google.com/search',
            qs: {
                q: 'testing',
            },
        });
        
    });
});
