function footballSouvenirs(input)
{
    let team = input[0];
    let souvenier = input[1];
    let count = Number(input[2]);
    let sum = 0;
    let isValid = true;

    if (team === "Argentina")
    {
        switch (souvenier)
        {
            case 'flags': sum = 3.25 * count;
            break;
            case 'caps': sum = 7.20 * count;
            break;
            case 'posters': sum = 5.10 * count;
            break;
            case 'stickers': sum = 1.25 * count;
            break;
            default: 
            console.log('Invalid stock!')
            isValid = false;
            break;
        }
    }
    else if (team === 'Brazil')
    {
        switch (souvenier)
        {
            case 'flags': sum = 4.20 * count;
            break;
            case 'caps': sum = 8.50 * count;
            break;
            case 'posters': sum = 5.35 * count;
            break;
            case 'stickers': sum = 1.20 * count;
            break;
            default: 
            console.log('Invalid stock!')
            isValid = false;
            break;
        }
    }
    else if (team === 'Croatia')
    {
        switch (souvenier)
        {
            case 'flags': sum = 2.75 * count;
            break;
            case 'caps': sum = 6.90 * count;
            break;
            case 'posters': sum = 4.95 * count;
            break;
            case 'stickers': sum = 1.10 * count;
            break;
            default: 
            console.log('Invalid stock!')
            isValid = false;
            break;
        }
    }
    else if (team === 'Denmark')
    {
        switch (souvenier)
        {
            case 'flags': sum = 3.10 * count;
            break;
            case 'caps': sum = 6.50 * count;
            break;
            case 'posters': sum = 4.80 * count;
            break;
            case 'stickers': sum = 0.90 * count;
            break;
            default: 
            console.log('Invalid stock!')
            isValid = false;
            break;
        }
    }
    else
    {
        console.log('Invalid country!')
        isValid = false;
    }
    if (isValid)
    {
        console.log(`Pepi bought ${count} ${souvenier} of ${team} for ${sum.toFixed(2)} lv.`)
    }
}

footballSouvenirs(['Denmark', 'caps', 18]);