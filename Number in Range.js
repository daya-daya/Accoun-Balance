function numberInRange (input)
{
    let number = Number (input.shift());

    while (number < 1 || number > 100)
    {
        console.log('Invalid Number!');
        number = Number(input.shift());
    }
    console.log(`The number is: ${number}`);
}

numberInRange([105]);