const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if error, reject promise
            if (err){
                reject(err);
                // return out of function
                return;
            }

            // If no error, execute
            resolve ({
                ok: true,
                message: 'File created'
            })
        })
    });
}

const copyFile = function () {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              reject(err)
              return;
            }
            resolve ({
                ok: true,
                message: 'File created'
            })
          });
    })
}

module.exports = { writeFile, copyFile };