function Sushi (input) 
{
    let typeSushi = input[0];
    let restaurantName = input[1];
    let TotalPrice = Number(input[2]);
    let order = Symbol['Y'];

    if (restaurantName === 'Sushi Zone')
    {
        switch (typeSushi)
        {
        case 'Sashimi' : 4.99 * 4;
        break;
        case 'Maki' : 5.29 * 4;
        break;
        case 'Urakami' : 5.99 * 4;
        break;
        case 'Temaki' : 4.29 * 4;
        break;
        case order : Symbol['Y'];
        break;
        default :
        console.log(`Total price: ${TotalPrice} lv.`);
        break;
        }
    }
    else if (restaurantName === 'Sushi Bar')
    {
        switch (typeSushi)
        {
            case 'Sashimi' : price = 5.25 * 4;
            break;
            case 'Maki' :  price = 5.55 * 4;
            break;
            case 'Urakami' : price = 6.25 * 4;
            break;
            case 'Temaki' : price = 4.75 * 4;
            break;
            case order: Symbol;
            break;
            default :
            console.log(`Total price: ${TotalPrice} lv.`);
            break;
        }
    }
    else if (restaurantName === 'Sushi Time')
    {
        switch (typeSushi)
        {
            case 'Sashimi' : order = 5.49 * 4;
            break;
            case 'Maki' : order = 4.69 * 4;
            break;
            case 'Urakami' : order = 4.49 * 4;
            break;
            case 'Temaki' : order = 5.19 * 4;
            break;
            case order: Symbol;
            break;
            default :
            console.log(`Total price: ${TotalPrice} lv.`);
            break;
        }
    }
    else if (restaurantName === 'Asian Pub')
    {
        switch (typeSushi)
        {
            case 'Sashimi' : order = 4.50 * 4;
            break;
            case 'Maki' : order = 4.80 * 4;
            break;
            case 'Urakami' : order = 5.50 * 4;
            break;
            case 'Temaki' : order = 5.50 * 4;
            break;
            case order : Symbol;
            break;
            default :
            console.log(`Total price: ${TotalPrice} lv.`);
            break;
        }
    }
    else
    {
        console.log('SASA is invalid restaurant!');
    }
}

Sushi(['Maki', 'Sushi Zone', 4, 'Y']);