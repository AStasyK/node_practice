const fs = require('fs');

let 
    filename1 = process.argv[2],
    filename2 = process.argv[3];

let symCount = [];

//checking if args are given
if(filename1 && filename2) {
    
    //reading first file
    fs.readFile(filename1, 'utf8', (err, data) => {
        if (err) throw err;
        symCount.push({ [filename1]: data.length });
        
        // reading second file
        fs.readFile(filename2, 'utf8', (err, data) => {
            if (err) throw err;
            symCount.push({ [filename2]: data.length });
            
            // outputting number of symbols
            symCount.forEach((file) => {
                let key = Object.keys(file)[0];
                console.log('В файле ' + key + ' ' + file[key] + ' символов.');
            });
        });
    });
}
else console.log('Введите имена двух файлов в качестве переменных');