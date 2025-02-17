const cont = "Mundo";

function saluda(){
    return "Hola Mundo";
}

<p data-id="texto">
    /* Hola {cont} */
    {saluda()}
</p>

// Output:
// ********************************************
//    var cont = "Mundo";
//    function saluda() {
//        return "Hola Mundo";
//    }
//    React.createElement("p", {
//        "data-id": "texto"
//    }, "/* Hola ", cont, " */", saluda());
// ********************************************