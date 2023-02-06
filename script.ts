//********** ENUM **********/
enum Dictionary{
    Rus,
    Uzb,
    Eng,
}

const uzbIndex = Dictionary.Uzb
const uzb = Dictionary[uzbIndex]
console.log(uzb);

// getUzbNumber app

enum Numbers{
    One,
    Two,
    Three,
}

function getUzbNumber(number: Numbers){
    switch(number){
        case Numbers.One:
            return 'Bir';
       case Numbers.Two:
        return 'Ikki'
       case Numbers.Three :
        return 'Uch'     
    }
}


let arr4: Array<boolean> = [];