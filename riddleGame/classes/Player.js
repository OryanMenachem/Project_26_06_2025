import * as Colors from '../Colors.js';
import readline from 'readline-sync';

export class Player {

    constructor(name) {

        this.name = name;
        this.times = [];
    }

    recordTime(start, end) 
    {
        this.times.push(end - start);
    }

    showStats() {

        console.log(`Total time: `, Colors.cyanColor((this.times.reduce((acc, num) => acc + num, 0)/ 1000).toFixed(1)), ` seconds`);
        console.log(`Average time per question: `, Colors.cyanColor((this.times.reduce((acc, num) => acc + num, 0) / this.times.length / 1000).toFixed(1)), ` seconds`);
        
    }

}




export function inputplayerName() {
    
    let playerName;

    while (true) {
        
        console.log(`Please enter your name:  `);
        playerName = readline.question(Colors.cyanColor(`> `));

        if (playerName) {return playerName;}

        console.log(Colors.errorColor(`No name entered!`));
        
    }

}



export const inputDifficultyLevel = () => { 
    
    let difficultyLevel;

    while (true) {
        
    console.log('choose level: easy / medium / hard\n');
    difficultyLevel = readline.question(Colors.cyanColor('> '))

    if (['easy','medium','hard'].includes(difficultyLevel)) {return difficultyLevel;}

    console.log(Colors.errorColor('\nThere is no such level!\n'));
    

    }
}



