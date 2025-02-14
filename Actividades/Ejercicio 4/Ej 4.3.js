import { createInterface } from "readline";
import chalk from "chalk";
import { parse } from "path";

let userInt = createInterface({
    input: process.stdin, 
    output: process.stdout
})

userInt.question("Ingresa tu nombre:", (answer) => {
    console.log((`Nombre: ${answer}`)) ;

    userInt.question("Ingresa tu edad:", (answer) => {
        if(parseInt(answer) < 18){
            console.log(chalk.red(`Edad: ${answer}`));
        } else if(parseInt(answer) >= 18 && parseInt(answer) <= 65){
            console.log(chalk.green(`Edad: ${answer}`));
        } else {
            console.log(chalk.blue(`Edad: ${answer}`));
        }
        userInt.close();
    })
})