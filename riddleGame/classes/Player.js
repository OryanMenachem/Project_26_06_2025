import * as Colors from '../Colors.js'

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

        console.log(`Total time: ` + Colors.goldColor(this.times.reduce((acc, num) => acc + num, 0 )) + ` in milliseconds\n`);
        console.log(`Average time per question: ` + Colors.goldColor(this.times.reduce((acc, num) => acc + num, 0) / this.times.length) + ` in milliseconds`);
        
    }

}

