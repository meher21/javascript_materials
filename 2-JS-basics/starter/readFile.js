let fs = require('fs')

async function readFile(file) {
    return new Promise(function (resolve, reject) {
        var a = fs.readFile(file, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}