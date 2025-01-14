document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    header.appendChild(createNavbar());

    const easterEgg = document.getElementById("easterEgg");
    easterEgg.addEventListener("click", () => {
        easterEgg2();
    });
});
