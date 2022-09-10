/// <reference types="cypress" />

describe('Login and logout', () => {
    before(() => {
        cy.window().then((win) => {
            win.sessionStorage.clear()
          })
    })
    it('should be redirectod to login form server page if not logged in', () => {
        cy.visit('http://localhost:3001/server-list');
        cy.location('pathname').should('include', '/login')
    });
    it('should navigate to server list if token exists', () => {
        cy.request({
            method: 'POST',
            url: 'https://playground.tesonet.lt/v1/tokens',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',      
            },
            body: {
                username: 'tesonet',
                password: 'partyanimal'
            }
          }).then((response) => {
            sessionStorage.setItem('token', response.body.token);
        })
        cy.visit('http://localhost:3001/server-list');
        cy.location('pathname').should('include', '/server-list')
        cy.get('h1').should('contain', 'Server list');
    })
})