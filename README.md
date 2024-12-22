# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# 2024-12-20-TIC-TAC-TOE


## Project Overview  
This project is a **Tic Tac Toe** game built with React. The application allows users to play in **2 Player Mode**, where two users can take turns playing on the same device.  

The game features a reset button to restart the game and displays the winner when a player achieves a winning combination.

---

## Installation

### Prerequisites  
Ensure you have the following installed on your system:

- **Node.js** (Recommended: v18.x or v20.x)
- **npm** (comes with Node.js)

### Steps  
1. Clone the repository to your local machine:
   ```bash
   git clone <repository_url>
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
npm run cypress:run
```

---

## Features

### Gameplay  
- **2 Player Mode**: Players take turns making moves.

### User Interface  
- Displays the current player's turn.
- Highlights the winner when the game ends.
- A "Reset Game" button to restart the game.

### Testing  
The application is covered by Cypress end-to-end tests to ensure:
- The board displays correctly.
- Players can alternate turns.
- The winner is declared correctly.
- The reset functionality works as expected.

---

## Technologies Used  
- **React**: Frontend library for building the user interface.
- **Vite**: Build tool for blazing-fast development.
- **Cypress**: End-to-end testing framework.

---

## Future Improvements  
- Improve the AI to make strategic moves instead of random ones.
- Add animations for a better user experience.
- Enhance mobile responsiveness.

---