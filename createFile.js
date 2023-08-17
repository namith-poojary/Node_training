const fs = require("fs");


async function createFile(filename, txt) {
    try {
        await fs.promises.writeFile(filename, txt);
        console.log("success");
    } catch (err) {
        console.log(err);
    }
}

createFile('newFile.txt', 'Creating a file using Node js');