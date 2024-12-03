
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

// How to update file
fs.appendFile("demo1.txt", ". I am 30 years old", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Updated Successful")
    }
})