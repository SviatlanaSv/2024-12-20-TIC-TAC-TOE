describe('Tic Tac Toe App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('TIC TAC TOE').should('be.visible');
  });


  describe('Play with a Friend', () => {
    it('should display the game board "Play with a Friend"', () => {
      cy.get('[qa-name="friend-board"]').should('be.visible');
    });


    it('should alternate turns between X and O', () => {
      cy.get('[qa-name^="friend-cell-"]').eq(0).click().should('contain', 'X');
      cy.get('[qa-name^="friend-cell-"]').eq(1).click().should('contain', 'O');
    });


    it('should prevent double-clicking on the same cell', () => {
      cy.get('[qa-name^="friend-cell-"]').eq(0).click().should('contain', 'X').click()
        .should('contain', 'X'); 
    });


    it('should declare the winner', () => {
      // Simulate a winning for X
      const moves = [0, 3, 1, 4, 2];
      moves.forEach((index) => {
        cy.get('[qa-name^="friend-cell-"]').eq(index).click();
      });

      cy.get('[qa-name="friend-winner"]').should('contain', 'Winner: X');
    });


    it('should declare a draw', () => {
      const drawMoves = [0, 1, 2, 4, 3, 5, 7, 6, 8];
      drawMoves.forEach((index) => {
        cy.get('[qa-name^="friend-cell-"]').eq(index).click();
      });

      cy.get('[qa-name="friend-draw"]').should('contain', "It's a Draw!");
    });


    it('should reset the game board', () => {
      cy.get('[qa-name^="friend-cell-"]').eq(0).click();
      cy.get('[qa-name="friend-reset-button"]').click();
      cy.get('[qa-name^="friend-cell-"]').each(($cell) => {
        cy.wrap($cell).should('be.empty');
      });
    });
  });


  describe('Play with a Robot', () => {
    it('should display the game board "Play with a Robot" ', () => {
      cy.get('[qa-name="robot-board"]').should('be.visible');
    });


    it('should allow the robot to take its turn after the player', () => {
      // Player makes the first move
      cy.get('[qa-name^="robot-cell-"]').eq(0).click().should('contain', 'X');
      // Wait for the robot to take its turn
      cy.get('[qa-name^="robot-cell-"]').contains('O', { timeout: 1000 }); 
    });


    it('should prevent double-clicking on the same cell', () => {
      cy.get('[qa-name^="robot-cell-"]').eq(0).click().should('contain', 'X')
        .click().should('contain', 'X'); 
    });

  
    it('should declare the game is over when the game ends in Play with a Robot', () => {
      // Player move 
      cy.get('[qa-name^="robot-cell-"]').eq(0).click(); 
      cy.wait(700); // Wait for the robot move 
      
      cy.get('[qa-name^="robot-cell-"]').eq(1).click(); 
      cy.wait(700);
      
      cy.get('[qa-name^="robot-cell-"]').eq(3).click(); 
      cy.wait(700);
      
      cy.get('[qa-name^="robot-cell-"]').eq(4).click(); 
      cy.wait(700); 
      
      cy.get('[qa-name^="robot-cell-"]').eq(6).click(); 
      cy.wait(700); 

      cy.get('[qa-name^="robot-cell-"]').eq(2).click(); 
      cy.wait(700); 
      
      cy.get('[qa-name^="robot-cell-"]').eq(5).click(); 
      cy.wait(700); 
      
      cy.get('[qa-name="robot-winner"], [qa-name="robot-draw"]').should('be.visible') 
        .and(($message) => {
          expect($message.text()).to.match(/Winner:|It's a Draw!/); 
        });
    });
    

    it('should reset the game board', () => {
      cy.get('[qa-name^="robot-cell-"]').eq(0).click();
      cy.get('[qa-name="robot-reset-button"]').click();
      cy.get('[qa-name^="robot-cell-"]').each(($cell) => {
        cy.wrap($cell).should('be.empty');
      });
    });
  });
});
