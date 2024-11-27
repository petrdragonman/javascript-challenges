// calculate moon orbit around Earth
// it takes 27 Erth days for the Moon to orbit the Earth

function calculateMoonOrbitDays(days) {
    const moonOrbitEarthDays = 27;
    return days / moonOrbitEarthDays;
}

console.log(calculateMoonOrbitDays(54));
console.log(calculateMoonOrbitDays(365));

// Write a function that takes the radius of a circle and return its area.
// Write a function that takes the radius of a circle and return its perimeter.

function getArea(radius) {
    const pi = Math.PI;
    return (pi * radius ** 2).toFixed(2);
}

function getPerimeter(radius) {
    const pi = Math.PI;
    return (2 * pi * radius).toFixed(2);
}

console.log(getArea(10));
console.log(getPerimeter(10));

// Challenge: Years to Days & Seconds
// MVP
// Create a function that takes your age in years and returns your age in days.
// Create a function that takes your age in years and returns your age in seconds.

function convertYearToDays(age) {
    const yearDays = 365.25;
    return age * yearDays;
}

function convertYearToSeconds(age) {
    const yearSeconds = 3.154e+7;
    return age * yearSeconds;
}

console.log(convertYearToDays(32));
console.log(convertYearToSeconds(32));
