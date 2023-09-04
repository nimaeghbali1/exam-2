import {userNumber} from "./types.js"
import {clearInputButton , primeNumberButton , randomNumberButton , userNumberInput} from "./importer.js"
import { clearValue, primeNumberEvents, randomNumberEvents } from "./events.js"


export const generateRandomNumber = randomNumberEvents
export const clearInput = clearValue
export const primeNumber = primeNumberEvents