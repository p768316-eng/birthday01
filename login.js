document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");

    if (!loginBtn) return;

    loginBtn.addEventListener("click", () => {

        const password =
            document.getElementById("password").value;

        const correctPassword = "lucky";

        if (password === correctPassword) {
            window.location.href = "page1.html";
        } else {
            document.getElementById("error-msg").textContent =
                "Wrong Password ❌";
        }
    });

});