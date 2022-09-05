function groupStage(input)
{
    let team = input.shift();
    let matchesPlayed = Number(input.shift());

    let points = 0;
    let totalGoals = 0;
    let totalScored = 0;
    while (matchesPlayed > 0)
    {
        let goals = Number(input.shift());
        let scored = Number(input.shift());

        totalGoals += goals;
        totalScored += scored;

        if (goals > scored)
        {
            points += 3;
        }
        else if (goals == scored)
        {
            points++;
        }
        matchesPlayed--;
    }
    if (totalGoals >= totalScored)
    {
        console.log(`${team} has finished the group phase with ${points} points.`);
        console.log(`Goal difference: ${totalGoals - totalScored}.`);
    }
    else
    {
        console.log(`${team} has been eliminated from the group phase.`);
        console.log(`Goal difference: ${totalGoals - totalScored}.`);
    }
}

groupStage([]);