describe('General routs test', () => {
  it('Should menu for pages', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('Forms').click();
    cy.url().should('include', '/forms');
  });

  it('Should redirect to 404 page', () => {
    cy.visit('/404');
    cy.get('h1').should('contain', 'Not found cats (((');
  });

  it('Mock test', () => {
    expect(true).to.equal(true);
  });
});
