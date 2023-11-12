const generateRandomInt = (min = -100, max = 100) => {
  let res = 0;
  if (min < max) {
    res = Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    res = Math.floor(Math.random() * (min - max + 1)) + max;
  }
  return res;
};

export default generateRandomInt;