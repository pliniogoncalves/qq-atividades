/*
 7. Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o início do ano. Esqueça a questão dos anos bissextos e considere sempre que um mês possui 30 dias
*/

let dia = parseInt(prompt("Digite o Dia"));
let mes = parseInt(prompt("Digite o mês"));

let dias_do_ano = ((mes - 1)*30)+dia;

alert(`Se passaram ${dias_do_ano} dias no ano`);
