Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
) => {
    const login = () => {
        cy.visit('/')

        cy.get('#user_login')
            .type(user);
  
        cy.get('#user_password')
            .type(password);
      
        cy.get('#new_user > .submit-container > .btn')
            .click();
      
        cy.get('.blank-state-row > [href="/projects/new"]')
            .as('Is present');
      
        cy.get('@Is present')
            .should('be.visible');
    }

    login();
})

Cypress.Commands.add('logout', () => {
    const logout = () => {
        cy.get('.header-user-dropdown-toggle')
            .as('sub-menu');
        
        cy.get('@sub-menu')
            .click();
        
        cy.get('.sign-out-link')
            .click();
    }

    logout();
})

Cypress.Commands.add('create_project', () => {

    const createProject = () => {
        cy.get('[href="/projects/new"] > .blank-state-body > .blank-state-text')
            .as('createProject');
    
        cy.get('@createProject')
            .click();
    
        cy.get('#blank-project-name > .project-name > #project_name')
            .type('Projeto_teste');

        cy.get(':nth-child(5) > #project_description')
            .type('testes automatizados com cypress');
    
        cy.get('#project_initialize_with_readme')
            .click();
        
        cy.get('#blank-project-pane > #new_project > .btn-success')
            .click()
    }

    createProject();

})