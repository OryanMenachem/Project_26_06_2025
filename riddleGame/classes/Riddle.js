import readline from 'readline-sync';
import * as QUES from '../questions/allQuestions.js'

export class Question {

    


    constructor(setOfQuestions) {

        this.questionsArray = setOfQuestions;
    }


    ask() {

        if (!this.questionsArray) {return `Questions class not initialized with questions!` }

        for (const question of this.questionsArray) {

        while (true) {

            console.log(`Question ${question.id}: ${question.category} `);
            console.log(`${question.questionDescription} `);
            const answer = readline.question(`> `);

            if (answer == question.correctAnswer) {

                console.log(`correct answer :)`);
                break;
            }

            console.log(`wrong answer :(`);
            
        }
    }

                
            



    }
}







