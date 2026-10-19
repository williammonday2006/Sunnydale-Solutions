const form = document.getElementById("feedback-form");
const errorBox = document.getElementById("error-box");

let welcomeBox = document.getElementById("welcome-box");
if (!welcomeBox) {
    welcomeBox = document.createElement("div");
    welcomeBox.id = "welcome-box";
    form.before(welcomeBox);
}

let successBox = document.getElementById("success-box");
if (!successBox) {
    successBox = document.createElement("div");
    successBox.id = "success-box";
    form.after(successBox);
}

const nameInput = document.getElementById("reviewer-name");
const savedName = localStorage.getItem("reviewerName");

if (savedName) {
    welcomeBox.textContent = `Welcome back, ${savedName}! Ready to submit another wonderful review?`;
    nameInput.value = savedName;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    errorBox.innerHTML = "";
    successBox.textContent = "";

    const name = nameInput.value.trim();
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;

    let errors = [];

    if (name === "") {
        errors.push("Please provide your name.");
    }

    if (rating !== "5") {
        errors.push("Our company standard requires a 5-star rating.");
    }

    if (!comments.toLowerCase().includes("wonderful")) {
        errors.push("Comments must include the word 'wonderful'.");
    }

    if (errors.length > 0) {
        errorBox.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
        errorBox.style.color = "red";
        return;
    }

    localStorage.setItem("reviewerName", name);

    successBox.textContent = `Thank you, ${name}! Your glowing review has been recorded.`;
    successBox.style.color = "green";

    welcomeBox.textContent = "";
    form.reset();
    form.style.display = "none";
});
