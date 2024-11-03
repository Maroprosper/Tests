const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b === 0? 'Error: Division by zero' : a / b,
}

const caesarCipher = (string, shift) => {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            result += string[i];
        }
    }
    return result;
}

const analyzeArray = (array) => {
    if (array.length === 0) return null;
    let sum = array.reduce((acc, curr) => acc + curr, 0);
    let min = Math.min(...array);
    let max = Math.max(...array);
    let heap = [...array].sort((a, b) => b - a);
    let average = Math.floor(sum/array.length); 
    return {
        average: average,
        min: min,
        max: max,
        length: array.length,
        heap: heap
    };
}
export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};
