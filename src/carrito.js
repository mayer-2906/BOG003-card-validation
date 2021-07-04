const tarjeta = document.querySelector("#tarjeta"),
      botonabrir=document.querySelector("#btn-formulario"),
      formulario=document.querySelector(".formulario"),
      inputNumTarjeta=document.getElementById("numeroTarjeta");


tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');

});

botonabrir.addEventListener('click', ()=> {
    botonabrir.classList.toggle('active');
    formulario.classList.toggle('active');

});

function validarTarjeta(){
    var numtarjeta=document.getElementById("numeroTarjeta").value;
    //*let numeroTarj=numtarjeta.value;
    console.log("estoy en validarTarjeta: "+numtarjeta);
    var numnuevo=maskify(numtarjeta);
    console.log("volvi a validarTarjeta: "+numnuevo);
    if(isNaN(numnuevo))
        document.getElementById("numeroTarjeta").value="**";
    document.getElementById("numeroTarjeta").value=numnuevo;
    //console.log(nuevaCadena);
    //console.log("regrese de maskify: "+numnuevo);
    //console.log(numnuevo.length);
    //return false;

}
/*
formulario.numeroTarjeta.addEventListener('keyUp', (e) =>{

    let inputNumeroTarjeta=e.target.value;

    let newnumeroTarjeta=validator.maskify(inputNumeroTarjeta);
    console.log("estoy en addEventListener: "+newnumeroTarjeta);
})*/


function isValid(){
    let siEsValida=false;
    console.log("aca validamos la tarjeta");
  
    return siEsValida;
}
  
function maskify(crediCardNumber){
    
    let ultimosDigitos="";
    let cadenatrasform="";

    let nuevaCadena=crediCardNumber
    //eliminar espacios en blanco
    .replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	//.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();
    console.log("estoy en maskify: "+nuevaCadena);
    //formulario.numeroTarjeta.value=nuevaCadena;
    
    if(nuevaCadena.length<14){
        alert("Faltan digitos del numero de Tarjeta");
        return "";
    }else{
        document.getElementById("dNumero").innerHTML=nuevaCadena.replace(/([0-9]{4})/g, '$1 ');
        cadenatrasform=nuevaCadena.slice(0,-4);
        console.log("primera parte:"+cadenatrasform);
        cadenatransform=cadenatrasform.replace(/[0-9]/g,"#");
        console.log("cadena transformada"+cadenatransform);
        ultimosDigitos=nuevaCadena.slice(-4);
        console.log("ultimos 4 digitos"+ultimosDigitos);
        cadenatransform=cadenatransform+ultimosDigitos;
        return cadenatransform;
    }
    
    //console.log(nuevaCadena);
    
    //console.log("trasforme la cadena"+cadenatransform);
  
}