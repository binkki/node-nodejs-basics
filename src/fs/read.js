import path from 'path';
import { readFile } from "node:fs/promises";

const read = async () => {
    const dirrPath = process.cwd();
    const filePath = path.join(dirrPath, 'files', 'fileToRead.txt');
    try {
        const result = await readFile(filePath, 'utf8');
        console.log(result);
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }   
};

await read();