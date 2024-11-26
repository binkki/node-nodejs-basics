const parseArgs = () => {
    if (process.argv.length === 2) {
        console.log("please enter some arguments in console line");
        process.exit(1);
    }    
    const result = [];
    for (let i = 2; i < process.argv.length; i += 2) {
        const nextArgument = i + 1 < process.argv.length
            ? process.argv[i + 1]
            : "undefined";
        result.push(`${process.argv[i]} is ${nextArgument}`);
    }
    console.log(result.join(', '));
};


parseArgs();

