const highOrderSum = (value1, value2, value3, operation) => operation(value1, value2, value3)

const sumThreeValues = (a, b, c) => a + b + c

const result = highOrderSum(10,5,8, sumThreeValues)
 
console.log(result)