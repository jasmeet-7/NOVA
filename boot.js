const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

let progress = 0;

const messages = [
    "Starting NOVA...",
    "Loading Core...",
    "Loading Memory...",
    "Configuring Security...",
    "Preparing Interface...",
    "System Ready..."
];

const timer = setInterval(() => {

    progress += 20;

    progressBar.style.width = progress + "%";

    progressText.textContent = messages[(progress / 20) - 1];

    if (progress >= 100) {
        clearInterval(timer);

     setTimeout(() => {

    const user = localStorage.getItem("novaUser");

    if (user) {
        window.location.href = "console.html";
    } else {
        window.location.href = "setup.html";
    }

}, 800);
