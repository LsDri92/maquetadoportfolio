interface persona {
    nombre: string;
    apellido: string;
    acercaDe: string;
    titulos: [string, string];
}

let porfolio: persona={
    nombre:"",
    apellido:"",
    acercaDe:"",
    titulos:["", ""],
}

function getNombre(nombre:string):void{
    const nombre1 = document.getElementById("nombre");
    nombre1.textContent=nombre;
}

function getApellido(apellido:string):string{
    const a = document.getElementById("apellido");
    a.textContent=apellido;
    return porfolio.apellido = apellido; 
}

function getAcercaDe(acercaDe:string):string{
    const a = document.getElementById("acercaDe");
    a.textContent=acercaDe;
    return porfolio.acercaDe = acercaDe; 
}

function getTitulos(titulo1:string, titulo2:string):string{
    const a = document.getElementById("apellido");
    a.textContent=titulo1, titulo2;
    return porfolio.titulos[0] = titulo1, porfolio.titulos[1] = titulo2; 
}

function showFile1(input): void {
    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload= function(progressEvent){
    var s=reader.result.toString();
    console.log(s);
    var arr = s.split('/n');
    getNombre(arr [0]);
    getApellido(arr [1]);
    getAcercaDe(arr[2]);
    getTitulos(arr[3], arr[4]);
    }
}

