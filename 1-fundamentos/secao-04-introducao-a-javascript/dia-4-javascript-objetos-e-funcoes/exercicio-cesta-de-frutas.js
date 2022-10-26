function fruitBasket(basket){
  let organizedBasket = {};
  let quantityOfFruit = 0;
  for(let indexPrimary = 0; indexPrimary < basket.length; indexPrimary++){
    for(let indexSecondary = 0; indexSecondary < basket.length; indexSecondary++){
      if(basket[indexPrimary] === basket[indexSecondary]){
        quantityOfFruit++
      }
      organizedBasket[basket[indexPrimary]] = quantityOfFruit;
    }
    quantityOfFruit = 0;
  }
}