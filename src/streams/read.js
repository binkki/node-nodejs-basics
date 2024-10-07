import path from 'path';
import { open } from 'node:fs/promises';

const read = async () => {
    const dirrPath = process.cwd();
    const filePath = path.join(dirrPath, 'files', 'fileToRead.txt');
    const stream = await open(filePath);
    const readStream = stream.createReadStream();
    const result = [];
    readStream.on('data', chunk => result.push(chunk));
    readStream.on('close', () => {
        process.stdout.write(result.join())
    });
};

await read();