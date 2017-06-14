const dependencies = require('../package.json').dependencies;
for(let key in dependencies) {
    if (dependencies.hasOwnProperty(key)) {
        console.log(key + ': ' + dependencies[key]);
    }
}