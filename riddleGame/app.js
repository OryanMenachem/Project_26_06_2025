import readline from 'readline-sync';
import questionSet from './questions/allQuestions.js'
import {Question} from './classes/Riddle.js';
import {Player} from './classes/Player.js';
import * as Colors  from './Colors.js';








console.log(`\nWelcome to the` + Colors.cyanColor(` QUIZ `) + `game!\n`);

console.log(`At each stage you will have to answer a trivia question from a specific category until you finish all the questions.\n`);

let playerName;

while (true) {

    playerName = readline.question(`Please enter your name:  `);

    if (playerName) {break;}

    console.log(Colors.mistakeColor(`No name entered!`));
    
}


console.log(`\nHello ` + Colors.cyanColor(playerName) + `, starting right away.\n`);


const player1 = new Player(playerName);



for (const ques of questionSet) {

    const questionsClass = new Question(ques);

    const startTime = Date.now();

    questionsClass.ask();

    const endTime = Date.now();

    player1.recordTime(startTime, endTime);

}

console.log(Colors.successColor(`Congratulations, you won the QUIZ game.\n`));

player1.showStats();


    











