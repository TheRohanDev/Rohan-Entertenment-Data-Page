window.addEventListener("DOMContentLoaded", function() {
    const hash = window.location.hash || "#defaultsection";

    const allSections = document.querySelectorAll("div[id], section[id]");
    allSections.forEach((el) => {
        el.style.display = "none";
    });

    const loadingSection = document.getElementById("sectionloding");
    if (loadingSection) {
        loadingSection.style.display = "block";
    }

    setTimeout(() => {
        // Hide loader
        if (loadingSection) {
            loadingSection.style.display = "none";
        }

        // Show actual section
        const target = document.querySelector(hash);
        if (target) {
            target.style.display = "block";
            target.scrollIntoView({
                behavior: "instant",
                block: "start"
            });
        }
    }, 5000); // ⏳ 5 seconds loading
});