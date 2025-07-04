import * as fsp from 'node:fs/promises';
import dbContents from './read.js';
import * as colors from '../UI/colors.js';



async function deleteObj(dbContent) {
     
    for (let i = 0; i < dbContent.length; i++) {
    
        if (dbContent[i].id == id) {

            dbContent.splice(i, 1);

            return dbContent;
        }

    }
    console.log(colors.errorColor('No object with such id exists!'));
}
    


async function updateDB(dbContent) {
    
    try {

        await fsp.writeFile(dbPath, JSON.stringify(dbContent, null, 2))

        console.log(colors.successColor('\nThe object was deleted successfully.\n'))
    } 

    catch(error) {console.log(colors.errorColor(`${error.message}\n`))}

}

  
   
export default async function deleteManager(dbPath) {

    let dbContent = await dbContents(dbPath);

    dbContent = JSON.parse(dbContent)

    if (!deleteObj(dbContent)) {return}
    
    updateDB(dbContent);

}

