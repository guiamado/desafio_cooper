// https://docs.cypress.io/api/introduction/api.html

describe('Teste de Pedidos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/pedidos');
    cy.url().should('eq', 'http://localhost:8080/pedidos');
  });

  it('Criar Pedido', () => {
    cy.get('.v-card__text > .v-btn').click();
    cy.get(':nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Francisco');
    cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Jose');
    cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-menu > .v-menu__content > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('23');
    cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-menu > .v-menu__content > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('75600855');
    cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('df');
    cy.get(':nth-child(9) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Brasilia');
    cy.get(':nth-child(10) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Vicente Pires');
    cy.get(':nth-child(11) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Rua 12');
    cy.get(':nth-child(12) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('16');
    cy.get('.v-card__actions > :nth-child(3) > .v-btn__content').click();
  });

  it('Editar Pedido', () => {
    cy.get(':nth-child(1) > :nth-child(10) > :nth-child(2) > .v-btn__content > .v-icon').click();
    cy.get(':nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Jorge');
    cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Cleber');
    cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-menu > .v-menu__content > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('25');
    cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
    cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-menu > .v-menu__content > .v-select-list > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();
    cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('75663855');
    cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('ba');
    cy.get(':nth-child(9) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Prado');
    cy.get(':nth-child(10) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Alcobaca');
    cy.get(':nth-child(11) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('Rua 17');
    cy.get(':nth-child(12) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type('530');
    cy.get('.v-card__actions > :nth-child(3) > .v-btn__content').click();
  });

  it('Deletar Pedido', () => {
    cy.get(':nth-child(1) > :nth-child(10) > :nth-child(1) > .v-btn__content > .v-icon').click();
  });
});
