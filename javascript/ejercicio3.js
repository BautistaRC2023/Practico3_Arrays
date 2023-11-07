/*Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
repitiendo 50 veces esta operación.*/

const apariciones =[ ];

for(let i = 0 ; i<=12; i++){
    apariciones.push(0);
}
for(let indicedeaparicion = 0 ; indicedeaparicion <50 ; indicedeaparicion++){
let numerorandom1 = math.floor(math.random() * 6) + 1;
let numerorandom2 = math.floor(math.random() * 6) + 1;
let sumanumerosrandom = numerorandom1 + numerorandom2;

apariciones[sumanumerosrandom]++;


}
document.write('<table>');
document.write('<tr><th>Numero</th><th>apariciones</th></tr>');

for (let i = 2 ; i<= 12; i++){
    document.write('<tr> <td>${i}</td><td>${apariciones[i]}</td></tr>');

}

document.write('</table>');



