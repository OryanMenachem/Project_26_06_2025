import * as messages from './consolePrinting.js'
import questionSet from './questions/allQuestions.js'
import {askAllQuestions} from './classes/Question.js';
import {Player, inputplayerName, inputDifficultyLevel} from './classes/Player.js';






console.log(messages.sayWelcome());  // Prints a greeting message to the console.

console.log(messages.displayInstructions());  // Prints a general description of the game to the console.

const playerName = inputplayerName();  //  Asks the user for their name and stores it in a variable.

console.log(messages.sayHelloPlayer(playerName));  // Prints a "Hello" message to the user in the console.

const player1 = new Player(playerName);  // Creates a Player instance with the user's name.

const difficultyLevel = inputDifficultyLevel();  // Shows the user difficulty levels to choose from, and stores the user's choice in a variable.

const arrayOfQuestions = questionSet.filter((element => element.difficulty == difficultyLevel))  // Loads questions into an array based on the difficulty the user chose.

askAllQuestions(arrayOfQuestions, player1);  // Asks all questions based on the chosen difficulty.

messages.DisplaySuccessMessage();  // Prints a congratulation message to the console for winning the game.

player1.showStats();  // Prints to the console the total game time and the average time the user took to answer each question.




































































    











