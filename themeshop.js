// ===============================
// INFINITY SPOT THEME SHOP (FIXED)
// ===============================

// Get Best Score
let bestScore = parseInt(localStorage.getItem("bestScore") || "0");

// Current Theme
let selectedTheme = localStorage.getItem("theme") || "night";

// Theme Data
const themes = {
    night: { unlock: 0 },
    lava: { unlock: 100 },     // 🔥 unlock at 100
    galaxy: { unlock: 200 },
    snow: { unlock: 500 },
    forest: { unlock: 1000 }
};

// ===============================
// INIT
// ===============================
window.addEventListener("load", () => {
    refreshThemeData();
});

// ===============================
// Refresh Data (IMPORTANT)
// ===============================
function refreshThemeData() {
    bestScore = parseInt(localStorage.getItem("bestScore") || "0");
    selectedTheme = localStorage.getItem("theme") || "night";
    updateButtons();
}

// ===============================
// Update Buttons
// ===============================
function updateButtons() {

    setThemeButton("lavaBtn", "lava");
    setThemeButton("galaxyBtn", "galaxy");
    setThemeButton("snowBtn", "snow");
    setThemeButton("forestBtn", "forest");
}

// ===============================
// Button Logic (FIXED)
// ===============================
function setThemeButton(id, name) {

    const btn = document.getElementById(id);
    if (!btn) return;

    if (bestScore >= themes[name].unlock) {

        btn.innerHTML = "SELECT";
        btn.classList.remove("lock");

        btn.onclick = function () {
            selectTheme(name);
        };

    } else {

        btn.innerHTML = "LOCK 🔒";
        btn.classList.add("lock");

        btn.onclick = function () {
            alert("🔒 Need " + themes[name].unlock + " score to unlock!");
        };
    }
}

// ===============================
// Select Theme
// ===============================
function selectTheme(name) {

    localStorage.setItem("theme", name);
    selectedTheme = name;

    alert(name.toUpperCase() + " Theme Selected!");

    applyTheme(name);
}

// ===============================
// Apply Theme (optional live change)
// ===============================
function applyTheme(name) {

    document.body.className = ""; // reset
    document.body.classList.add(name);
}

// ===============================
// Default Theme
// ===============================
function selectThemeDefault() {

    localStorage.setItem("theme", "night");
    applyTheme("night");

    alert("Night Theme Selected!");
}

// ===============================
// LIVE SYNC (from main.js)
// ===============================
window.addEventListener("storage", function () {
    refreshThemeData();
});

// Custom event support (best)
window.addEventListener("scoreUpdated", function () {
    refreshThemeData();
});

// ===============================
// END
// ===============================
