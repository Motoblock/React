describe('Home page test', () => {
  it('Should search cards of cats ', () => {
    cy.visit('/');
    cy.get('input[type=text]').type('брит{enter}');
    cy.get('[data-testid="card"]').should('have.length', 20);
    cy.get('input[type=text]').type('asdasdasdas{enter}');
    cy.get('[data-testid="card"]').should('have.length', 0);
    cy.contains('Ничего не найдено');
  });

  it('modal window works', () => {
    cy.visit('/');
    const card = cy.get('[data-testid="card"]');
    card.contains('See more...').click();
    cy.contains('Возраст');
    cy.contains('Порода');
    cy.contains('Питомник');
    cy.contains('Цена');
    cy.get('[data-testid="close"]').click();
  });

  it('Mock test', () => {
    expect(true).to.equal(true);
  });
});
