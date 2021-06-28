import validator from './validator.js';

/*function mostrarCarrito(){
   document.getElementsByClassName("carrito").style.display="block"
    documento.style.display="block";
}*/
const tarjeta = document.querySelector("#tarjeta"),
      botonabrir=document.querySelector("#btn-formulario");

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');

});

botonabrir.addEventListener('click', ()=> {
    botonabrir.classList.toggle('active')
})





console.log(validator);
