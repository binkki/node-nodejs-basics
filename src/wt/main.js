import { cpus } from "node:os";
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const cpusCount = cpus().length;
    const result = await Promise.allSettled(
        new Array(cpusCount).fill(0).map((x, i) => {
            return new Promise((resolve) => {
                const thread = new Worker('./worker.js', {workerData: {n: i + 10}});
                thread.on('message', (data) => {
                    resolve({
                        status: "resolved",
                        data: data
                    })
                });
                thread.on("error", (msg) => {
                    resolve({
                        status: "error",
                        data: null
                    })
                });
            });
        })
    );
    console.log(result.map((x) => x.value));
};

await performCalculations();