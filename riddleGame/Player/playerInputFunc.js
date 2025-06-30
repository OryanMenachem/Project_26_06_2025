import readline from 'readline-sync';
import * as Colors from '../General/colors.js'

export function inputPlayerName() {
    
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

