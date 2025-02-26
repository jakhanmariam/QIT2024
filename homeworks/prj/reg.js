const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');





registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});





loginBtn.addEventListener('click',() => {
    container.classList.remove('active');
});



document.getElementById("lg")
.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var pw = document.getElementById("pw").value;

    var user = localStorage.getItem(name);

    if(user) {
        var parsedUser = JSON.parse(user);
        if(parsedUser.pw === pw) {
            localStorage.setItem("user", JSON.stringify(parsedUser));
            window,location.href = "reg.html";
        } else {
            alert("incorrect password");
        }
    } else {
        alert("user not found")
    }
})

document.getElementById("reg")
.addEventListener("submit", function (event) {
    event.preventDefault();
    var regName = document.getElementById("regName").value;
    var email = document.getElementById("email").value;
    var regPw = document.getElementById("regPw").value;
    var confirmPw = document.getElementById("confirmPw").value;

    if(regPw !== confirmPw) {
        alert("passwords do not match");
        return;
    }

    const user = {
        regName: regName,
        email: email,
        confirmPw: confirmPw,

    };

    localStorage.setItem(name, JSON.stringify(user));
    alert("registeration successful");
});
