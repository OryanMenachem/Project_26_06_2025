import * as Colors from '../UI/colors.js';


export class Player {

    constructor(name) {

        this.name = name;
        this.times = [];
    }

    recordTime(start, end) 
    {
        this.times.push(end - start);
    }

    showStats() {

        console.log(`Total time: `, Colors.cyanColor((this.times.reduce((acc, num) => acc + num, 0)/ 1000).toFixed(1)), ` seconds`);
        console.log(`Average time per riddle: `, Colors.cyanColor((this.times.reduce((acc, num) => acc + num, 0) / this.times.length / 1000).toFixed(1)), ` seconds`);
        
    }

}






