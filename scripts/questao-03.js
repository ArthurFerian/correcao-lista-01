const notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0]

let media = 0;
let somaTotal = 0;
let notaAcimaMedia = 0;
let notaMaxima = notas[0];
let notaMinima = notas[0];



for (let i = 0; i < notas.length; i++) { // Fiz a soma total de todas as notas e depois fiz a divisão.
     somaTotal += notas[i];
}

media = somaTotal / notas.length;

console.log(`A média da turma é: ${media}`);

for (let i = 0; i < notas.length; i ++) { // Usei o if para descobrir as notas acima da média.
    if (notas[i] >= media) {
    notaAcimaMedia++
    }
}
console.log(`A quantidade de alunos que tiraram nota acima da média foi: ${notaAcimaMedia} alunos.`);

for (let i = 1; i < notas.length; i++) { // Usei o if para decobrir a  maior nota.
   if (notas[i] > notaMaxima) {
    notaMaxima = notas[i]
   }
    
}
console.log(`A maior nota foi: ${notaMaxima}`);

for (let i = 1; i < notas.length; i++) { // Usei o if para definir a nota minima.
    if (notas[i] < notaMinima) {
     notaMinima = notas[i]
    }
     
 }
 console.log(`A maior nota foi: ${notaMinima}`);