const createNavbar = () => {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");

    navbar.innerHTML = `
        <div class="navbarLine line1"></div>
        <ul class="navLinks">
            <li class="navLink"><a href="../index.html">Home</a></li>
            <li class="navLink"><a href="../html/about.html">About</a></li>
            <li class="navLink"><a href="../html/cv.html">CV</a></li>
            <li class="navLink"><a href="../html/portfolio.html">Portfolio</a></li>
            <li class="navLink"><a href="../html/contact.html">Contact</a></li>
        </ul>
        <div class="navbarLine line2"></div>
    `;

    // Highlight the current page
    const currentPage = window.location.pathname.split("/").pop(); // Get the current file name
    const links = navbar.querySelectorAll("a");

    for (const link of links) {
        const linkHref = link.getAttribute("href").split("/").pop(); // Get only the file name
        if (currentPage === linkHref || (currentPage === "" && linkHref === "index.html")) {
            link.classList.add("active");
        }
    }

    return navbar;
};
