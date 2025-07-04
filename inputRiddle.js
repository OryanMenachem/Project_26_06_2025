import readline from 'readline-sync';
import addingRiddleToTheDB from './RiddleGame/modules/create.js'
import * as colors from './RiddleGame/UI/colors.js'

let counter = 18;

export default function createRiddle() {

    const riddle = {

     id: counter,
     category: inputCategory(),
     difficulty: inputDifficulty(),
     questionDescription : inputQuestionDescription(),
     correctAnswer : inputCorrectAnswer(),
     timeLimit : null

    };

    counter++; //   Increases the counter by one so that the id is always unique.
    
    return riddle;
}
    



function inputCategory() {

 let category;

 while(true) {

    console.log(`\nEnter the category of riddle:`);
    category = readline.question(`> `)

    if (category) {return category}
    
    console.log(colors.errorColor(`\nNo category entered!\n`));
    
    }
};


function inputDifficulty() {
     
    let difficulty;

    while(true) {

        console.log(`\nEnter the difficulty of riddle:`);
        difficulty = readline.question(`> `)

        if (difficulty) {return difficulty}
        console.log(colors.errorColor(`\nDifficulty level not entered!\n`));
        
        }
};


function inputQuestionDescription() {

 let questionDescription;

 while(true) {

    console.log(`\nEnter riddle description:`);
    questionDescription = readline.question(`> `)

    if (questionDescription) {return questionDescription}
    
    console.log(colors.errorColor(`\nRiddle description not entered!\n`));
    
    }
};


function  inputCorrectAnswer() {

 let correctAnswer;

 while(true) {

    console.log(`\nEnter the correct answer to the question:`);
    correctAnswer = readline.question(`> `)

    if (correctAnswer) {return correctAnswer}
    
    console.log(colors.errorColor(`\nNo answer entered!\n`));
    
    }
};


