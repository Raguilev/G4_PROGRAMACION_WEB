document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const contentDiv = document.getElementById("content");

    function loadSection(section) {
        fetch(`js/${section}.js`)
            .then(response => response.text())
            .then(scriptText => {
                contentDiv.innerHTML = "";
                const script = document.createElement("script");
                script.innerHTML = scriptText;
                document.body.appendChild(script);
            });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("data-section") === section) {
                link.classList.add("active");
            }
        });

        localStorage.setItem("activeSection", section);
    }

    const savedSection = localStorage.getItem("activeSection") || "dashboard";
    loadSection(savedSection);

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const section = this.getAttribute("data-section");
            loadSection(section);
        });
    });
});
