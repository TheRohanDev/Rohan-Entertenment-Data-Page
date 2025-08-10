// window.addEventListener("load", function() {
//     const hash = window.location.hash;

//     if (hash) {
//         // Sabhi elements jinme id ho — aur div ya section tag ho — unko hide karo
//         const allSections = document.querySelectorAll("div[id], section[id]");
//         allSections.forEach((el) => {
//             el.style.display = "none";
//         });

//         // URL ke hash se jo id mili hai usko show karo
//         const target = document.querySelector(hash);
//         if (target) {
//             target.style.display = "block";
//         }
//     }
// });














// *******************************************important code for [Direct open website data ]*************************************************************************************




// window.addEventListener("DOMContentLoaded", function() {
//     const hash = window.location.hash || "#defaultsection";

//     const allSections = document.querySelectorAll("div[id], section[id]");
//     allSections.forEach((el) => {
//         el.style.display = "none";
//     });

//     setTimeout(() => {
//         const target = document.querySelector(hash);
//         if (target) {
//             target.style.display = "block";
//             target.scrollIntoView({
//                 behavior: "instant",
//                 block: "start"
//             });
//         }
//     }, 10);
// });












// *******************************************important code for [ 5 sec animation then Main website data ] *************************************************************************************





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
    }, 3000); // ⏳ 5 seconds loading
});