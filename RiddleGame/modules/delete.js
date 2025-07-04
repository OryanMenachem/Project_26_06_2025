import readline from 'readline-sync';
import * as fsp from 'node:fs/promises';
import dbContents from './read.js';
import * as colors from '../UI/colors.js';




export default async function deleteManager(dbPath) {

    let dbContent = await dbContents(dbPath);

    dbContent = JSON.parse(dbContent)

    const id = inputId();
    
    if (!deleteObj(dbContent, id)) {return}
    
    updateDB(dbContent);

}


function inputId() {

     let id;
    
     while(true) {
    
        console.log(`\nEnter the id of object:`);
        id = readline.question(`> `)
    
        if (id) {return id}
        
        console.log(colors.errorColor(`\nNo id entered!\n`));
        
        }

}

function deleteObj(dbContent, id) {
     
    for (let i = 0; i < dbContent.length; i++) {
    
        if (dbContent[i].id == id) {

            dbContent.splice(i, 1);

            return dbContent;
        }

    }
    console.log(colors.errorColor('No object with such id exists!'));
    return false;
}
    


async function updateDB(dbContent) {
    
    try {

        await fsp.writeFile(dbPath, JSON.stringify(dbContent, null, 2))

        console.log(colors.successColor('\nThe object was deleted successfully.\n'))
    } 

    catch(error) {console.log(colors.errorColor(`${error.message}\n`))}

}

  
   


// const dbPath = "C:/Users/om316/OneDrive/Desktop/JavaScript/Projects/Project_26_06_2025/DB/riddlesDB.txt"

// deleteManager(dbPath);