import { readFile, readFileSync } from "node:fs";

/* Primera Forma */
readFile("infoSystem.txt", (err, data) => {if(err){console.error("Error, no se ha podido leer el fichero")}else{console.log(data.toString())}});

/* Segunda Forma */
let text = readFileSync("infoSystem.txt")
console.log(text.toString())