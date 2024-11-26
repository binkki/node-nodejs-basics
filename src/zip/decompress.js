import path from 'path';
import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";

const compress = async () => {
    const dirrPass = process.cwd();;
    const filePath = path.join(dirrPass, 'files', 'fileToCompress.txt');
    const zipPath = path.join(dirrPass, 'files', 'archive.gz');
    const readStream = createReadStream(zipPath);
    const writeStream = createWriteStream(filePath);
    var gzip = createUnzip();
    readStream.pipe(gzip).pipe(writeStream);
};

await compress();