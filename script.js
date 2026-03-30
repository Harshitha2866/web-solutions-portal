function goToLogin() {
    window.location.href = "login.html";
}

function validateForm() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name === "" || message === "") {
        showToast("Please fill all fields");
    } else {
        showToast("Message sent successfully!");
    }
}

function showToast(msg) {
    let t = document.createElement("div");
    t.className = "toast";
    t.innerText = msg;
    document.body.appendChild(t);

    setTimeout(() => t.remove(), 2000);
}
