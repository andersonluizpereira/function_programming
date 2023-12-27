function highOrderSum(value1, value2, value3, operation) {
    return operation(value1, value2, value3);
}

function sumThreeValues(a, b, c) {
    return a + b + c;
}

// Uso da função de alta ordem
const result = highOrderSum(10, 5, 8, sumThreeValues);
console.log(result);  // Saída: 23
