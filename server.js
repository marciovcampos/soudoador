/* eslint-env es6 */
/* eslint-disable */
const fs = require('fs');
const path = require('path');

const dir = "src/environments";
const file = "environment.ts";
const prodFile = "environment.prod.ts";

const content = `$(process.env.FIREBASE_DETAILS)`;

fs.access(dir, fs.constants.F_OK, (err) => {
    if (err) {
        // Directory doesn't exist
        console.log("src doesn't exist, creating now", process.cwd());
        // Create /src
        fs.mkdir(dir, { recursive: true }, (err) => {
            if (err) throw err;
            writeToFiles();
        });
    } else {
        writeToFiles();
    }
});

function writeToFiles() {
    try {
        fs.writeFileSync(path.join(dir, prodFile), content);
        fs.writeFileSync(path.join(dir, file), content);
        console.log("Created successfully in", process.cwd());
        if (fs.existsSync(path.join(dir, file))) {
            console.log("File is created", path.resolve(path.join(dir, file)));
            const str = fs.readFileSync(path.join(dir, file)).toString();
            console.log(str);
        }
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
