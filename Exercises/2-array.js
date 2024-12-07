'use strict';

const array = () => {
  const adreses = [];
  const innerArray = (i) => adreses[i];
  innerArray.push = (value) => adreses.push(value);
  innerArray.pop = () => adreses.pop();
  return innerArray;
};

module.exports = { array };
