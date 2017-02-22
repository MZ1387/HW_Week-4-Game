# HW - {Week-4-Game}
In this assignment, I created a fighting style game with a Rap Legends theme that dynamically updates HTML elements through jQuery. In this assignment I also made use of object oriented programming by having one object interact with the properties and methods of another object.


## Live Link (GitHub Pages)
- https://mz1387.github.io/HW_Week-4-Game/


## Requirements

1. When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.
2. The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.
3. The player chooses an opponent by clicking on an enemy's picture.
4. The player will now be able to click the attack button.
- Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture.
- The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.
5. The player will keep hitting the attack button in an effort to defeat their opponent.
6. When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.
7. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's  HP falls to zero or below.

## Concepts Implemented

- Dynamically updated HTML powered by JavaScript code
- Manipulated HTML elements based on user input

## Code Explanation
- User selects a player to use throughout the game and is prompted to compete against all remaining players
- If the user completes all of the "battles" then the user wins
- If the user's character runs out of health before defeating the remaining players then the game is over.
- The goal is to complete all of your "battles" without running out of energy.
