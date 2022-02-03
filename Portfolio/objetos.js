var porfolio = {
    nombre: "",
    apellido: "",
    acercaDe: "",
    titulos: ["", ""]
};
function getNombre(nombre) {
    var nombre1 = document.getElementById("nombre");
    nombre1.textContent = nombre;
}
function getApellido(apellido) {
    var a = document.getElementById("apellido");
    a.textContent = apellido;
    return porfolio.apellido = apellido;
}
function getAcercaDe(acercaDe) {
    var a = document.getElementById("acercaDe");
    a.textContent = acercaDe;
    return porfolio.acercaDe = acercaDe;
}
function getTitulos(titulo1, titulo2) {
    var a = document.getElementById("apellido");
    a.textContent = titulo1, titulo2;
    return porfolio.titulos[0] = titulo1, porfolio.titulos[1] = titulo2;
}
function showFile1(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (progressEvent) {
        var s = reader.result.toString();
        console.log(s);
        var arr = s.split('/n');
        getNombre(arr[0]);
        getApellido(arr[1]);
        getAcercaDe(arr[2]);
        getTitulos(arr[3], arr[4]);
    };
}
