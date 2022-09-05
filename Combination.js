function Combination (input)
{
    let n = Number(input.shift());
    let validCombinationCounter = 0;

    for (let x1 = 0; x1 <= n; x1 += 2)
    {
        for (let x2 = 0; x2 <= n; x2 += 2)
        {
            for (let x3 = 0; x3 <= n; x3 += 2)
            {
                for (let x4 = 0; x4 <= n; x4 += 2)
                {
                    for (let x5 = 0; x5 <= n; x5 += 2)
                    {
                        if (validCombinationCounter == n)
                        {
                            console.log(x1 + x2 + x3 +x4 + x5);
                        }
                    }
                }
            }
        }
    }
}

Combination([25]);