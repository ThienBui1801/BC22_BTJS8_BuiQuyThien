"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Bài 1
const btnNumber = $("#btn-numb");
const btnCountPositive = $("#btn-count-positive");
const btnShow = $("#btn-show");
const btnCalc = $("#btn-calc");
const btnFindMin = $("#btn-min");
const btnFindMinEven = $("#btn-even");
const btnFindLastEven = $("#btn-even-last");
const btnPrime = $("#btn-prime");
const btnPlace = $("#btn-place");
const btnXs = $("#btn-xs");
const btnInteger = $("#btn-integer");
const btnSs = $("#btn-ss");
const btnShowPrime = $("#btn-show-prime");

const renderArr = $("#render-arr");
const renderSumPositive = $("#render-sum-positive");
const renderPositiveNumb = $("#render-positive-number");
const renderMinNumb = $("#render-min-number");
const renderMinPositive = $("#render-min-positive");
const renderLastEven = $("#render-even-last");
const renderPlace = $("#render-place");
const renderArrange = $("#render-arrange");
const renderPrime = $("#render-prime");
const renderInteger = $("#render-integer");

const renderSs = $("#render-ss");
const posNumb = $("#positive-numb");
const negNumb = $("#negative-numb");

const renderShowPrime = $("#render-show-prime");

// const renderCount = $("#render-count");
// const renderSumEven = $("#render-sum-event");
// const renderNumber = $("#render-numb");
// const renderXs = $("#render-xs");
const numberList = [];
let result = 0;

// Add number
btnNumber.addEventListener("click", () => {
  const valueNumber = document.querySelector("#numb-value").value * 1;

  numberList.push(valueNumber);
  console.log(numberList);
});

// Show array
btnShow.addEventListener("click", () => {
  renderArr.innerHTML = numberList;
});

// Calculate sum positive
btnCalc.addEventListener("click", () => {
  for (let i = 0; i < numberList.length; i++) {
    let item = numberList[i];

    if (item > 0) {
      result += item;
    }
  }
  renderSumPositive.innerHTML = result;
});

// Count positive number
btnCountPositive.addEventListener("click", () => {
  let count = 0;

  for (let i = 0; i < numberList.length; i++) {
    let item = numberList[i];

    if (item > 0) {
      count++;
    }
  }

  renderPositiveNumb.innerHTML = count;
});

// Find min number
btnFindMin.addEventListener("click", () => {
  let min = undefined;

  for (let i = 0; i < numberList.length; i++) {
    let item = numberList[i];

    if (min === undefined) {
      min = item;
    } else if (item < min) {
      min = item;
    }
  }
  renderMinNumb.innerHTML = min;
});

// Find min even number
btnFindMinEven.addEventListener("click", () => {
  let min = undefined;

  for (let i = 0; i < numberList.length; i++) {
    let item = numberList[i];

    if (item > 0) {
      if (min === undefined) {
        min = item;
      } else if (item < min) {
        min = item;
      }
    }
  }

  renderMinPositive.innerHTML = min;
});

// Find last even number
btnFindLastEven.addEventListener("click", () => {
  let lastNumber = 0;

  for (let i = numberList.length - 1; i >= 0; i--) {
    let item = numberList[i];
    if (item % 2 === 0) {
      lastNumber = item;
      break;
    } else {
      lastNumber = -1;
    }
  }
  renderLastEven.innerHTML = lastNumber;
});

// Change place
btnPlace.addEventListener("click", () => {
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      let temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }
  }
  renderPlace.innerHTML = numberList;
});

// First prime
function isPrime(number) {
  let flag = 1;

  if (number < 2) {
    return (flag = -1);
  }

  let i = 2;
  while (i < number) {
    if (number % i == 0) {
      flag = -1;
      break;
    }
    i++;
  }

  return flag;
}

btnPrime.addEventListener("click", () => {
  for (let i = 0; i < numberList.length; i++) {
    let item = numberList[i];

    isPrime(item);

    if (isPrime(item) == true) {
      renderPrime.innerHTML = item;
      break;
    } else {
      renderPrime.innerHTML = -1;
    }
  }
});

// Arrange
btnXs.addEventListener("click", () => {
  let arrange = numberList.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  renderArrange.innerHTML = arrange;
});

// Integer
btnInteger.addEventListener("click", () => {
  let count = 0;

  for (let i = 0; i < numberList.length; i++) {
    let item = numberList[i];

    if (Math.ceil(item) != Math.floor(item)) {
      count++;
    }
  }
  renderInteger.innerHTML = count;
});

// Compare
btnSs.addEventListener("click", () => {
  let countPositive = 0;
  let countNegative = 0;

  for (let i = 0; i < numberList.length; i++) {
    let item = numberList[i];

    if (item < 0) {
      countNegative++;
    } else if (item > 0) {
      countPositive++;
    }
  }

  if (countNegative > countPositive) {
    renderSs.innerHTML = `Số lượng số âm nhiều hơn số dương`;
  } else {
    renderSs.innerHTML = `Số lượng số dương nhiều hơn số âm`;
  }

  posNumb.innerHTML = countPositive;
  negNumb.innerHTML = countNegative;
});

// Show prime
function getPrimes(number) {
  let prime = [];
  let i;
  let j;
  let primes = [];

  for (i = 2; i <= number; i++) {
    if (!prime[i]) {
      primes.push(i);
      for (j = i < 1; j <= number; j += i) {
        prime[j] = true;
      }
    }
  }
  return primes;
}

btnShowPrime.addEventListener("click", () => {
  const valueNumber = document.querySelector("#numb-value").value * 1;
  renderShowPrime.innerHTML = getPrimes(valueNumber);
});
