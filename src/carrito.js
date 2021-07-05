/*const tarjeta = document.querySelector("#tarjeta"),
      botonabrir=document.querySelector("#btn-formulario"),
      formulario=document.querySelector(".formulario"),
      botonValidar=document.queryCommandValue(".botonValidar");
      //inputNumTarjeta=document.getElementById("numeroTarjeta");
var  realNumeroTarjeta="";


tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');

});

botonabrir.addEventListener('click', ()=> {
    botonabrir.classList.toggle('active');
    formulario.classList.toggle('active');
});


botonValidar.addEventListener('click', ()=>{

    validarTarjeta();

    //console.log(nuevaCadena);
    //console.log("regrese de maskify: "+numnuevo);
    //console.log(numnuevo.length);
    //return false;
})

function validarTarjeta(){
    var numtarjeta=document.getElementById("numeroTarjeta").value;
    //*let numeroTarj=numtarjeta.value;
    //console.log("estoy en validarTarjeta: "+numtarjeta);
    var numnuevo=maskify(numtarjeta);
    //console.log("volvi a validarTarjeta: "+numnuevo);
    if(isNaN(numnuevo))
        document.getElementById("numeroTarjeta").value="**";
    document.getElementById("numeroTarjeta").value=numnuevo;
    var esvalida=isValid(realNumeroTarjeta);
    if(esvalida){
        alert("es una tarjeta valida");
        //console.log("es una tarjeta valida");}
    }
    else {
        alert("es una tarjeta no valida");
        //console.log("la tarjeta no es valida");
    }
}


/*
formulario.numeroTarjeta.addEventListener('keyUp', (e) =>{

    let inputNumeroTarjeta=e.target.value;

    let newnumeroTarjeta=validator.maskify(inputNumeroTarjeta);
    console.log("estoy en addEventListener: "+newnumeroTarjeta);
})*/

/*
function isValid(digitosTarj){
    
    let suma=0;
    //console.log("aca validamos la tarjeta");
    let numInvertido=digitosTarj.split('').reverse();
    //console.log("inverti la cadena: "+numInvertido);
    for(let i=0;i<numInvertido.length;i++){  
        var num=parseInt(numInvertido[i]);      
        if(i%2==0){
            if((num*2)>9)
                suma+=num*2-9;
            suma+=num*2;
        }
        else{
            suma+=num;
        }
    }
    if(suma%10==0)
        return true
    return false;
}

function maskify(crediCardNumber){
    
    let ultimosDigitos="";
    /*local maskify, cadenatransform*//*
    var cadenatrasform=null;

    var nuevaCadena=crediCardNumber
    //eliminar espacios en blanco
    .replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	//.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();
    //console.log("estoy en maskify: "+nuevaCadena);
    //formulario.numeroTarjeta.value=nuevaCadena;
    
    if(nuevaCadena.length<14){
        alert("Faltan digitos del numero de Tarjeta");
        return "";
    }else{
        realNumeroTarjeta=nuevaCadena;
        document.getElementById("dNumero").innerHTML=nuevaCadena.replace(/([0-9]{4})/g, '$1 ');
        cadenatrasform=nuevaCadena.slice(0,-4);
        //console.log("primera parte:"+cadenatrasform);
        /*local maskify, cadenatransform*//*
        cadenatransform=cadenatrasform.replace(/[0-9]/g,"#");
        //console.log("cadena transformada"+cadenatransform);
        ultimosDigitos=nuevaCadena.slice(-4);
        //console.log("ultimos 4 digitos"+ultimosDigitos);
        cadenatransform=cadenatransform+ultimosDigitos;
        return cadenatransform;
    }*/
    
    //console.log(nuevaCadena);
    
    //console.log("trasforme la cadena"+cadenatransform);
  /*
}
*/


//console.log(this.isValid("4083952015263"));
//console.log(this.maskify("4556364607935616"));