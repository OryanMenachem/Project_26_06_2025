import readline from 'readline-sync';
import questionSet from './questions/allQuestions.js'
import {Question} from './classes/Riddle.js';
import {Player} from './classes/Player.js';
import * as Colors  from './Colors.js';








console.log(`\nWelcome to the` + Colors.cyanColor(` QUIZ `) + `game!\n`);

console.log(`At each stage you will have to answer a trivia question from a specific category until you finish all the questions.\n`);

let playerName;

while (true) {
    
    console.log(`Please enter your name:  `);
    playerName = readline.question(Colors.cyanColor(`> `));

    if (playerName) {break;}

    console.log(Colors.errorColor(`No name entered!`));
    
}


console.log(`\nHello ` + Colors.cyanColor(playerName) + `, starting right away...\n`);


const player1 = new Player(playerName);



let level;

while (true) {
    
   console.log('choose level: easy / medium / hard\n');
   level = readline.question(Colors.cyanColor('> '))
   if (['easy','medium','hard'].includes(level)) {break;}
   console.log(Colors.errorColor('\nThere is no such level!\n'));
   

}

for (const ques of questionSet) {

    if (ques.difficulty != level) {continue;}

    const questionsClass = new Question(ques);

    const startTime = Date.now();

    questionsClass.ask();

    const endTime = Date.now();

    player1.recordTime(startTime, endTime);

}

console.log(Colors.cyanColor(`Congratulations! `), `you won the QUIZ game.\n`);

player1.showStats();


    











