// Toast Notification
function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Hero Button
function showMessage() {
    showToast("Welcome! Thanks for visiting 🚀");
}

// Smooth Scroll + Active Nav Highlight
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// Highlight active section
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    sections.forEach((section, index) => {
        if (window.scrollY >= section.offsetTop - 100) {
            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
});

// Form Validation
function validateForm() {
    let name = document.getElementById("name");
    let message = document.getElementById("message");

    if (name.value.trim() === "" || message.value.trim() === "") {
        showToast("⚠️ Please fill all fields");
        return false;
    }

    showToast("✅ Message sent successfully!");
    return false; // prevent reload
}

// Service Click Interaction
document.querySelectorAll(".service-box").forEach(box => {
    box.addEventListener("click", () => {
        showToast("You clicked " + box.innerText);
    });
});

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
