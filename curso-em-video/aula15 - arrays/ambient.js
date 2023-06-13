let num = [3, 6, 4, 8, 1, 5];

// console.log(` ${num.sort()}`)

// for(let pos = 0; pos<num.length; pos++){
//     console.log(` ${num[pos]}`)
// }

// for(let pos in num){
//     console.log(`A Posicao ${pos}, tem o valor: ${num[pos]}`)
// }

let pos = num.indexOf(3);
if (pos == -1) {
  console.log(`O Valor nao foi encontrado`);
} else {
  console.log(`O Valor esta na posicao: ${pos}`);
}
