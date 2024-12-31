### Hexlet tests and linter status:

[![Actions Status](https://github.com/CeJIDb/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/CeJIDb/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/76f61ba8e2ba0dfc44d0/maintainability)](https://codeclimate.com/github/CeJIDb/frontend-project-44/maintainability)

## Description

"Brain Games" is a set of five console games based on the concept of popular mobile applications for brain training. Each game asks questions that the player must answer correctly. After three correct answers, the game is considered won. Incorrect answers end the game and prompt the player to try again. The games include:

- Calculator: Solve arithmetic expressions.
- Progression: Find the missing number in a sequence.
- Even Number: Determine whether a number is even.
- Greatest Common Divisor (GCD): Calculate the greatest common divisor of two numbers.
- Prime Number: Determine whether a number is prime.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/CeJIDb/frontend-project-44.git
   ```
2. Navigate to the project directory:
   ```bash
   cd frontend-project-44
   ```
3. Install dependencies and create a symlink for executable files:
   ```bash
   make setup
   ```
   This will:

- Install all necessary dependencies using `npm ci`.
- Create symlinks for the game scripts using `npm link`.

4. Run any game by typing its name in the console, for example:
   ```bash
   brain-even
   ```

## Demo

You can watch a demo of the game in action:

[Brain-Even](https://asciinema.org/a/GRkARY2MXdIeCE8PyvVHtSglH)

[Brain-Calc](https://asciinema.org/a/rfLuK4H2gzEeMOgadxTewnLPx)

[Brain-GCD](https://asciinema.org/a/igHd60skGMvgFO5PZ6i7ZcvG7)

[Brain-Progression](https://asciinema.org/a/JkiMrjGSesRa2vTlmdbCgBCkI)

[Brain-Prime](https://asciinema.org/a/LqGY4Q9U2GY1JIG5gUGC8WyYC)
