alert("bienvenido a Mis Delicias");
function datos(){ 
const usuario = prompt("ingrese usuario");
alert(`Sea bienvenido a su lugar especial ${usuario} un gusto de tenerlx con nosotros`)
}
datos();


let tortas = [

    {id:   1, nombre: "chescake" , precio: 1700    },

    {id:   2, nombre: "pastafrola" , precio: 1600   },

    {id:   3, nombre: "ricota", precio: 2000   },

    {id:    4, nombre: "macarons",   precio:   3000 },
];
 alert("Exquicitecez del dia");
 for (const cosasricas of tortas){
    alert(cosasricas.nombre)
 }





 const rey = prompt("ingrese nombre de prodcucto que desea"
)

 const producto = tortas.find ((item) => item.nombre === rey);
 if (producto){
     let mensaje = `
     id: ${producto.id},
     nombre: ${producto.nombre},
     precio: ${producto.precio},
     `;
     alert(mensaje);
 } else{
     alert("no se encuentra displonible el articulo")
 }
 
 function calculadora(num1, num2, operacion) {
      switch (operacion) {
         case "+":
           return num1 + num2;
           break;
    
         case "-":
      return num1 - num2;
       break;
    
     case "*":
       return num1 * num2;
       break;
    
     case "/":
       return num1 / num2;
       break;
    
     default:
       return "precios no encontrados";
       break;
   }
 }
    
     let numero1 = parseInt(prompt("ingrese el precio del primer producto"));
     let numero2 = parseInt(prompt("Ingrese el precio del segundo producto"));
     let operacion = prompt("Ingrese la operacion");
    
     let resultado = calculadora(numero1, numero2, operacion);
    
     alert(`El resultado de los precios es: ${resultado}`);

     