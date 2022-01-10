let numeroDeAlunos = 12;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    
   if (contador == 0) {
       console.log("O número atual é ZERO");
   } else if (contador % 2 == 0) {
       console.log(" O número " + contador + " é PAR")
   } else {
       console.log(`O número ${contador} é ÍMPAR`)
   }
}