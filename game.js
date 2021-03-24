const WIDTH = 650;
const HEIGH = 400;

let target = {
x: getRamdonNumber(WIDTH),
y: getRamdonNumber(HEIGH)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0; 

$map.addEventListener('click', function (e) {
 clicks++;
 let distance = getDistance(e, target);
 let distanceHint = getDistanceHint(distance);
 $distance.innerHTML= `<h1>${distanceHint}</h1>`

 if (distance < 20) {
     alert (`Aqui esta el Tia Mery ${clicks} clicks!`);
     location.reload();
 }
})






