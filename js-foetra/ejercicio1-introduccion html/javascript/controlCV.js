console.log("funciona controlCV.js");

arrayMisEstudios = [
    "Microsoft SQL Server en UNLaM",
    "Java en UNLaM",
    "Power BI en EY",
    "C/C++ en UNLaM",
    "Javascript en IPFL",
];

let estudiosLista = document.getElementById("estudios");

// for(let valor of arrayMisEstudios) {
    
//     estudiosLista.insertAdjacentHTML("afterbegin", '<li>' + valor + '</li>');
// }

for(let valor of arrayMisEstudios) {

    let li = estudiosLista.createElement("li");
    li.innerHTML = '<li>' + valor + '</li>';    
}