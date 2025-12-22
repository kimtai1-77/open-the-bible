/*function openMobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.style.display = "flex";
}

function closeMobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.style.display = "none";
}*/

function toggleMobileMenu() {
    document.body.classList.toggle("menu-open");
}

function toggleArrow(clickedItem) {
    const arrowDown = clickedItem.querySelector(".arrow-down");
    const arrowUp = clickedItem.querySelector(".arrow-up");

    arrowDown.classList.toggle("hidden");
    arrowUp.classList.toggle("hidden");
}