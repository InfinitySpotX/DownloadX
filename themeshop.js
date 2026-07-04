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
// PREMIUM THEME PREVIEW ANIMATION
// ===============================

let previewRunning = true;

// Stop after 15 seconds
setTimeout(() => {
    previewRunning = false;
}, 15000);

// Start when page loads
window.addEventListener("load", () => {

    animateGalaxy();
    animateSnow();
    animateForest();
    animateLava();

});

// ================= GALAXY =================

function animateGalaxy(){

    const box = document.querySelector(".preview-galaxy");

    if(!box) return;

    setInterval(()=>{

        if(!previewRunning) return;

        const star = document.createElement("div");

        star.style.position="absolute";
        star.style.width="3px";
        star.style.height="3px";
        star.style.borderRadius="50%";
        star.style.background="#fff";
        star.style.boxShadow="0 0 12px white";

        star.style.left=Math.random()*70+"px";
        star.style.top=Math.random()*70+"px";

        box.appendChild(star);

        star.animate([
            {opacity:0},
            {opacity:1},
            {opacity:0}
        ],{
            duration:1200
        });

        setTimeout(()=>{
            star.remove();
        },1200);

    },150);

}

// ================= SNOW =================

function animateSnow(){

    const box=document.querySelector(".preview-snow");

    if(!box) return;

    setInterval(()=>{

        if(!previewRunning) return;

        const snow=document.createElement("div");

        snow.innerHTML="❄";

        snow.style.position="absolute";
        snow.style.left=Math.random()*70+"px";
        snow.style.top="-15px";
        snow.style.color="white";
        snow.style.fontSize="12px";

        box.appendChild(snow);

        snow.animate([
            {
                transform:"translateY(0px)"
            },
            {
                transform:"translateY(90px)"
            }
        ],{
            duration:2200
        });

        setTimeout(()=>{
            snow.remove();
        },2200);

    },180);

}

// ================= FOREST =================

function animateForest(){

    const box=document.querySelector(".preview-forest");

    if(!box) return;

    setInterval(()=>{

        if(!previewRunning) return;

        const leaf=document.createElement("div");

        leaf.innerHTML="🍃";

        leaf.style.position="absolute";
        leaf.style.left=Math.random()*60+"px";
        leaf.style.top="-10px";
        leaf.style.fontSize="12px";

        box.appendChild(leaf);

        leaf.animate([
            {
                transform:"translate(0,0) rotate(0deg)"
            },
            {
                transform:"translate(20px,90px) rotate(360deg)"
            }
        ],{
            duration:2600
        });

        setTimeout(()=>{
            leaf.remove();
        },2600);

    },250);

}

// ================= LAVA =================

function animateLava(){

    const box=document.querySelector(".preview-lava");

    if(!box) return;

    setInterval(()=>{

        if(!previewRunning) return;

        const bubble=document.createElement("div");

        bubble.style.position="absolute";
        bubble.style.width="8px";
        bubble.style.height="8px";
        bubble.style.borderRadius="50%";

        bubble.style.background="orange";

        bubble.style.left=Math.random()*60+"px";
        bubble.style.bottom="0px";

        box.appendChild(bubble);

        bubble.animate([
            {
                transform:"translateY(0px)",
                opacity:1
            },
            {
                transform:"translateY(-70px)",
                opacity:0
            }
        ],{
            duration:1400
        });

        setTimeout(()=>{
            bubble.remove();
        },1400);

    },120);

    }

// ===============================
// END
// ===============================
