// os, path

// const os = require('os');
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());

// console.log(__dirname);
// console.log(__filename);

const path = require('path');
// console.log(path);
const extaintionName = path.extname("index.html");
console.log(extaintionName);

const joinName = path.join(__dirname+"/view");
console.log(joinName);

const joinName1 = path.join(__dirname+"/../view");
console.log(joinName1);

const joinName2 = path.join(__dirname+"view");
console.log(joinName2);