import readline, { question } from 'readline-sync';
import * as Colors from '../Colors.js'



export class Question {

    constructor(questionObj) {

        this.id = questionObj.id;
        this.category = questionObj.category;
        this.difficulty = questionObj.difficulty;
        this.questionDescription = questionObj.questionDescription;
        this.correctAnswer = questionObj.correctAnswer;
    }


    ask() {

        while (true) {

            console.log(`\nQuestion ${this.id}:`, Colors.cyanColor(this.category), `\n`);
            console.log(`Difficulty Level:`, Colors.cyanColor(this.difficulty), `\n`);
            
            console.log(`${this.questionDescription} \n`);

            const answer = readline.question(Colors.cyanColor(`> `));
 
            

            if (answer == this.correctAnswer) {

                console.log(Colors.successColor(`\ncorrect answer :)\n`));
                break;
            }

            console.log(Colors.errorColor(`\nwrong answer :(\n`));
            

            
        }
   
        
    }
}
    





                
            








