import path from 'path';
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const compress = async () => {
    const dirrPass = process.cwd();;
    const filePath = path.join(dirrPass, 'files', 'fileToCompress.txt');
    const zipPath = path.join(dirrPass, 'files', 'archive.gz');
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(zipPath);
    var gzip = createGzip();
    readStream.pipe(gzip).pipe(writeStream);
};

await compress();