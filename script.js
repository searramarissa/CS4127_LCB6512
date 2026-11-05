
document.addEventListener("DOMContentLoaded", function () {

    // DARK / LIGHT MODE
    var themeBtn = document.getElementById("themeBtn");

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    if (themeBtn) {
        themeBtn.onclick = function () {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        };
    }


    // MOBILE MENU
    var menuBtn = document.getElementById("menuBtn");
    var nav = document.getElementById("nav");

    if (menuBtn && nav) {
        menuBtn.onclick = function () {
            nav.classList.toggle("open");
        };
    }


    // CONTACT FORM VALIDATION
    var form = document.getElementById("enquiry");

    if (form) {
        form.onsubmit = function (event) {
            event.preventDefault();

            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();
            var message = document.getElementById("message").value.trim();

            var ok = true;

            if (name.length < 2) {
                document.getElementById("nameError").textContent = "Please enter your full name.";
                ok = false;
            } else {
                document.getElementById("nameError").textContent = "";
            }

            var emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

            if (!emailPattern.test(email)) {
                document.getElementById("emailError").textContent = "Please enter a valid email address.";
                ok = false;
            } else {
                document.getElementById("emailError").textContent = "";
            }

            if (message.length < 10) {
                document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
                ok = false;
            } else {
                document.getElementById("messageError").textContent = "";
            }

            if (ok) {
                document.getElementById("result").textContent = "Thank you! Your enquiry has been received.";
                form.reset();
            } else {
                document.getElementById("result").textContent = "";
            }
        };
    }


    // PHOTO LIGHTBOX
    var lightbox = document.getElementById("lightbox");

    if (lightbox) {
        var bigImage = document.getElementById("bigImage");
        var photos = document.querySelectorAll(".gallery img");

        for (var i = 0; i < photos.length; i++) {
            photos[i].onclick = function () {
                bigImage.src = this.src;
                bigImage.alt = this.alt;
                lightbox.classList.add("open");
            };
        }

        lightbox.onclick = function () {
            lightbox.classList.remove("open");
        };

        document.onkeydown = function (event) {
            if (event.key === "Escape") {
                lightbox.classList.remove("open");
            }
        };
    }

});
