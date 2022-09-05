function tennis(input)
{
    let priceTennisRocket = input.shift();
    let numberTennisRocket = Math.round(0);
    let numberSneakers = Math.round(0);

    let totalCost = priceTennisRocket * numberSneakers * numberTennisRocket;
    let totalPrice = totalCost * 1/8;
    let Total = totalPrice * 7/8;

    console.log(`Price to be paid by Djokovic ${totalPrice.toFixed(0)}`);
    console.log(`Price to be paid by sponsors ${totalCost.toFixed(0)}`);

}

tennis([1000, 3, 7]);