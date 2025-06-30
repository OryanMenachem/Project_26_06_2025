import readline, { question } from 'readline-sync';
import * as Colors from '../General/colors.js'




export class Riddle {

    constructor(riddleObj) {

        this.id = riddleObj.id;
        this.category = riddleObj.category;
        this.difficulty = riddleObj.difficulty;
        this.riddleDescription = riddleObj.questionDescription;
        this.correctAnswer = riddleObj.correctAnswer;
        this.timeLimit = riddleObj.timeLimit;
    }


    ask() {

        while (true) {

            console.log(`\nRiddle ${this.id}:`, Colors.cyanColor(this.category), `\n`);

            console.log(`Difficulty Level:`, Colors.cyanColor(this.difficulty), `\n`);
            
            console.log(`${this.riddleDescription} \n`);

            const answer = readline.question(Colors.cyanColor(`> `));
 
            

            if (answer == this.correctAnswer) {

                console.log(Colors.successColor(`\ncorrect answer :)\n`));
                break;
            }

            console.log(Colors.errorColor(`\nwrong answer :(\n`));
            

            
        }
   
        
    }
}
    












