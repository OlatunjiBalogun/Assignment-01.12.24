const addBtn = document.getElementById('addbtn');
const minusBtn = document.getElementById('minusbtn');
const multiplyBtn = document.getElementById('multiplybtn');
const divisionBtn = document.getElementById('divisionbtn');
const clearBtn = document.getElementById('clearBtn');
const validationText = document.getElementById('validationtext');
const result = document.getElementById('result');
const firstInput = document.getElementById('firstinput');
const secondInput = document.getElementById('secondinput');


addBtn.addEventListener('click', () => {
    let firstInputValue = Number(firstInput.value);
let secondInputValue = Number(secondInput.value);
    if (firstInput.value === '' && secondInput.value === '') {
        validationText.textContent = 'Your inputs are empty.';
    }else if (firstInput.value === ''){
        validationText.textContent = 'Please enter your first number.';
    }else if (secondInput.value === ''){
        validationText.textContent = 'Please enter your second number.';
    }else if (isNaN(firstInputValue) && !isNaN(secondInputValue)){
        validationText.textContent = `Enter valid first number not a string or symbols. (${firstInput.value})`; 
    }else if (isNaN(secondInputValue) && !isNaN(firstInputValue)){
        validationText.textContent = `Enter valid second number not a string or symbols.(${secondInput.value})`;
    }else if (isNaN(secondInputValue) && isNaN(firstInputValue)){
        validationText.textContent = `Please enter valid numbers not a string or symbols. (${firstInput.value} and ${secondInput.value})`;
    }
    else {
        validationText.textContent = '';
        result.textContent = firstInputValue + secondInputValue;
    }
});
minusBtn.addEventListener('click', () => {
    let firstInputValue = Number(firstInput.value);
let secondInputValue = Number(secondInput.value);
    if (firstInput.value === '' && secondInput.value === '') {
        validationText.textContent = 'Your inputs are empty.';
    }else if (firstInput.value === ''){
        validationText.textContent = 'Please enter your first number.';
    }else if (secondInput.value === ''){
        validationText.textContent = 'Please enter your second number.';
    }else if (isNaN(firstInputValue) && !isNaN(secondInputValue)){
        validationText.textContent = `Enter valid first number not a string or symbols. (${firstInput.value})`; 
    }else if (isNaN(secondInputValue) && !isNaN(firstInputValue)){
        validationText.textContent = `Enter valid second number not a string or symbols.(${secondInput.value})`;
    }else if (isNaN(secondInputValue) && isNaN(firstInputValue)){
        validationText.textContent = `Please enter valid numbers not a string or symbols. (${firstInput.value} and ${secondInput.value})`;
    }
    else {
        validationText.textContent = '';
        result.textContent = firstInputValue - secondInputValue;
    }
    return result;
});
multiplyBtn.addEventListener('click', () => {
    let firstInputValue = Number(firstInput.value);
let secondInputValue = Number(secondInput.value);
    if (firstInput.value === '' && secondInput.value === '') {
        validationText.textContent = 'Your inputs are empty.';
    }else if (firstInput.value === ''){
        validationText.textContent = 'Please enter your first number.';
    }else if (secondInput.value === ''){
        validationText.textContent = 'Please enter your second number.';
    }else if (isNaN(firstInputValue) && !isNaN(secondInputValue)){
        validationText.textContent = `Enter valid first number not a string or symbols. (${firstInput.value})`; 
    }else if (isNaN(secondInputValue) && !isNaN(firstInputValue)){
        validationText.textContent = `Enter valid second number not a string or symbols.(${secondInput.value})`;
    }else if (isNaN(secondInputValue) && isNaN(firstInputValue)){
        validationText.textContent = `Please enter valid numbers not a string or symbols. (${firstInput.value} and ${secondInput.value})`;
    }
    else {
        validationText.textContent = '';
        result.textContent = firstInputValue * secondInputValue;
    }
    return result;
});
divisionBtn.addEventListener('click', () => {
    let firstInputValue = Number(firstInput.value);
let secondInputValue = Number(secondInput.value);
    if (firstInput.value === '' && secondInput.value === '') {
        validationText.textContent = 'Your inputs are empty.';
    }else if (firstInput.value === ''){
        validationText.textContent = 'Please enter your first number.';
    }else if (secondInput.value === ''){
        validationText.textContent = 'Please enter your second number.';
    }else if (isNaN(firstInputValue) && !isNaN(secondInputValue)){
        validationText.textContent = `Enter valid first number not a string or symbols. (${firstInput.value})`; 
    }else if (isNaN(secondInputValue) && !isNaN(firstInputValue)){
        validationText.textContent = `Enter valid second number not a string or symbols.(${secondInput.value})`;
    }else if (isNaN(secondInputValue) && isNaN(firstInputValue)){
        validationText.textContent = `Please enter valid numbers not a string or symbols. (${firstInput.value} and ${secondInput.value})`;
    }
    else {
        validationText.textContent = '';
        result.textContent = firstInputValue / secondInputValue;
    }
    return result;
});
clearBtn.addEventListener('click', () => {
    firstInput.value = '';
    secondInput.value = '';
    validationText.textContent = '';
    result.textContent = '0';
});

firstInput.addEventListener('input', () => {
    validationText.textContent = '';
    result.textContent = '0';
});

secondInput.addEventListener('input', () => {
    validationText.textContent = '';
    result.textContent = '0';
});