//********** type ************/
type CarType = {
    name:string,
    year?:number
}
type MyCar = CarType & {
    price:number;
    color:string
}

const logCar = (car:CarType): string => {
    return `Name: ${car.name} , Year: ${car.year === undefined ? 'Not Aviable' : car.year}`
}
console.log(logCar({name:'Audi'}));

type stringOrNumber = string | number
const ds: stringOrNumber = 'Hello world'

//************ interface **************/

interface ICar {
    name: string;
    year?: number;
}
interface MyAudi extends ICar{
    price:number;
    color:string
}

const logCar2 = (car:ICar): string => {
    return `Name: ${car.name} , Year: ${car.year === undefined ? 'Not Aviable' : car.year}`
}
const logAudi = (data:MyAudi): void => {
    console.log(`Name: ${data.color}`);
}

console.log(logCar2({name:'Audi s8'}));

interface Point {
    x: number;
    y:number
}
interface I3DPoint extends Point{
    z:number
}

function logPoint(point: Point):void {
    const d3: I3DPoint = point as I3DPoint // as - qattiq bog'lanish
}

const canvas = document.getElementById('canvas') as HTMLCanvasElement