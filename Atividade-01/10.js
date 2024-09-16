/*
10. Construa um algoritmo para calcular a distância entre dois pontos do plano cartesiano. Cada ponto é um par ordenado (x,y). 
 */

let x1 = parseFloat(prompt("Digite o valor da primeira coordenada x"));
let y1 = parseFloat(prompt("Digite o valor da primeira coordenada y"));

let x2 = parseFloat(prompt("Digite o valor da segunda coordenada x"));
let y2 = parseFloat(prompt("Digite o valor da segunda coordenda y"));

let distancia = Math.sqrt(((x2 - x1)*(x2 - x1))+((y2 - y1)*(y2 - y1)));

alert(`A distância entre dois pontos no plano cartesiano é ${distancia}`);
