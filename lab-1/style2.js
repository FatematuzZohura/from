document.getElementById("sign-up").addEventListener("click", function() {
    const nameField = document.getElementById("namein");
    const userName = nameField.value;
    //console.log(userName);

    const emailField = document.getElementById("email");
    const userEmail = emailField.value;
    //console.log(userEmail);

    const passwordField = document.getElementById("password");
    const userPassword = passwordField.value;
    //console.log(userPassword);

    const changePasswordField = document.getElementById("change-password");
    const changePassword = changePasswordField.value;
    //console.log(changePassword);

    if (userEmail == "Fatema@gmail.com" && userPassword == "Fatema#") {
        window.alert("Hello! sucessfull");
    } else {
        window.location.href = "index2.html";
    }
})