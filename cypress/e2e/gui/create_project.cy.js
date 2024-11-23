describe('criando um projeto', () => {

    beforeEach('logando', () =>{
        cy.login();
    })

    it('demonstrar criação do projeto', () => {
        cy.create_project();
    })

})