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

        console.log(`Total time: `, Colors.cyanColor(this.times.reduce((acc, num) => acc + num, 0)/ 1000), ` seconds`);
        console.log(`Average time per question: `, Colors.cyanColor(this.times.reduce((acc, num) => acc + num, 0) / this.times.length / 1000), ` seconds`);
        
    }

}








// export function displayOrderTime(time) {

  
//     let timeStr =  Math.floor(time).toString();


//     if (timeStr.length < 3) {return `Unsignificant number (less than a second)`}



//     const result =  timeStr.slice(0,timeStr.length -2).padStart(4, '0').split('').map((val, i) => isZero(val, i))
//     result.splice(2, 0, ':')
//     return result.join('');
 





    
// }



// let temp = 1;


// function isZero(num, i, arr)  {

  
//   num = parseInt(num)

//   if (i == 3) {return num}

//   else if (i == 2) {
//     if (num == 0) {return num} 

//     if (num > 5) {temp = 1; return num % 6}
    
//     return num;
//   }
    

//   else if (i == 1) {
    
//     if (num == 0) { return num + temp}
//     return (num + temp) % 10
//    }
//   else {return num}
// };






// console.log(displayOrderTime(369345));





