describe('Validation', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('#user_login')
      .type('root');

    cy.get('#user_password')
      .type('Nandonunes97@');
    
    cy.get('#new_user > .submit-container > .btn')
      .click();
    
    cy.get('.blank-state-row > [href="/projects/new"]')
      .as('Is present');
    
    cy.get('@Is present')
      .should('be.visible')
      
  })
})