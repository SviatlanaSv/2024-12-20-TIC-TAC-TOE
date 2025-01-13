# 2024-12-20-TIC-TAC-TOE


## Project Overview  
This project is a **Tic Tac Toe** game 🎮 built with React. The application allows users to play in two modes:
- In **Play with a Friend Mode**, two users can take turns playing on the same device. 
- In **Play with a Robot Mode**, one player can challenge the AI, where the robot makes its moves automatically.

The game features a reset button to restart the game and displays the winner 🏆 when a player achieves a winning combination. Additionally, if no player wins and all spaces are filled, the game ends in a draw.


---

## Installation

### Prerequisites  
Ensure you have the following installed on your system:

- **Node.js** (Recommended: v18.x or v20.x)
- **npm** (comes with Node.js)

### Steps  
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/SviatlanaSv/2024-12-20-TIC-TAC-TOE.git
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

---

## Running the Application

### Development Mode  
To start the development server:
```bash
npm run dev
```

The application will be accessible at:
```
http://localhost:5173/
```


---

## Testing with Cypress  
This project includes Cypress tests to ensure functionality.

### Setting Up Cypress  
1. Install Cypress:
```bash
npm install cypress 
   ```

2. Open Cypress Test Runner:
```bash
npm run cypress:open
   ```

3. Run the tests located in the `cypress/e2e` folder.

### Running Tests in Headless Mode  
To execute the tests in headless mode:
```bash
npm run cypress:cli
```

---

## Features

### Gameplay  
- **Play with a Friend Mode**: Players take turns making moves against each other.
- **Play with a Robot Mode**: Players can play against an AI robot, which automatically makes its moves.

### User Interface  
- Displays the current player's turn.
- Highlight the winner or draw when the game is over.
- A "Reset Game" button to restart the game.
- Two game boards are available:
- **Play with a Friend Mode**: A board for 2-player gameplay.
- **Play with a Robot Mode**: A board for playing against the robot.

### AI in Play with a Robot Mode
- The robot makes simple moves based on an algorithm, taking turns against the player.
- The robot's moves are implemented with basic AI logic. (Future improvements will focus on enhancing the AI's strategy.)

### Testing  
The application is covered by Cypress end-to-end tests to ensure:
- The board displays correctly.
- Players can alternate turns.
- The winner is declared correctly.
- The reset functionality works as expected.

**📌All tests are located in the `cypress/e2e` folder.**

---

## Technologies Used  
- **React**: Frontend library for building the user interface.
- **Vite**: Build tool for blazing-fast development.
- **Cypress**: End-to-end testing framework.

---

## Future Improvements  
- Improve the AI to make strategic moves instead of random ones.
- Add animations for a better user experience.
- Add a timer to limit the time each player has to make a move.
- Add a feature to allow players to choose their own names.
- Add a feature to allow players to choose their own symbols.
- Add a feature to allow players to play on different devices.


---

Have a great game! 😉