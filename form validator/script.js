const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else if (input.id === 'email') {
            if (!isValidEmail(input.value)) {
                showError(input, `${getFieldName(input)} is invalid`);
            } else {
                showSuccess(input);
            }
        } else {
            showSuccess(input);
        }
    })
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
    if (input.value.length < min || input.value.length > max) {
        showError(input, `${getFieldName(input)} should range from ${min} to ${max}`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value || input2.value === '') {
        showError(input2, 'Passwords does not match');
    } else {
        showSuccess(input2);
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // if (username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username);
    // }
    // if (email.value === '') {
    //     showError(email, 'email is required');
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'email is not valid');
    // } else {
    //     showSuccess(email);
    // }
    // if (password.value === '') {
    //     showError(password, 'password is required');
    // } else {
    //     showSuccess(password);
    // }
    // if (password2.value === '') {
    //     showError(password2, 'confirm your password');
    // } else {
    //     showSuccess(password2);
    // }

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkPasswordMatch(password, password2);
});