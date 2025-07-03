import * as fsp from 'node:fs/promises';
import dbContents from './read.js';
import * as colors from '../UI/colors.js';




async function addingObjToTheDB(dbPath, obj) 
{
    let dbContentArray = await dbContents(dbPath);

    dbContentArray = JSON.parse(dbContentArray)
  
    obj.id = dbContentArray.length;   // Updates the id to the object's position in the array.
   
    dbContentArray.push(obj);

    try {

        await fsp.writeFile(dbPath, JSON.stringify(dbContentArray, null, 2))

        console.log(colors.successColor('The riddle was added successfully.\n'))
    } 

    catch(error) {console.log(colors.errorColor(`${error.message}\n`))}

}


