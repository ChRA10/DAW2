import ReactDom from "https://esm.sh/react-dom@19.0.0-beta-04b058868c-20240508/client/?dev";
import React from "https://esm.sh/react@19.0.0-beta-04b058868c-20240508/?dev";

const divHtml = document.getElementById("app");

//Se crea la raiz a partir de la cual react va a renderizar
const root = ReactDom.createRoot(divHtml);

const button = React.createElement("button", {"data-id": 1234}, "Me gusta");
const button1 = React.createElement("button", {"data-id": 2345}, "Me gusta");
const button2 = React.createElement("button", {"data-id": 3456}, "Me gusta");

const div = React.createElement("div", null, [button, button1, button2]);
//No se puede renderizar codigo por seguridad, debes crearlo antes.
//Para incluir varios elementos dentro de uno se debe crear el elemento raiz.
root.render(div)


/////////////////////////////////////////////////////////////////////////
/* Mi ejemplo de React, puedes meterle atributos de forma sencilla sin necesidad de utilizar otros metodos */
const exampleCont = document.getElementById("example");
const rootExpample = ReactDom.createRoot(exampleCont);

const h2 = React.createElement("h2", {style: {"background-color": "yellow"}}, "Titulo");
rootExpample.render(h2);
