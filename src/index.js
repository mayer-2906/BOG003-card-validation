import validator from './validator.js';

/*function mostrarCarrito(){
   document.getElementsByClassName("carrito").style.display="block"
    documento.style.display="block";
}*/
const tarjeta = document.querySelector("#tarjeta"),
      botonabrir=document.querySelector("#btn-formulario"),
      formulario=document.querySelector("#formulario1"),
      titular=document.querySelector("#dNombre"),
      botonEnviarDatos=document.getElementById("botonEnviarDatos");
      //botonValidar=document.getElementsByClassName("botonValidarC"),
      //inputNumTarjeta=document.querySelector("#numeroTarjeta");
var   realNumeroTarjeta="";

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');

})

botonabrir.addEventListener('click', ()=> {
    botonabrir.classList.toggle('active')
    formulario.classList.toggle('active');
})
/*
inputNumTarjeta.addEventListener('click',()=>{
    validarTarjeta();
})*/
/*
botonValidar.addEventListener('click', ()=>{

    document.getElementById("dnumero").innerHTML=inputNumTarjeta;
    validarTarjeta();

    //console.log(nuevaCadena);
    //console.log("regrese de maskify: "+numnuevo);
    //console.log(numnuevo.length);
    //return false;
})*/
botonEnviarDatos.addEventListener('click', ()=>{
    validarTarjeta();
    //return false;
})


function validarTarjeta(){
    var numtarjeta=document.getElementById("numeroTarjeta").value;
    //*let numeroTarj=numtarjeta.value;
    //console.log("estoy en validarTarjeta: "+numtarjeta);
    //var numnuevo=validator.maskify(numtarjeta);
    realNumeroTarjeta=numtarjeta.replace(/\D/g,"").replace(/\s/g,"");
    //console.log("volvi a validarTarjeta: "+numnuevo);
    if(isNaN(realNumeroTarjeta)){
        document.getElementById("numeroTarjeta").value="";
        alert("tarjeta no valida");
        return;
    }
    else{

    //document.getElementById("numeroTarjeta").value=numnuevo;        
        var numEnmascado=validator.maskify(realNumeroTarjeta);
        var esvalida=validator.isValid(realNumeroTarjeta);
        if(esvalida){
            document.getElementById("dNumero").innerHTML=realNumeroTarjeta.replace(/([0-9]{4})/g, '$1 ');
            document.getElementById("numeroTarjeta").value=numEnmascado;
            titular.innerHTML=document.getElementById("nombreT");
            alert("es una tarjeta valida");
            //console.log("es una tarjeta valida");}
        }
        else {
            alert("es una tarjeta no valida");
            //console.log("la tarjeta no es valida");
        }
    }
    //return false;
}


//console.log(validator);
