// ==========================
// NOVA v1.1
// Powered by FlowPilott
// ==========================

const wakeButton = document.getElementById("wakeButton");
const bootScreen = document.getElementById("bootScreen");
const bootText = document.getElementById("bootText");
const enterButton = document.getElementById("enterButton");

const bootLines = [
    "> INITIALIZING NOVA...",
    "",
    "✓ Loading Core...",
    "✓ Loading Memory...",
    "✓ Starting Interface...",
    "✓ Connecting Systems...",
    "",
    "SYSTEM READY",
    "",
    "WELCOME BACK, JASMEET."
];

wakeButton.addEventListener("click", () => {

    wakeButton.style.display = "none";

    bootScreen.style.display = "block";

    let index = 0;

    function typeLine() {

        if(index < bootLines.length){

            bootText.textContent += bootLines[index] + "\n";

            index++;

            setTimeout(typeLine, 600);

        } else {

            enterButton.style.display = "block";

        }

    }

    typeLine();

});

enterButton.addEventListener("click", () => {

    alert("🚀 NOVA Console coming in v1.2");

});
