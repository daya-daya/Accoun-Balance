function test2(input)
{
    let length = Number(input.shift());
    let width = Number(input.shift());
    let wardrobeMeters = Number(input.shift());

    let hallArea = (length * 100) * (width * 100);
    let wardrobeMeters = (wardrobeMeters * 100) * (wardrobeMeters * 100);
    let benchArea = hallArea / 10;

    let freeSpace = hallArea - wardrobeMeters - benchArea;
    let dancersCount = Math.floor(freeSpace / 40 + 7000);
}

test2([50, 25, 2]);