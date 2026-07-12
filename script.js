const wakeButton = document.getElementById("wakeButton");

wakeButton.addEventListener("click", () => {

    wakeButton.textContent = "INITIALIZING...";

    wakeButton.disabled = true;

    setTimeout(() => {

        alert("Welcome back, Jasmeet!\n\nNOVA is now online.");

        wakeButton.textContent = "WAKE NOVA";

        wakeButton.disabled = false;

    }, 2000);

});
