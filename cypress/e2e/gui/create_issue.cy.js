describe('criando isssue', () => {

    beforeEach('logando na aplicação', () => {
        cy.login();
    })

    it('validar a criação da issue', () => {
        cy.create_issue();
    })
})