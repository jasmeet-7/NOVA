document.addEventListener("DOMContentLoaded", () => {

    const wakeButton = document.getElementById("wakeButton");

    if (!wakeButton) {
        console.error("Wake button not found!");
        return;
    }

    wakeButton.addEventListener("click", () => {

        wakeButton.textContent = "INITIALIZING...";
        wakeButton.disabled = true;

        setTimeout(() => {
            window.location.assign("./boot.html");
        }, 1500);

    });

});
