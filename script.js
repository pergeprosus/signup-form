let password = document.getElementById("user_password");
let passwordConfirm = document.querySelector("user_password");
let submitButton = document.querySelector("#submitbutton");


submitButton.addEventListener('click', test);

function test() {
    alert("Password: " + password.value + "");
}