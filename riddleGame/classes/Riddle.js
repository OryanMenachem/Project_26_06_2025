import readline, { question } from 'readline-sync';


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
            console.log();
            

            if (answer == this.correctAnswer) {

                console.log(`correct answer :)\n`);
                break;
            }

            console.log(`wrong answer :(\n`);
            
        }
   
        
    }
}
    




      


                
            








