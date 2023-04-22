describe('Forms page test', () => {
  it('Have input', () => {
    cy.visit('/forms');
    cy.get('input');
  });

  it('Should generate new card', () => {
    cy.visit('/forms');
    cy.get('#fieldName').type('Vasy');
    cy.get('#fieldPrice').type('1000');
    cy.get('#fieldAge').type('2022-11-01');
    cy.get('#fieldSex').type('1');
    cy.get('#fieldBreed').select('Британская');
    cy.get('#fielsCatterys').select('Compliment');
    cy.get('#fielsCounts').check();
    cy.get('input[type=file]').selectFile('src/assets/images/logo.png', { force: true });
    cy.get('#formCard').submit();
  });

  it('Mock test', () => {
    expect(true).to.equal(true);
  });
});
