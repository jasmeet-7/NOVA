// ==========================
// NOVA v1.1
// Landing Page Script
// Powered by FlowPilott
// ==========================

const wakeButton = document.getElementById("wakeButton");

if (wakeButton) {

    wakeButton.addEventListener("click", function () {

        wakeButton.textContent = "INITIALIZING...";
        wakeButton.disabled = true;

        setTimeout(function () {
            window.location.href = "./boot.html";
        }, 1500);

    });

}
