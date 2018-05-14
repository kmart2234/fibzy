const fibonacci = (n) => {
  const numbers = [];
  for(let i =0; i < n; i++) {
      if (i === 0) numbers.push(0);
      else if (i === 1 || i === 2) numbers.push(1);
      else numbers.push(numbers[i - 1] + numbers[i - 2]);
  }
  return numbers;
};

const fibzy = (index) => {
  return new Promise((resolve, reject) => {
      index = parseInt(index);
      if(!Number(index)) return reject('Please provide a valid integer.');
      if(index <= 0) return reject('The index number must be greater than 0');
      if(index > 1477) return reject('Infinity is defined as 1.797693134862315E+308 - Please keep your input below 1477');
      resolve(fibonacci(index));
  });
};

module.exports = fibzy;