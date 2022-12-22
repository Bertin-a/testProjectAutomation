/// <reference types="cypress" />

describe('Checking',()=>{
    it.skip('valid inputs', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-test-id="first-name"]').type('Bertina')
        cy.get('[data-test-id="middle-name"]').type('Wewora')
        cy.get('[data-test-id="last-name"]').type('Ayuure')
        cy.get('[data-test-id="phone-number"]').type('0289033478')
        cy.get('[data-test-id="dob"]').type('2000-06-12')
        cy.get('[data-test-id="address"]').type('Gh34JB2')
        cy.get('[data-test-id="submit-btn"]').click()
        //user info
        cy.get('[data-test-id="user-info"]').should('exist')
    });
    it.skip('invalid inputs for username', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-test-id="first-name"]').type('B')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Must be between 2 and 10 chars'))
        cy.get('[data-test-id="middle-name"]').type('W')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Must be between 2 and 10 chars'))
        cy.get('[data-test-id="last-name"]').type('A')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Must be between 2 and 10 chars'))
        cy.get('[data-test-id="phone-number"]').type('2333389033478')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Phone number must be 10 digits'))
        cy.get('[data-test-id="dob"]').type('2040-06-12')
        cy.get('[data-test-id="address"]').type('Gh34JB2')
        cy.get('[data-test-id="submit-btn"]').click()
        cy.get('[data-test-id="user-info"]').should('not.exist')
    });
    it.skip('invalid greater tha 10 chars', () => {
         cy.visit('http://localhost:3000/')
        cy.get('[data-test-id="first-name"]').type('Bertinaaaaa')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Must be between 2 and 10 chars'))
        cy.get('[data-test-id="middle-name"]').type('Weeeeeeeeee')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Must be between 2 and 10 chars'))
        cy.get('[data-test-id="last-name"]').type('Ayyyyyyyyyyy')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Must be between 2 and 10 chars'))
        cy.get('[data-test-id="phone-number"]').type('e23')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Phone number must be 10 digits'))
        cy.get('[data-test-id="dob"]').type('2040-06-12')
        cy.get('[data-test-id="address"]').type('Gh34JB2')
        cy.get('[data-test-id="submit-btn"]').click()
         cy.get('[data-test-id="user-info"]').should('not.exist')
     });
      it.skip('invalid input for phone number', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-test-id="first-name"]').type('Bertinaaaaa')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Must be between 2 and 10 chars'))
        cy.get('[data-test-id="middle-name"]').type('Weeee')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Must be between 2 and 10 chars'))
        cy.get('[data-test-id="last-name"]').type('Ayyyyyyyyyyy')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Must be between 2 and 10 chars'))
        cy.get('[data-test-id="phone-number"]').type('e2355665765786786')
        expect(cy.get('.sc-ifAKCX').should('contain', 'Phone number must be 10 digits'))
        cy.get('[data-test-id="dob"]').type('2040-06-12')
        cy.get('[data-test-id="address"]').type('Gh34JB2')
        cy.get('[data-test-id="submit-btn"]').click()
        cy.get('[data-test-id="user-info"]').should('not.exist')

     });
     
   
    



})