import { Transform } from "node:stream";

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk.toString().replace(/\n\r?$/g, '').split('').reverse().join('') + '\n')
        },
    });
    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();