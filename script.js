document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".big-text").style.opacity = "1";
        document.querySelector(".small-text").style.opacity = "1";
        document.querySelector(".birthday-image").style.opacity = "1";
    }, 500);
});


function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}
