// Arrays 

const colors: string[] = ['red','green','blue']
const num: number[] = [1,2,3,4,5]

// any 

let all:any = 1

all = 'Hello world!'

// function

// void bu functiondan hech qanday ma'lumot qaytarmaydi

function sayHi(a: number | string): void{
    if(typeof a === 'number'){
        console.log(a.toFixed);
    }
    if(typeof a === 'string'){
        console.log(a.toLocaleLowerCase);
    }
}

const number: number[] = [1,2,3,4,5]

number.map((item,index) => console.log(item * index));

const logCar = (car:{name: string; year?: number}): string => {
    return `Name: ${car.name} , Year: ${car.year === undefined ? 'Not Aviable' : car.year}`
}
console.log(logCar({name:'Audi'}));
