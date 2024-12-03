
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

// How to create and write file using synchronous method
var result = fs.writeFileSync("demo4.txt", "My name is Avik Sen");
    if(result){
        console.log(result);
    }else{
        console.log("Successful fs.writeFileSync()")
    }

// How to update file
fs.appendFile("demo1.txt", ". I am 30 years old", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Updated Successful")
    }
})

// read file
fs.readFile("demo1.txt", 'utf-8', (err, data)=>{   //utf encoding system
    if(err){
        console.log(err);
    }else{
        console.log(data)
    }
})

// How to rename file
fs.rename("demo1.txt", 'demo2.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("successfully renamed")
    }
})

// How to delete file
// fs.unlink('demo2.txt', (result)=>{
//     if(result){
//         console.log("successfully deleted");
//     }else{
//         console.log("successfully not deleted")
//     }
// })

// How to check the existance
fs.exists('demo2.txt', (result)=>{
    if(result){
        console.log("File found");
    }else{
        console.log("File not found!")
    }
})