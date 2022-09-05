function Number1toN (input)
{
    let n = Number(input.shift());

    for (let i = 1; i <= n; i+= 3)
    {
        console.log(i);
    }
}

Number1toN([15]);