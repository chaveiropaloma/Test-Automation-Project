/// <reference types= "cypress" />


const { it } = require("mocha");
 
describe('Ongs', () => { 
    it.skip('Deve poder realizar cadastro', () => {
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
        
        cy.get('[type="submit"]').click();
        cy.wait('@postOng').then((xhr) => {
            console.log(xhr)
            console.log(xhr.response.statusCode)
            expect(xhr.response.statusCode).be.equal(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        });

    });

    it('Deve poder realizar login', () => {
        
        cy.request({
            method: 'POST',
            url: 'https://bethehero-back.herokuapp.com/ongs',
            body: {
                city: "Goiânia",
                email: "onguii@gmail.com",
                name: "Onguii",
                uf: "GO",
                whatsapp: "62988885555"
                        }

        }).then(response => {


        });
    });
});

// city: "Goiânia"
// email: "onguii@gmail.com"
// name: "Onguii"
// uf: "GO"
// whatsapp: "62988885555"

