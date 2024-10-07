import path from 'path';
import { rename as renameFile } from "node:fs/promises";

const rename = async () => {
    const dirrPath = process.cwd();
    const wrongfilePath = path.join(dirrPath, 'files', 'wrongFilename.txt');
    const correctfilePath = path.join(dirrPath, 'files', 'properFilename.md');
    try {
        await renameFile(wrongfilePath, correctfilePath);
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }   
};

await rename();