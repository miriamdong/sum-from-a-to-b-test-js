function sum(fromN, toN) {
  let result = fromN;
  console.log(fromN, toN);
  if (fromN === toN) {
    result = toN;
    console.log('result: ' + result);
    return result;
  }
  if (fromN < toN) {
    return result += sum(fromN + 1, toN);
  }
}

module.exports = sum;


console.log(sum(3, 7));
