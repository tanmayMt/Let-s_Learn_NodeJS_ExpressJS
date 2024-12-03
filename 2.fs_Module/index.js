
const fs = require('fs');
// console.log(fs);

// How to create and write file using asynchronous method
fs.writeFile("demo1.txt", "My name is Rahul Das", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Successful")
    }
});

