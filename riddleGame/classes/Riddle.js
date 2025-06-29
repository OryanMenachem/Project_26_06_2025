import readline, { question } from 'readline-sync';
import * as Colors from '../Colors.js'



export class Question {

    constructor(questionObj) {

        this.id = questionObj.id;
        this.category = questionObj.category;
        this.questionDescription = questionObj.questionDescription;
        this.correctAnswer = questionObj.correctAnswer;
    }


    ask() {

        while (true) {

            console.log(`Question ${this.id}: ${this.category} `);
            console.log(`${this.questionDescription} `);

            const answer = readline.question(`> `);
 
            

            if (answer == this.correctAnswer) {

                console.log(Colors.successColor(`\ncorrect answer :)\n`));
                break;
            }

            console.log(Colors.mistakeColor(`\nwrong answer :(\n`));
            

            
        }
   
        
    }
}
    





                
            








