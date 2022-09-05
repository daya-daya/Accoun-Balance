function stadiumIncome (input)
{
    let sectors = Number(input[0]);
    let capacity = Number(input[1]);
    let ticketPrice = Number(input[2]);

    let totalIncome = capacity * ticketPrice;
    let sectorIncome = totalIncome / sectors;
    let charitySum = (totalIncome - (sectorIncome * 0.75)) / 8;

    console.log(`Total income - ${totalIncome.toFixed(2)} BGN`);
    console.log(`Money for charity - ${charitySum.toFixed(2)} BGN`);
}

stadiumIncome([8, 10000, 3.25]);