function beerAndChips(input)
{
   let name = input[0];
   let budget = Number(input[1]);
   let beerBottles = Number(input[2]);
   let chipsPackages = Number(input[3]);

   let beerPrice = 1.20 * beerBottles;
   let chipsPriceForOne = 0.45 * beerPrice;
   let chipsPrice = Math.ceil(chipsPriceForOne * chipsPackages);
   let sum = beerPrice + chipsPrice;
   let moneyLeft = Math.abs(budget - sum);

   if (budget >= sum)
   {
        console.log(`${name} bought a snack and has ${moneyLeft.toFixed(2)} leva left.`);
   }
   else
   {
        console.log(`${name} needs ${moneyLeft.toFixed(2)} more leva!`);
   }

}

beerAndChips(['Valentin', 5, 2, 4]);