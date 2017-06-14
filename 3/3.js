const fs = require('fs');

let filename1 = process.argv[2];
let filename2 = process.argv[3];

fs.readFile(filename1, (err, data1) => {
    if(err) throw err;
    fs.readFile(filename2, (err, data2) => {
        if(err) throw err;
        let sum = Number(data1) + Number(data2);
        fs.writeFile('sum.txt', sum, (err) => {
            if(err) throw err;
            console.log('File has been saved!');
        });
    });
});