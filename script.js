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




