function showMessage() {
    alert("Welcome! Thanks for visiting Web Solutions Portal.");
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

function validateForm() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Please fill all the fields.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
