let getRamdonNumber = size => {
return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
 let diffx = e.offsetX - target.x;
 let diffY = e.offsetY - target.y;
 return Math.sqrt((diffx * diffx) + (diffY + diffY))
}

let getDistanceHint = distance => {
 if (distance < 30) {
     return "sigue adelante "
 } else if (distance < 40) {
     return "Tibio";
 }else if (distance < 60)  {
  return "Estas cerca";   
 } else if (distance < 100) {
     return "Sigue buscando";
 } else if (distance < 180) { 
   return "No te rindas"  
 } else if (distance < 360) {
   return "Frio";  
 } else {
   return " Demasiado frio";  
 }
}






