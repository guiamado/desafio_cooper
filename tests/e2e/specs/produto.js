// https://docs.cypress.io/api/introduction/api.html

describe('Teste de Produtos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/produtos');
    cy.url().should('eq', 'http://localhost:8080/produtos');
  });
  
  it('Criar Produto', () => {
    cy.get('.v-card__text > .v-btn').click();
    cy.get(':nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Listerine');
    cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('150');
    cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('10');
    cy.get('.v-card__actions > :nth-child(3) > .v-btn__content').click();
  });
  
  it('Editar Produto', () => {
    cy.get(':nth-child(1) > :nth-child(6) > :nth-child(2) > .v-btn__content > .v-icon').click();
    cy.get(':nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Coca Cola');
    cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('121');
    cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('63');
    cy.get('.v-card__actions > :nth-child(3) > .v-btn__content').click();
  });
  
  it('Deletar Produto', () => {
    cy.get(':nth-child(1) > :nth-child(6) > :nth-child(1) > .v-btn__content > .v-icon').click();
  });
});
