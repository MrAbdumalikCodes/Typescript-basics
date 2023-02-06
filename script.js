"use strict";
//********** ENUM **********/
var Dictionary;
(function (Dictionary) {
    Dictionary[Dictionary["Rus"] = 0] = "Rus";
    Dictionary[Dictionary["Uzb"] = 1] = "Uzb";
    Dictionary[Dictionary["Eng"] = 2] = "Eng";
})(Dictionary || (Dictionary = {}));
const uzbIndex = Dictionary.Uzb;
const uzb = Dictionary[uzbIndex];
console.log(uzb);
// getUzbNumber app
var Numbers;
(function (Numbers) {
    Numbers[Numbers["One"] = 0] = "One";
    Numbers[Numbers["Two"] = 1] = "Two";
    Numbers[Numbers["Three"] = 2] = "Three";
})(Numbers || (Numbers = {}));
function getUzbNumber(number) {
    switch (number) {
        case Numbers.One:
            return 'Bir';
        case Numbers.Two:
            return 'Ikki';
        case Numbers.Three:
            return 'Uch';
    }
}
let arr4 = [];
