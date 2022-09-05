function test(input)
{
    let aquariumLength = input.shift();
    let width = input.shift();
    let height = input.shift();
    let percent = input.shift();
    let capacity = aquariumLength * width * height;
    let totalLiters = capacity * 0.001;
    let calculatedPercent = percent * 0.01;
    let needed = totalLiters * (1 - calculatedPercent);

    console.log(needed.toFixed(3));
}

test([105, 77, 89, 18.5]);