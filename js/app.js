//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//Div donde se muestran los datos del automovil (RESULTADOS) 
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;


//Generando un objeto con la busqueda.

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//Cargando el documento HTML
document.addEventListener('DOMContentLoaded',  ()=>{

    mostrandoAutos(autos); //Mostrando los datos de los automoviles.

    llenandoElSelectYear() // Mostrando las fechas de los automoviles.
});

//EVENLISTENER PARA CADA SELECT

marca.addEventListener('change', e =>{
    const dato = e.target.value;

    datosBusqueda.marca = dato;

    filtrandoAuto();
});

year.addEventListener('change', e =>{
    const dato = e.target.value;

    datosBusqueda.year = dato;

    filtrandoAuto();

});

minimo.addEventListener('change', e =>{
    const dato = e.target.value;

    datosBusqueda.minimo = dato;
});

maximo.addEventListener('change', e =>{
    const dato = e.target.value;

    datosBusqueda.maximo = dato;
});

puertas.addEventListener('change', e =>{
    const dato = e.target.value;

    datosBusqueda.puertas = dato;
});

transmision.addEventListener('change', e =>{
    const dato = e.target.value;

    datosBusqueda.transmision = dato;
});

color.addEventListener('change', e =>{
    const dato = e.target.value;

    datosBusqueda.color = dato;
});

//Funciones: 

function mostrandoAutos(autos){
    limpiarHTML(); //Elimina el html de la primera vez que se recorre todo el objeto autos

    autos.forEach(auto =>{
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHtml = document.createElement('P');

        autoHtml.textContent = 
        `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Trasmision: ${transmision} - Precio:$${precio} - color: ${color} 
        `

        resultado.appendChild(autoHtml); //Agregando autos al HTML por cada iteracion 
    });
}

//Limpiando el HTML 
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenandoElSelectYear(){

    for(let yearsCar = max; yearsCar >= min; yearsCar--){

        const yearsCarHtml = document.createElement('OPTION');
        yearsCarHtml.textContent = yearsCar;

        year.appendChild(yearsCarHtml); //agredando cada año.
    }
}

function filtrandoAuto(){

    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

    mostrandoAutos(resultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;

    if(marca){
        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear(auto){
    const {year} = datosBusqueda;

    if(year){
        return auto.year === parseInt(year);
    }
    return auto;
}


