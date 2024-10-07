const parseEnv = () => {
    const prefix = 'RSS_';
    const result = [];
    Object.keys(process.env)
      .filter((key) => key.startsWith(prefix))
      .forEach((key) => {
        result.push(`${key}=${process.env[key]}`)
    });
    console.log(result.join('; '));
};

parseEnv();