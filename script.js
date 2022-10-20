let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("user_email");
let phoneNumber = document.getElementById("user_phonenumber");
let password = document.getElementById("user_password");
let passwordConfirm = document.getElementById("user_passwordconfirmation");
let submitButton = document.querySelector("#submitbutton");


submitButton.addEventListener('click', test);

function test() {
    alert("First Name: " + firstName.value + "");
    alert("Last Name: " + lastName.value + "");
    alert("Email: " + email.value + "");
    alert("Password: " + password.value + "");
    alert("Password Confirm: " + passwordConfirm.value + "");
}