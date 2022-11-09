function formValidation(e) {
    e.preventDefault();
    let form = document.getElementById('myform');

    fullnameVal();
    lastnameVal();
    emailVal();
    phoneVal();
    passVal();
    cpassVal();

    if (fullnameVal() && lastnameVal() && emailVal() && phoneVal() && passVal() && cpassVal()) {
        const data = {
            firstname: document.getElementById('f_name').value,
            lastname: document.getElementById('l_name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            password: document.getElementById('password').value,
            c_password: document.getElementById('C_password').value
        }
        // form.reset();
        let users = [];
        if (localStorage.getItem('users') != null) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users));
        location.assign("http://127.0.0.1:5500/loginform.html")

    } else {
        document.getElementById('form').reset();
        return false;
    }

}

// Validate FullName
function fullnameVal() {
    let firstName = document.getElementById('f_name').value;

    // regular expresion
    let regname = /^[a-zA-Z]+$/g;

    // validate full name
    if (firstName == "") {
        document.getElementById('fname_error').innerHTML = "**First name cannot be blank"
        return false;

    } else if ((firstName.length <= 2) || (firstName.length >= 20)) {
        document.getElementById('fname_error').innerHTML = "**First name Should be 2 to 20"
        return false;

    } else if (!isNaN(firstName)) {
        document.getElementById('fname_error').innerHTML = "**Numbers are not allowed"
        return false;

    } else if (!regname.test(firstName)) {
        document.getElementById('fname_error').innerHTML = "**Can not start with Number first name"
        return false;

    } else {
        document.getElementById('fname_error').innerHTML = "";
        return true;
    }
}

// Validate LastName
function lastnameVal() {
    let lastName = document.getElementById('l_name').value;

    // regular expresion
    let regname = /^[a-zA-Z]+$/g;

    //validate last name 
    if (lastName == "") {
        document.getElementById('lname_error').innerHTML = "**Last name cannot be blank"
        return false;

    } else if ((lastName.length <= 2) || (lastName.length >= 20)) {
        document.getElementById('lname_error').innerHTML = "**Last name Should be 2 to 20"
        return false;

    } else if (!isNaN(lastName)) {
        document.getElementById('lname_error').innerHTML = "**Numbers are not allowed"
        return false;

    } else if (!regname.test(lastName)) {
        document.getElementById('lname_error').innerHTML = "**Can not start with Number last name"
        return false;

    } else {
        document.getElementById('lname_error').innerHTML = "";
        return true;
    }
}

// Validate Email-id
function emailVal() {
    let email = document.getElementById('email').value;

    // regular expresion
    let regemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/g;

    // validate email id
    if (email == "") {
        document.getElementById('email_error').innerHTML = "**Email field can not be blank";
        return false;
    } else if (email.indexOf('@') <= 0) {
        document.getElementById('email_error').innerHTML = "**@ is not on place";
        return false;
    } else if ((email.charAt(email.length - 4) != ".") && (email.charAt(email.length - 3) != ".")) {
        document.getElementById('email_error').innerHTML = "**. is not on place";
        return false;
    } else if (!regemail.test(email)) {
        document.getElementById('email_error').innerHTML = "**. is not on place";
        return false;
    } else {
        document.getElementById('email_error').innerHTML = "";
        return true;
    }
}

// Validateb Phone Number
function phoneVal() {
    let phone = document.getElementById('phone').value;

    // regular expresion
    let regphone = /^[0-9]{10}$/

    if (phone == "") {
        document.getElementById('phone_error').innerHTML = "**Plz Enter Numbers";
        return false;
    } else if (phone.length != 10) {
        document.getElementById('phone_error').innerHTML = "**Number Length Should be 10";
        return false;
    } else if (!regphone.test(phone)) {
        document.getElementById('phone_error').innerHTML = "**Number is not Valid";
        return false;
    } else {
        document.getElementById('phone_error').innerHTML = "";
        return true;
    }
}

// Validate Password 
function passVal() {
    let password = document.getElementById('password').value;

    if (password == "") {
        document.getElementById('pass_error').innerHTML = "**Plz enter password";
        return false;
    } else if (password.length < 8) {
        document.getElementById('pass_error').innerHTML = "**Password length should be 8";
        return false;
    }
    else {
        document.getElementById('pass_error').innerHTML = "";
        return true;
    }
}

// Validate Confirm Password
function cpassVal() {
    let c_password = document.getElementById('C_password').value;
    let password = document.getElementById('password').value;

    // regular expresion
    let regpass = /^[a-zA-Z][0-9]{8}$/;

    if (c_password == "") {
        document.getElementById('C_pass_error').innerHTML = "**Plz enter password";
        return false;
    } else if (c_password.length < 8) {
        document.getElementById('C_pass_error').innerHTML = "**Password length should be 8";
        return false;
    } else if (c_password != password) {
        document.getElementById('C_pass_error').innerHTML = "**Passwords Are not Matched";
        return false;
    } else {
        document.getElementById('C_pass_error').innerHTML = "";
        return true;
    }
}

// here we relocated to registration from 
function reloadRegistrationForm() {
    location.assign("http://127.0.0.1:5500/registrationform.html");
}