import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './random.js';
test('Capitalize the first character of a string', () => {
    expect(capitalize('emeka')).toBe('Emeka');
});
test('Reverse the given String', () => {
    expect(reverseString('emeka')).toBe('akeme');
});
test('Add two numbers', () => {
    expect(calculator.add(1,1)).toBe(2);
});
test('Subtract two numbers', () => {
    expect(calculator.subtract(2,1)).toBe(1);
});
test('Multiply two numbers', () => {
    expect(calculator.multiply(2,2)).toBe(4);
});
test('Divide two numbers', () => {
    expect(calculator.divide(9,3)).toBe(3);
});
test('Test caesar Cipher case(1)', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});
test('Test caesar Cipher case(2)', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
test('Test caesar Cipher case(3)', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
test('Test Analyze number array function', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6, heap: [ 8, 6, 4, 3, 2, 1 ] });
});

