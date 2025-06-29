import readline, { question } from 'readline-sync';
import * as Colors from '../Colors.js'



export class Question {

    constructor(questionObj) {

        this.id = questionObj.id;
        this.category = questionObj.category;
        this.difficulty = questionObj.difficulty;
        this.questionDescription = questionObj.questionDescription;
        this.correctAnswer = questionObj.correctAnswer;
        this.timeLimit = questionObj.timeLimit;
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
    



export function askAllQuestions(arrayOfQuestions, player) {
    
    for (const ques of arrayOfQuestions) {

    const questionsClass = new Question(ques);

    const startTime = Date.now();

    questionsClass.ask();

    const endTime = Date.now();

    player.recordTime(startTime, endTime);

   }
}



                
            








