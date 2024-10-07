import path from 'path';
import { createHash } from "node:crypto";
import { open } from 'node:fs/promises';

const calculateHash = async () => {
    const dirrPath = process.cwd();
    const filePath = path.join(dirrPath, 'files', 'fileToCalculateHashFor.txt');
    const stream = await open(filePath);
    const readStream = stream.createReadStream();
    const fileText = [];
    readStream.on('data', chunk => fileText.push(chunk));
    readStream.on('close', () => {
        const hashText = createHash("sha256").update(fileText.join()).digest('hex');
        process.stdout.write(hashText);
    });
};

await calculateHash();