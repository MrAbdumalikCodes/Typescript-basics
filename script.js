"use strict";
const logCar = (car) => {
    return `Name: ${car.name} , Year: ${car.year === undefined ? 'Not Aviable' : car.year}`;
};
console.log(logCar({ name: 'Audi' }));
const ds = 'Hello world';
const logCar2 = (car) => {
    return `Name: ${car.name} , Year: ${car.year === undefined ? 'Not Aviable' : car.year}`;
};
const logAudi = (data) => {
    console.log(`Name: ${data.color}`);
};
console.log(logCar2({ name: 'Audi s8' }));
function logPoint(point) {
    const d3 = point; // as - qattiq bog'lanish
}
const canvas = document.getElementById('canvas');
