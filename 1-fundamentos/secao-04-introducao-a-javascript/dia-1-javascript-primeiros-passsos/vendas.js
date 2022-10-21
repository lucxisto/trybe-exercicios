const custo = 12;
const valorVenda = 27;

const custoTotal = custo + (0.2 * valorVenda);

const lucro = valorVenda - custoTotal;
if(custo < 0 || valorVenda < 0){
  console.log("Erro! os valores não podem ser menores que zero")
}
console.log(lucro * 1000)