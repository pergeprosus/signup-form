let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("user_email");
let phoneNumber = document.getElementById("user_phonenumber");
let password = document.getElementById("user_password");
let passwordConfirm = document.getElementById("user_passwordconfirmation");
let submitButton = document.querySelector("#submitbutton");

function passwordValidate() {
    if (password.value != passwordConfirm.value){
    alert("Your passwords must match.");
}
}

