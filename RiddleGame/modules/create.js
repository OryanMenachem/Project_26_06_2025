import * as fsp from 'node:fs/promises';
import dbContents from './read.js';
import * as colors from '../UI/colors.js';




export default async function addingObjToTheDB(dbPath, obj) 
{
    let dbContentArray = await dbContents(dbPath);

    dbContentArray = JSON.parse(dbContentArray)
   
    dbContentArray.push(obj);

    try {

        await fsp.writeFile(dbPath, JSON.stringify(dbContentArray, null, 2))

        console.log(colors.successColor('\nThe object was added successfully.\n'))
    } 

    catch(error) {console.log(colors.errorColor(`${error.message}\n`))}

}


