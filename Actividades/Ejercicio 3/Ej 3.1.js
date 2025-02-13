import {version, machine, totalmem, cpus} from "node:os";

let sO = "Sistema operativo: " + version;
let versionSo = "Version SO: " + machine;
let memoria = "Memoria Total: " + totalmem + "MB";
let nCpus = "Nª CPUs: " + cpus().length;


console.log(sO);
console.log(versionSo);
console.log(memoria);
console.log(nCpus);


export{sO, versionSo, memoria, nCpus};