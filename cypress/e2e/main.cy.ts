describe('Home page test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', 'https://mock-server-cats.vercel.app').as('getCats');
  });
  it('Should search cards of cats ', () => {
    cy.get('input[type=text]').type('брит{enter}');
    cy.get('[data-testid="card"]').should('have.length', 20);
  });

  it('modal window works', () => {
    cy.wait('@getCats');
    const card = cy.get('[data-testid="card"]').first();
    card.contains('See more...').click();
    // cy.contains('See more...').click();
    cy.contains('Бенедикт');
    cy.get('[class="modal-close"]').click();
  });
});
