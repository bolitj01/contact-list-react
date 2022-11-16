describe('contacts', () => {
  // beforeEach(() => {
  //   cy.visit("/");
  // })

  it('adds a contact', () => {
    cy.visit("/");
    cy.get('[data-testid="contact"]').should("have.length", 0);
    cy.get('[data-testid="name"]').type("tommy");
    cy.get('[data-testid="phone').type("260-228-1489");
    cy.get('button').click();
    cy.get('[data-testid="contact"]');
    cy.get('[data-testid="contact"]').should("have.length", 1);
  })

  it('delete that same contact', () => {
    cy.get('[data-testid="contact"]').should("have.length", 1);
    cy.contains('Delete').click();
    cy.get('[data-testid="contact"]').should("have.length", 0);
    
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('add another user and delete', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('[data-testid="name"]').type('jim');
    cy.get('[data-testid="phone"]').type('2602221489');
    cy.get('button').click();
    cy.get('[data-testid="contact"] > :nth-child(1)').should('have.text', 'jim');
    cy.get('[data-testid="contact"] > :nth-child(2)').should('have.text', '2602221489');
    cy.get('[data-testid="contact"] > :nth-child(3)').should('have.text', 'Delete');
    /* ==== End Cypress Studio ==== */
  });
})