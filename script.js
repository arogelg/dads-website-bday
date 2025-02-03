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

function createConfetti() {
    const confettiContainer = document.body;
    
    for (let i = 0; i < 30; i++) { // Number of confetti pieces
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random duration
        confettiContainer.appendChild(confetti);

        setTimeout(() => { confetti.remove(); }, 5000); // Remove confetti after it falls
    }
}

// Start confetti on page load
window.onload = createConfetti;