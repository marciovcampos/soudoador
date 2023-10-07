/* eslint-env es6 */
/* eslint-disable */
const fs = require('fs');
const path = require('path');

const dir = "src/environments";
const file = "environment.ts";
const prodFile = "environment.prod.ts";

const content = `$(process.env.FIREBASE DETAILS)`;

fs.access(dir, fs.constants.F_OK, (err) => {
    if(err) {
        // Directory doesn't exist
        console.log("src doesn't exist, creating now", process.cwd());
        // Create /src
        fs.mkdir(dir, {recursive: true}, (err) => {
            if (err) throw err;
        });
    }
    // Nou write to file
    try {
        fs.writeFilesync(dir + "/" + file, content);
        fs.writeFilesync(dir + "/" + prodFile, content);
        console. log( "Created successfully in", process.cwd());
        if(fs.existssync(dir + "/" + file)) {
            console.log("File is created", path.resolve(dir + "/" + file));
            const str = fs.readFilesync(dir + "/" + file).tostring();
            console. log(str);
        }
    } catch (error) {
            console. error(error);
            process .exit(1);
        }
});