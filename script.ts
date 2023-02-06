//************ Literal type *************/

let car: 'Audi' = 'Audi'

type actionType = 'show' | 'hide'

const div = document.getElementById('div') as HTMLDivElement

function logger(action:actionType): boolean {
    switch(action){
        case 'hide':
            return false;
        case 'show':
            return true    
    }
}