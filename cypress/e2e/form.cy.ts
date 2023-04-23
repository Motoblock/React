describe('Forms page test', () => {
  it('Have input', () => {
    cy.visit('/forms');
    cy.get('input');
  });

  it('Should generate new card', () => {
    cy.visit('/forms');
    cy.get('#fieldName').type('vasy');
    cy.get('#fieldPrice').type('1000');
    cy.get('#fieldBreed').select('');
    cy.get('#fielsCatterys').select('');
    cy.get('#formCard').submit();
    cy.contains('The name must begin with a capital letter');
    cy.get('#fieldName').type('vasydddddddddddddddddddddddddddddddddddddddddddddddd');
    cy.get('#fieldPrice').type('1000000000000000');
    cy.get('#fieldAge').type('2023-04-24');
    cy.get('#formCard').submit();
    cy.contains('The name must be at least 2 letters and no more than 25');
    cy.contains('Specify the breed');
    cy.contains('Specify the cattery');
    cy.contains('The price is too high');
    cy.contains('At least 2 months');
    cy.contains('Specify the gender');
    cy.contains(' Only owners can add information ');
    cy.contains('Specify the foto');
    cy.get('#fieldName').type('vas123');
    cy.get('#formCard').submit();
    cy.contains('The name contains only letters');
    cy.get('#fieldName').clear();
    cy.get('#fieldName').type('Vasy');
    cy.get('#fieldAge').type('2022-11-01');
    cy.get('#fieldPrice').clear();
    cy.get('#fieldPrice').type('1000');
    cy.get('#fieldBreed').select('Британская');
    cy.get('#fielsCatterys').select('Compliment');
    cy.get('[type="radio"][value="1"]').click();
    cy.get('input[type=checkbox]').check();
    cy.get('input[type=file]').selectFile('src/assets/images/logo.png', { force: true });
    cy.get('#formCard').submit();
    cy.contains('The card was created successfully');
    cy.get('[data-testid="card"]').should('have.length', 1);
  });

  it('Mock test', () => {
    expect(true).to.equal(true);
  });
});
