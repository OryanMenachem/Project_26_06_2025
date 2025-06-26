import readline from 'readline-sync';
import {questionSet} from './questions/allQuestions.js'
import {Question} from './classes/Riddle.js';
import {Player} from './classes/Player.js';

console.log(`Hello and welcome to the QUIZ game!\n`);

console.log(`At each stage you will have to answer a trivia question from a specific category until you finish all the questions.\n`);

let playerName;

while (true) {

    playerName = readline.question(`Please enter your name:  `);

    if (playerName) {break;}

    console.log(`No name entered!`);
    
}

console.log(`Starting...`);


const player1 = new Player(playerName);



for (const ques of questionSet) {

    const questionsClass = new Question(ques);

    const startTime = Date.now();

    questionsClass.ask();

    const endTime = Date.now();

    player1.recordTime(startTime, endTime);

}

console.log(`Congratulations, you won the QUIZ game.\n`);

player1.showStats();


    







