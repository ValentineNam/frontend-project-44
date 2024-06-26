const generateRandomInt = (min = -100, max = 100) => {
  let res = 0;

  if (min < max) {
    res = Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    res = Math.floor(Math.random() * (min - max + 1)) + max;
  }

  return res;
};

export const generateRandomOp = () => {
  const ops = ['+', '-', '*'];
  return ops[generateRandomInt(0, ops.length - 1)];
};

export const generateCalcParams = () => {
  const res = {};
  res.firstNumber = generateRandomInt(0, 30);
  res.option = generateRandomOp();
  res.secondNumber = generateRandomInt(0, 30);
  return res;
};

export const calculate = (a, op, b) => {
  let res = 0;
  switch (op) {
    case '+':
      res = a + b;
      break;
    case '-':
      res = a - b;
      break;
    case '*':
      res = a * b;
      break;
    default:
      break;
  }
  return res;
};

export const gcdSearch = (a, b) => {
  let temp;
  let tempA = a;
  let tempB = b;
  while (tempB) {
    temp = tempB;
    tempB = tempA % tempB;
    tempA = temp;
  }
  return tempA;
};

export const checkIsPrime = (num) => {
  let res = true;
  const max = Math.round(Math.sqrt(num));
  for (let i = 2; i <= max; i += 1) {
    if (num % i === 0) {
      res = false;
      break;
    }
  }
  return res;
};

export const checkIsEven = (num) => (num % 2 === 0);

export default generateRandomInt;
