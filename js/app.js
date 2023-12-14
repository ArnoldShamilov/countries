const elButton = document.querySelector(".header-button");
const body = document.body;

elButton.addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.toggle("dark-mode");
});