import path from 'path';
import { createWriteStream } from "node:fs";

const write = async () => {
    const dirrPath = process.cwd();
    const filePath = path.join(dirrPath, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath)
    process.stdin.pipe(writeStream);
};

await write();