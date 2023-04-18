describe('Home page test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', 'https://mock-server-cats.vercel.app').as('getCats');
  });
  it('Should search cards of cats ', () => {
    cy.visit('/');
    cy.get('input[type=text]').type('брит{enter}');
  });
});
