import {Riddle} from './riddleClass.js'

export function askAllRiddles(arrayOfRiddles, player) {
    
    for (const riddle of arrayOfRiddles) {

    const questionsClass = new Riddle(riddle);

    const startTime = Date.now();

    questionsClass.ask();

    const endTime = Date.now();

    player.recordTime(startTime, endTime);

   }
}



                
            