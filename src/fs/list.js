import path from 'path';
import { readdir } from "node:fs/promises";

const list = async () => {
    const currentPath = process.cwd();
    const dirrPath = path.join(currentPath, 'files');
    try {
        const files = await readdir(dirrPath);
        console.log(files);
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }
};

await list();