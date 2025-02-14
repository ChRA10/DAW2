import {writeFile} from "node:fs";
import { memoria, nCpus, sO, versionSo } from "./Ej 3.1.js";

let string = `${sO}\n${versionSo}\n${memoria}\n${nCpus}`;
/* Crear un fichero .txt recolectada del Ej 3.1 */
writeFile("infoSystem.txt", string, err => {if(err){console.log("Error, no se ha podido crear el archivo")}});