import { faker } from '@faker-js/faker';

beforeEach(() => cy.api_deleteProjects())

describe('Criando projeto', () => {
    const project = {
        name: `nome do projeto ${faker.datatype.uuid()}`,
        description: `descrição ${faker.random.words(5)}`
    };

    it('criar um projeto com sucesso', () => {
        cy.api_createProject(project)
            .then(response => {
                expect(response.status).to.equal(201);
                expect(response.body.name).to.equal(project.name);
                expect(response.body.description).to.equal(project.description);
            });
    });

});
