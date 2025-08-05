window.addEventListener("load", function() {
    const hash = window.location.hash;

    if (hash) {
        // Sabhi elements jinme id ho — aur div ya section tag ho — unko hide karo
        const allSections = document.querySelectorAll("div[id], section[id]");
        allSections.forEach((el) => {
            el.style.display = "none";
        });

        // URL ke hash se jo id mili hai usko show karo
        const target = document.querySelector(hash);
        if (target) {
            target.style.display = "block";
        }
    }
});