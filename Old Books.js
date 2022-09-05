function OldBooks (input)
{
    let favoriteBook = input.shift();
    let numbersOfBooks = Number(input.shift());
    let counter = 0;
    let bookIsFound = false;
    let nextBookName = input.shift();

    while (counter < numbersOfBooks)
    {
        if (nextBookName == favoriteBook)
        {
            bookIsFound = true;
            break;
        }
        counter++;
        nextBookName = input.shift();
    }
    if (bookIsFound == false)
    {
        console.log('The book you search is not here!');
        console.log(`You checked ${numbersOfBooks} books.`);
    }
    else
    {
        console.log(`You checked ${counter} books and found it.`);
    }
}

OldBooks(['Bourne', 32, 'True Story', 'Forever', 'More Space', 'The Girl', 'Spaceship', 'Strongest', 'Profit', 'Tripple', 'Stella', 'The Matrix', 'Bourne']);