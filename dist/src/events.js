import { numbersList } from "./types.js";
import { userNumberInput } from "./importer.js";
// makes the input empty
export const clearValue = (event) => {
    event.preventDefault();
    userNumberInput.value = "";
};
// make a random number
export const randomNumberEvents = (event) => {
    event?.preventDefault();
    let randomNumber = Math.floor(Math.random() * 90000) + 10000;
    userNumberInput.value = randomNumber.toString();
};
// sift the numbers if they are prime or not and if it was prime add it into the Array
export const primeNumberEvents = (event) => {
    event.preventDefault();
    if (userNumberInput) {
        const lastNumber = userNumberInput.value;
        numbersList.splice(0, numbersList.length);
        for (let i = 2; i <= lastNumber; i++) {
            if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
                numbersList.push(i);
            }
        }
        console.log(numbersList);
    }
};
