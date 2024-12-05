const addBtn = document.getElementById('addbtn');
const minusBtn = document.getElementById('minusbtn');
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

firstInput.addEventListener('input', () => {
    validationText.textContent = '';
    result.textContent = '0';
});

secondInput.addEventListener('input', () => {
    validationText.textContent = '';
    result.textContent = '0';
});