function examPreparation (input)
{
    let inputOfBadGrades = Number(input.shift());
    let countForBadGrades = 0;
    let sumGrades = 0;
    let counterForGrades = 0;
    let lastProblem = '';

    while (countForBadGrades < inputOfBadGrades)
    {
        let nameOfExercise = input.shift();
        let grade = Number(input.shift());
    }
    if (countForBadGrades == inputOfBadGrades)
    {
        console.log(`You need a break, ${countForBadGrades} poor grades.`);
    }
    else
    {
        console.log(`Average score: ${counterForGrades}`);
        console.log(`Number of problems: ${sumGrades}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation([2, 'Income', 3, 'Game Info', 6, 'Best Player', 4]);