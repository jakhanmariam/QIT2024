const link = document.getElementById('select-account');

link.addEventListener('change', () => {
    if (link.value === "login") {
        window.location.href = "login.html"
    }
});




