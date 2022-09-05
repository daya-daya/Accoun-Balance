function skeleton (input)
{
    let minControl = Number(input);
    let secControl = Number(input);
    let LengthChuteMeters = Math.float(0);
    let secCovering100Meters = Number(input);
    let MarinTime = minControl * secControl;
    let controlTime = secCovering100Meters;
    let totalMinTime = MarinTime * timeDecrease / LengthChuteMeters;

    if (controlTime <= MarinTime)
    {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${secControl.toFixed(3)}.`);
    }
    else if (controlTime > MarinTime)
    {
        console.log(`No, Marin failed! He was ${timeDecrease.toFixed(3)} second slower.`)
    }
}

skeleton([2, 12, 1200, 10]);