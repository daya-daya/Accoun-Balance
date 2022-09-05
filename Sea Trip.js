function SeaTrip(input)
{
    let moneyFood = Number(input[0]);
    let moneySouvenirs = Number(input[1]);
    let moneyHotel = Number(input[2]);
    let gasoline = Number(input.shift([3]));

    let gasolineNecessary = 420 / 100 * 7;
    let firstDay = moneyHotel * 0.9;
    let secondDay = moneyFood * 0.85;
    let thirdDAy = moneySouvenirs * 0.8;
    let totalMoney = (firstDay / (secondDay * thirdDAy) - gasoline); 

    console.log(`Money needed: ${totalMoney.toFixed(2)}`);
}

SeaTrip([200, 200, 1000]);