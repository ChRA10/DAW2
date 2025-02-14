import { createInterface } from "readline";
import chalk from "chalk";

let userInt = createInterface({
    input: process.stdin, 
    output: process.stdout
})

userInt.question("Ingresa tu nombre:", (answer) => {
    console.log(`Nombre: ${answer}`);

    userInt.question("Ingresa tu edad:", (answer) => {
        console.log(`Edad: ${answer}`);
        userInt.close();
    })
})