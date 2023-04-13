import {View, Text} from 'react-native';
import React from 'react';

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lastRandom = null;
export default function GenerateRandNum() {
  let newBeginnning = false;
  if (numbersArray.length == 0) {
    console.log('Numbers Over starting again');
    newBeginnning = true;
    numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  let randomNumber = numbersArray[randomIndex];
  while (newBeginnning == true && lastRandom == randomNumber) {
    console.log('hello ' + 'Last: ' + lastRandom + ' present: ' + randomNumber);
    randomIndex = getRandomNumber(0, numbersArray.length - 1);
    randomNumber = numbersArray[randomIndex];
    console.log('New Random Num: ' + randomNumber);
  }
  numbersArray.splice(randomIndex, 1);
  if (numbersArray.length == 0) {
    lastRandom = randomNumber;
  }
  console.log('RandomNum: ' + randomNumber);
  return randomNumber;
}

export default function GenerateRandTable(tables_array=[]) {
  let newBeginnning = false;
  if (numbersArray.length == 0) {
    console.log('Numbers Over starting again');
    newBeginnning = true;
    numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  let randomNumber = numbersArray[randomIndex];
  while (newBeginnning == true && lastRandom == randomNumber) {
    console.log('hello ' + 'Last: ' + lastRandom + ' present: ' + randomNumber);
    randomIndex = getRandomNumber(0, numbersArray.length - 1);
    randomNumber = numbersArray[randomIndex];
    console.log('New Random Num: ' + randomNumber);
  }
  numbersArray.splice(randomIndex, 1);
  if (numbersArray.length == 0) {
    lastRandom = randomNumber;
  }
  console.log('RandomNum: ' + randomNumber);
  return randomNumber;
}



function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}
