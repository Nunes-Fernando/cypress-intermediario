describe('Validação do logout', () => {

    beforeEach('logando', () =>{
        cy.login();
    })

    it('Realizar o logout da aplicação', () => {
        cy.logout();
    })

})