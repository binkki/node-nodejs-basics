import path from 'path';
import { unlink } from "node:fs/promises";

const remove = async () => {
    const dirrPath = process.cwd();
    const filePath = path.join(dirrPath, 'files', 'fileToRemove.txt');
    try {
        await unlink(filePath);
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }
};

await remove();