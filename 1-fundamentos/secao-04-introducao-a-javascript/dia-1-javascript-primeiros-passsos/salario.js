const salarioBruto = 2500;
let salarioLiquido = 0;
let aliquotaInss = 0;
let aliquotaIr = 0;
let parcelaIr = 0;

if(salarioBruto <= 1556.94) 
{
  aliquotaInss = 0.08 * salarioBruto;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92)
{
  aliquotaInss = 0.09 * salarioBruto;
  let salarioLiqParcial = salarioBruto - aliquotaInss;
  if(salarioLiqParcial >= 1903.99 && salarioBruto <= 2826.65)
  {
    aliquotaIr = 0.075 * salarioLiqParcial;
    parcelaIr = 142.80;   
  }
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82)
{
  aliquotaInss = 0.11 * salarioBruto;
  let salarioLiqParcial = salarioBruto - aliquotaInss;
  if(salarioLiqParcial >= 1903.99 && salarioLiqParcial <= 2826.65)
  {
    aliquotaIr = 0.075 * salarioLiqParcial;
    parcelaIr = 142.80;   
  }
  else if(salarioLiqParcial >= 2826.66 && salarioLiqParcial <= 3751.05)
  {
    aliquotaIr = 0.15 * salarioLiqParcial;
    parcelaIr = 354.80;   
  }
  else if(salarioLiqParcial >= 3751.06 && salarioLiqParcial < 4664.68)
  {
    aliquotaIr = 0.225 * salarioLiqParcial;
    parcelaIr = 636.13;   
  }
  else if(salarioLiqParcial >= 4664.68)
  {
    aliquotaIr = 0.275 * salarioLiqParcial;
    parcelaIr = 869.36;   
  }
}

salarioLiquido = (salarioBruto - aliquotaInss) - (aliquotaIr - parcelaIr);
console.log(salarioLiquido);