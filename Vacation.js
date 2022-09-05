function Vacation (input)
{
    let neededMoney = input.shift();
    let ownedMoney = input.shift();
    let spendCounter = 0;
    let daysCounter = 0;
    
    while (ownedMoney < neededMoney && spendCounter < 5);
    {
        let command = input.shift();
        let money = Number(input.shift());
        daysCounter++;
    }
    if (spendCounter == 5)
    {
        console.log('You cant save the money.');
        console.log(daysCounter);
    }
    if (ownedMoney >= neededMoney)
    {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}

Vacation([2000, 100, 'spend', 1200, 'save', 2000]);