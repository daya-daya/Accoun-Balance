function Gymnastics(input)
{
    let country = String(input);
    let appliance = String(input);
    let totalScore = Number(input);
    let procent = Number(input);

    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${appliance}.`);
    console.log(`${procent.toFixed(2)}%`);
}

Gymnastics(['Bulgaria', 'ribbon']);