const saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", () => {

    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Please enter your name.");
        return;
    }

    // Save the user's name
    localStorage.setItem("novaUser", username);

    // Setup complete
    window.location.href = "console.html";

});

