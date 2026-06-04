document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       BIRTHDAY PAGE
    ========================= */

    const birthdayLoginBtn = document.getElementById("loginBtn");

    if (birthdayLoginBtn) {
        birthdayLoginBtn.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    }

    const popup = document.getElementById("popup");
    const openLetter = document.getElementById("openLetter");
    const closeBtn = document.querySelector(".close");

    if (popup && openLetter && closeBtn) {

        openLetter.addEventListener("click", () => {
            popup.classList.add("show");
        });

        closeBtn.addEventListener("click", () => {
            popup.classList.remove("show");
        });
    }

    /* =========================
       MOVING NO BUTTON
    ========================= */

    const noBtn = document.querySelector("#move-random");

    if (noBtn) {

        function moveButton() {

            const btnWidth = noBtn.offsetWidth;
            const btnHeight = noBtn.offsetHeight;

            const maxX = window.innerWidth - btnWidth - 10;
            const maxY = window.innerHeight - btnHeight - 10;

            const randomX = Math.floor(
                Math.random() * Math.max(maxX, 1)
            );

            const randomY = Math.floor(
                Math.random() * Math.max(maxY, 1)
            );

            noBtn.style.position = "fixed";
            noBtn.style.left = randomX + "px";
            noBtn.style.top = randomY + "px";
            noBtn.style.zIndex = "9999";
        }

        

        // Desktop
        noBtn.addEventListener("mouseenter", moveButton);

        // Mobile
        noBtn.addEventListener("touchstart", (e) => {
            e.preventDefault();
            moveButton();
        });
    }

});