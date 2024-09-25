// Third exercise
function calculateCircleArea(radius) {
    let area = Math.PI * radius * radius;
    return area;
}

let radius = 10;
let area = calculateCircleArea(radius);
console.log(area);

// Fourth exercise
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

// Fifth exercise
function drawPyramid(height) {
    for (let i = 1; i <= height; i++) {
        let space = ' '.repeat(height - i);
        if (i === 1) {
            console.log(space + '*');
        } else if ( i === height) {
            console.log('*'.repeat(2 * i - 1));
        } else {
            let stars = '*' + ' '.repeat(2 * i - 3) + '*';
            console.log(space + stars);
        }
    }
}
drawPyramid(5);