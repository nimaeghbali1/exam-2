import { randomNumberButton, clearInputButton, primeNumberButton } from "./src/importer.js";
import { generateRandomNumber, clearInput, primeNumber } from "./src/state.js";
// randomNumberButton function makes a random number
randomNumberButton?.addEventListener("click", generateRandomNumber);
//  by clicking on second button it shows you an "Arrya" that includes prime numbers
primeNumberButton?.addEventListener("click", primeNumber);
// clearInputButton remove the value of the element
clearInputButton?.addEventListener("click", clearInput);
