const path = require('path');

const getRegister = (req,res)=>{
    const filePath = path.join(__dirname, '..', 'views', 'registerForm.html');
    res.status(200).sendFile(filePath);
    //res.status(200).sendFile(__dirname+"../views/registerForm.html");
}

module.exports = getRegister;