function Graduation(input)
{
    let excluded = 0;
    let isExcluded = false;
    let counter = Number(input.shift());
    let sum = Number(input.shift());

    while (counter <= 12)
    {
        let grade = Number(input.shift());

        if (grade < 4.0)
        {
            excluded++;
        }

        if (grade >= 4.00)
        {
            sum += grade;
            counter ++;
        }

        if(excluded >= 2)
        {
            isExcluded = true;
            break;
        }
    }

    if (isExcluded == false)
    {
        let average = sum / 12;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
    else
    {
        console.log(`${name} has been excluded at ${counter} grade`);
    }
}

Graduation(['Gosho', 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 5.43, 5]);