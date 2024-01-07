// creating the varaibles for the different error messages
var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
var passwordError = document.getElementById("password-error");

// creating the function that will validate the name[name, surname]
function validateName() {
    var name = document.getElementById("name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Please enter your name and surname';
        return false;
    }

    nameError.innerHTML = "<i class='bx bxs-check-circle' ></i>";
    return true;
}

// creating the function that will validate the phone
function validatePhone() {
    var phone = document.getElementById("phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (phone.length != 9) {
        phoneError.innerHTML = 'Phone number should have 9 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{9}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = "<i class='bx bxs-check-circle' ></i>";
    return true;
}

// creating the function that will validate the email
function validateEmail() {
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid Email';;
        return false;
    }
    emailError.innerHTML = "<i class='bx bxs-check-circle' ></i>";
    return true;
}

function validateMessage() {
    var message = document.getElementById("message").value;
    var messageRequired = 30;
    var messageLeft = messageRequired - message.length;

    if (messageLeft > 0) {
        messageError.innerHTML = messageLeft + ' More characters required to complete the message';
        return false;
    }
    messageError.innerHTML = "<i class='bx bxs-check-circle' ></i>";
    return true;
}
//function to validate the form

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        // submitError.style.display = 'block';
        submitError.innerHTML = 'Please enter the required fields before submitting the form';
        setTimeout(function () { submitError.style.display = 'none'; }, 5000);
        return false;
    }
}
