  let eresmayor = parseInt(prompt("Ingrese su edad, para poder iniciar sesion"))
  if (eresmayor >= 18){
    alert ("puedes iniciar")
  } else {
     alert ("no puedes iniciar")
 }


 let equipo = parseInt (prompt("ingrese tipo de club y te aparecerá su apodo")) 
 while (equipo != "el podo es"){
switch (equipo){
     case "river":
         alert("millonarios");
         break;
         case "boca":
             alert("xeneize");
             break;
             case "independiente":
                 alert("el rojo");
                 break;
                 default:
                     alert("no es un club");
                     break;
 }
 equipo = prompt("ingrese club")
 }

const resta = (a , b) =>{
    return a - b;
}
console.log(resta(5 , 9));