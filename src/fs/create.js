import path from 'path';
import { writeFile } from "node:fs/promises";

const create = async () => {
    const fileText = 'I am fresh and young';
    const fileName = 'fresh.txt';
    const dirrPath = process.cwd();
    const filePath = path.join(dirrPath, 'files', fileName);
    try {
        await writeFile(
            filePath,
            fileText,
            { flag: 'wx' }
        );
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }    
};

await create();