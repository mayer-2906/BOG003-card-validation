const validator = {
  
  
  isValid(creditCardNumber){
    
    let suma=0;
    //console.log("aca validamos la tarjeta");
    //if(!isNaN(creditCardNumber)){
      let numInvertido=creditCardNumber.split('').reverse();
      //console.log("inverti la cadena: "+numInvertido);
      suma=parseInt(numInvertido[0]);
      for(let i=1;i<numInvertido.length;i++){  
          var num=parseInt(numInvertido[i]);
          //console.log("el numero en la posicion: "+i+" es: "+numInvertido[i]);     
          if(i%2===1){
              if((num*2)>9){
                  suma+=num*2-9;
                  //console.log("num*2-9 la suma va en: "+suma);
                }
              else{
                  suma+=num*2;
                  //console.log("num*2 la suma va en: "+suma);
                }
          }
          else{
              suma+=num;
              //console.log("num la suma va en: "+suma)
          }
      }
      if(suma%10==0)
        return true;
      return false;
    
    },

  maskify(creditCardNumber){
  
    let ultimosDigitos="";
    var cadenatrasform="";
    var cadena2="";
    var cadena3="";
    var nuevaCadena=creditCardNumber
      //eliminar espacios en blanco
    .replace(/\s/g, '')
    //   Eliminar las letras
    //.replace(/\D/g, '')
    // Ponemos espacio cada cuatro numeros
    //.replace(/([0-9]{4})/g, '$1 ')
    // Elimina el ultimo espaciado
    .trim();
    //console.log("estoy en maskify: "+nuevaCadena);
    //formulario.numeroTarjeta.value=nuevaCadena;
  
    /*if(nuevaCadena.length<14){
        alert("Faltan digitos del numero de Tarjeta");
        return "";
    }else{*/
      //realNumeroTarjeta=nuevaCadena;
      //document.getElementById("dNumero").innerHTML=nuevaCadena.replace(/([0-9]{4})/g, '$1 ');
      cadenatrasform=nuevaCadena.slice(0,-4);
      //console.log("primera parte:"+cadenatrasform);
      
      if(isNaN(Number(nuevaCadena))){
        cadena2=cadenatrasform.replace(/[a-z]/g,"#");
      }
      else{ cadena2=cadenatrasform.replace(/[0-9]/g,"#");}      
      //console.log("cadena transformada"+cadenatransform);
      ultimosDigitos=nuevaCadena.slice(-4);
      //console.log("ultimos 4 digitos"+ultimosDigitos);
      cadena3=cadena2+ultimosDigitos;
      return cadena3;
    
  }

  

};

export default validator;
