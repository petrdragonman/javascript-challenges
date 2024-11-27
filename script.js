// calculate moon orbit around Earth
// it takes 27 Erth days for the Moon to orbit the Earth

function calculateMoonOrbitDays(days) {
    const moonOrbitEarthDays = 27;
    return days / moonOrbitEarthDays;
}

console.log(calculateMoonOrbitDays(54));
console.log(calculateMoonOrbitDays(365));




