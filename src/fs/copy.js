import path from 'path';
import { cp } from "node:fs/promises";

const copy = async () => {
    const dirrPath = process.cwd();
    const oldDirr = path.join(dirrPath, 'files');
    const newDirr = path.join(dirrPath, 'files_copy');
    try {
        await cp(
            oldDirr,
            newDirr,
            {
                recursive: true,
                errorOnExist: true,
                force: false,
            }
        );
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }
};

await copy();
