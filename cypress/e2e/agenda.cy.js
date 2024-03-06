/// <reference types="cypress" />

describe('Teste de funcionalidades de agendamento', () => {

    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })


    it('Teste de inclusão', () => {
        
        cy.get('[type="text"]').type('Joao teste Cypress')
        cy.get('[type="email"]').type('abcdef@teste.com')
        cy.get('[type="tel"]').type('211234567')
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB').last().should('contain', 'Joao teste Cypress');
        it('Teste Remover', () => {
            cy.get('.sc-beqWaB').last().find('.delete').click();
            cy.get('.sc-beqWaB').last().should('not.contain', 'Joao teste Cypress');
        })
    });


    it('Teste Remover', () => {
       
        cy.get('[type="text"]').type('Maria teste Cypress')
        cy.get('[type="email"]').type('abcdef@teste.com')
        cy.get('[type="tel"]').type('211234567')
        cy.get('.adicionar').click()       
        cy.get('.sc-beqWaB').last().should('contain', 'Maria teste Cypress');        
         cy.get('.sc-beqWaB').last().find('.delete').click();       
         cy.get('.sc-beqWaB').last().should('not.contain', 'Maria teste Cypress');

    });

    it('Teste de edição', () => {
      
        cy.get('.edit').last().click();
        cy.get('input[placeholder="Nome"]').clear().type('Juca nome Editado');
        cy.get('input[placeholder="E-mail"]').clear().type('editado@teste.com');
        cy.get('input[placeholder="Telefone"]').clear().type('999999999');
        cy.get('.alterar').click();
        cy.get('.sc-beqWaB').last().should('contain', 'Juca nome Editado');
        cy.get('.sc-beqWaB').last().should('contain', 'editado@teste.com');
        cy.get('.sc-beqWaB').last().should('contain', '999999999');
    });
})