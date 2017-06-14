const fs = require('fs');

const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.length);
});
