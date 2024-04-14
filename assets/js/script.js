// Mobile nav
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    const navBar = document.querySelector(".navbar-mobile");
    const navBarUl = document.querySelector(".navbar-mobile ul");
    if (!navBar.classList.contains("show")) {
        navBar.classList.add("show");
        setTimeout(() => {
            navBarUl.style.display = "flex";
        }, 300);
    } else {
        navBar.classList.remove("show");
        setTimeout(() => {
            navBarUl.style.display = "none";
        }, 300);
    }
});

// <!-- <i class="fa-solid fa-x"></i> -->
// Redirects
const productsRedirect = () => {
    window.location.href = "views/products.html#products";
};

const contactRedirect = () => {
    window.location.href = "views/contact.html";
};
