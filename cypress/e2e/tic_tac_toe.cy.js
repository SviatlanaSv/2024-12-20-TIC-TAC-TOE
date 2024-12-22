describe('Tic Tac Toe', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display the game board', () => {
    cy.get('[data-qa="board"]').children().should('have.length', 9);
  });

  it('should alternate turns between X and O', () => {
    cy.get('[data-qa="turn"]').should('contain', 'Next Turn: X');
    cy.get('[data-qa="cell-0"]').click();
    cy.get('[data-qa="cell-0"]').should('contain', 'X');
    cy.get('[data-qa="turn"]').should('contain', 'Next Turn: O');
  });

  it('should declare the winner', () => {
    cy.get('[data-qa="cell-0"]').click(); // X
    cy.get('[data-qa="cell-3"]').click(); // O
    cy.get('[data-qa="cell-1"]').click(); // X
    cy.get('[data-qa="cell-4"]').click(); // O
    cy.get('[data-qa="cell-2"]').click(); // X
    cy.get('[data-qa="winner"]').should('contain', 'Winner: X');
  });

  it('should reset the game board', () => {
    cy.get('[data-qa="cell-0"]').click(); // X
    cy.get('[data-qa="cell-1"]').click(); // O
    cy.get('[data-qa="cell-2"]').click(); // X

    // Click the reset button
    cy.get('[data-qa="reset-button"]').click();

    // Verify the board is reset
    cy.get('[data-qa="board"]').children().each(($cell) => {
      cy.wrap($cell).should('be.empty');
    });

    // Verify the turn is reset
    cy.get('[data-qa="turn"]').should('contain', 'Next Turn: X');

    // Verify no winner is declared
    cy.get('[data-qa="winner"]').should('not.exist');
  });
});
