import readline from 'readline-sync';



function showMenu() {
    
    console.log('Choose one of the following options: \n');
    
    console.log('************** MENU **************');
    console.log('* 1. Play the game               *');
    console.log('* 2. Create a new riddle         *');
    console.log('* 3. Read all riddles            *');
    console.log('* 4. Update an existing riddle   *');
    console.log('* 5. Delete a riddle             *');
    console.log('* 6. View leaderboard            *');
    console.log('**********************************\n');

}


function inputChoice() {

    let choice = readline.question('> ');
    return choice;
}


function choiceHandling(choice) {

    switch (choice) {
        case '1':
            return true;
        case '2':
            return true;
        case '3':
            return true;
        case '4':
            return true;
        case '5':
            return true;
        case '6':
            return true;
        default:
            console.log('\nOption does not exist!\n');
            return false;
        }
    }
            
            
export default function menuManager() {

    let rightChoice = true;

    do {

        showMenu();
        let choice = inputChoice();
        rightChoice = choiceHandling(choice);
    
    } while (!rightChoice)
}

menuManager();