import * as fsp from 'node:fs/promises'
import { json } from 'stream/consumers';


export default async function getDbContents(DBpath) {
    
    try {

       const dbContents = await fsp.readFile(DBpath, 'utf-8');


       if (!dbContents) { throw new Error('error'); }

       return dbContents;
    }

    catch (error) { return error.message }
}


