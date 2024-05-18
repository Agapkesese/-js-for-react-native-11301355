function processArray(numbers) {
    return numbers.map(x => (x % 2 === 0 ? x ** 2 : x * 3));
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  const outputArray = processArray(inputArray);
  console.log(outputArray); 
  
  module.exports = processArray;
  