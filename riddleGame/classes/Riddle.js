import readline, { question } from 'readline-sync';
import * as QUES from '../questions/allQuestions.js'

export class Question {

    constructor(question) {

        this.id = question.id;
        this.category = question.category;
        this.questionDescription = question.questionDescription;
        this.correctAnswer = question.correctAnswer;
    }


    ask() {

        while (true) {

            console.log(`Question ${this.id}: ${this.category} `);
            console.log(`${this.questionDescription} `);

            const answer = readline.question(`> `);

            if (answer == this.correctAnswer) {

                console.log(`correct answer :)`);
                break;
            }

            console.log(`wrong answer :(`);
            
        }
   
        
    }
}
    




      


                
            








