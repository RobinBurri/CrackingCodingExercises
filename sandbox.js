const { exec } = require("child_process");

// Replace 'ls' with the desired shell command
exec("ls " + "-la", (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Stdout: ${stdout}`);
    const regex = /leetCodes/gi;
    const match = stdout.match(regex);
    if (!match) {
        console.log(`${regex} not found`);
    } else {
        console.log(match);
    }
});
