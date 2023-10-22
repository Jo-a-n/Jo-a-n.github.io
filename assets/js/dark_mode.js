document.addEventListener('DOMContentLoaded', function() {
    const mode_toggles = document.querySelectorAll(".light-toggle");

    mode_toggles.forEach(function(mode_toggle) {
        mode_toggle.addEventListener("click", function() {
            toggleTheme(localStorage.getItem("theme"));
        });
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const mode_toggle = document.getElementById("light-toggle");

//     mode_toggle.addEventListener("click", function() {
//         toggleTheme(localStorage.getItem("theme"));
//     });
// });

