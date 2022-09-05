function Numbers (input)
{
    let n = Number(input.shift());

    for (let i = n; i > 0; i--)
    {
        console.log(i);
    }
}

Numbers([5]);