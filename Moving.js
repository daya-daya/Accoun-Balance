function Moving (input)
{
    let width = Number(input.shift());
    let lenght = Number(input.shift());
    let hight = Number(input.shift());
    let freeSpace = width * lenght * hight;

    let totalSpace = 0;
    let spaceDiff = 0;

    let command = input.shift();

    while (command != 'Done')
    {
        let cartoonSpace = Number(command);
        command = input.shift();
    }

    totalSpace += cartoonSpace;
    spaceDiff = Math.abs(totalSpace - freeSpace);

    while (command != 'Done')
    {
        let cartoonSpace = Number(command);
        totalSpace += cartoonSpace;
        spaceDiff = Math.abs(totalSpace - freeSpace);
        if (totalSpace >= freeSpace)
        {
            console.log(`No more free space! You need ${spaceDiff} Cubic meters more.`)
        }
    }
}