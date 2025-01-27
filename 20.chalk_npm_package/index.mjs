import express from "express";
import chalk from "chalk";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("<h1>This is Server Home Page</h1>");
});

const port = 4000;

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

app.listen(port, () => {
    console.log(chalk.blueBright("Server is Running at "+chalk.gray.bold(`http://localhost:${port}`)));
    console.log(chalk.green.italic("Tanmay - chalk.green.italic"));

    console.log(warning("This is a warning"));
    console.log(error("This is a error"));
});
