import * as messages from './RiddleGame/UI/consolePrinting.js';
import riddlesSet from './RiddleGame/Riddles/importRiddles .js';
import {inputPlayerName, inputDifficultyLevel} from './RiddleGame/Player/playerInputFunc.js';
import {Player} from './RiddleGame/Player/playerClass.js';
import {askAllRiddles} from './RiddleGame/Riddles/askAllRiddlesFunc.js'






// Prints a greeting message to the console.
console.log(messages.sayWelcome());  


// Prints a general description of the game to the console.
console.log(messages.displayInstructions());  


//  Asks the user for their name and stores it in a variable.
const playerName = inputPlayerName();  


// Prints a "Hello" message to the user in the console.
console.log(messages.sayHelloPlayer(playerName));  


// Creates a Player instance with the user's name.
const player1 = new Player(playerName);  


// Shows the user difficulty levels to choose from, and stores the user's choice in a variable.
const difficultyLevel = inputDifficultyLevel();  

// Loads questions into an array based on the difficulty the user chose.
const arrayOfQuestions = riddlesSet.filter((element => element.difficulty == difficultyLevel))  


// Asks all questions based on the chosen difficulty.
askAllRiddles(arrayOfQuestions, player1);   


// Prints a congratulation message to the console for winning the game.
messages.DisplaySuccessMessage();  


// Prints to the console the total game time and the average time the user took to answer each question.
player1.showStats();  




































































    











