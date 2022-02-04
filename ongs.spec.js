/// <reference types= "cypress" />


const { it } = require("mocha");
 
describe('Ongs', () => { 
    it('Deve poder realizar cadastro', () => {
        cy.visit('https://bethehero-frontend.netlify.app/register') 
        //cy.get - busca um elemento
        //.type - insere um texto
        cy.get('[placeholder="Nome da ONG"]').type('Dogy.catys')
        cy.get('[placeholder="E-mail"]').type('email-email@email.com')
        cy.get('[placeholder="Whatsapp"]').type('62966996963')
        cy.get('[placeholder="Cidade"]').type('Goiania')
        cy.get('[placeholder="UF"]').type('Go')

        //routing 
        //start server com cy.server
        //criar rota com cy.route
        //atribuir rota a alias
        //esperar com cy.wait e fazer uma validação

    
        cy.intercept('POST', '**/ongs').as('postOng');
        cy.wait('@postOng').then((xhr) => {
         expect(xhr.status).be.eq(200)
      })


     


        cy.get('[type="submit"]').click()
    });
    it('Deve poder realizar login', () => {
        
    });
});


