import {View, Text} from 'react-native';
import React from 'react';

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lastRandomNum = null;
export default function GenerateRandNum() {
  let newBeginnning = false;
  if (numbersArray.length == 0) {
    console.log('Numbers Over starting again');
    newBeginnning = true;
    numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  let randomNumber = numbersArray[randomIndex];
  while (newBeginnning == true && lastRandomNum == randomNumber) {
    console.log(
      'hello ' + 'Last: ' + lastRandomNum + ' present: ' + randomNumber,
    );
    randomIndex = getRandomNumber(0, numbersArray.length - 1);
    randomNumber = numbersArray[randomIndex];
    console.log('New Random Num: ' + randomNumber);
  }
  numbersArray.splice(randomIndex, 1);
  if (numbersArray.length == 0) {
    lastRandomNum = randomNumber;
  }
  console.log('RandomNum: ' + randomNumber);
  return randomNumber;
}
let tablesArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];
let lastRandomTable = null;
export function GenerateRandTable() {
  let newBeginnning = false;
  if (tablesArray.length == 0) {
    console.log('TABLES Over starting again');
    newBeginnning = true;
    tablesArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ];
  }
  let randomIndex = getRandomNumber(0, tablesArray.length - 1);
  let randomNumber = tablesArray[randomIndex];
  while (newBeginnning == true && lastRandomTable == randomNumber) {
    console.log(
      'TABLES ' + 'Last: ' + lastRandomTable + ' present: ' + randomNumber,
    );
    randomIndex = getRandomNumber(0, tablesArray.length - 1);
    randomNumber = tablesArray[randomIndex];
    console.log('New Random TABLE: ' + randomNumber);
  }
  tablesArray.splice(randomIndex, 1);
  if (tablesArray.length == 0) {
    lastRandomTable = randomNumber;
  }
  console.log('Random TABLE: ' + randomNumber);
  return randomNumber;
}

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}
