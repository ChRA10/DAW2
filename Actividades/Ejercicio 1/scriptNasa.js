import { consultaNasa } from "./modules/consultaNasa.js";
/* Poner fecha Maxima */

let input = document.getElementById("fecha").value;
let div = document.getElementById("img");

document.addEventListener("change", (i) => {
  input = document.getElementById("fecha").value;

  let url = new URL("https://api.nasa.gov/planetary/apod");
  url.searchParams.set("api_key", "DEMO_KEY");
  url.searchParams.set("date", input);

  consultaNasa(url, div);
});


