// here we creat function to prevent reload

function loginFormVal(e) {
    e.preventDefault();
}

// here we check the user data with the local storage data and the approve to procced.

function checkdata() {
    let loginemail = document.getElementById('email').value;
    let loginpass = document.getElementById('password').value;
    console.log(loginemail);
    console.log(loginpass);
    let entrys = JSON.parse(localStorage.getItem('users'));
    console.log(entrys);

    for (let i = 0; i < entrys.length; i++) {
        console.log("for loop enter")
        if (loginemail == entrys[i].email) {
            if (loginpass == entrys[i].password) {
                alert('Succesfully Login')
                return true;
            } else {
                document.getElementById('pass_error').innerHTML = '**Password is Wrong';
                return false;
            }
        } else {
            document.getElementById('email_error').innerHTML = "**Email-Id is not Mtached";
        }
    }
    return false;
}