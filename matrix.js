// 1) Grab the canvas and 2D context
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// 2) Size the canvas to the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 3) Characters to draw (letters, numbers, symbols)
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";
const charArray = chars.split("");

// 4) Font size and columns
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

// 5) Array to track the vertical position (drop) of each column
const drops = Array(columns).fill(1);

// 6) Draw function (runs every frame)
function drawMatrix() {
    // a) Fade the canvas slightly (trail effect)
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // b) Set text characteristics
    ctx.fillStyle = "#00FF00"; // green
    ctx.font = fontSize + "px monospace";

    // c) Loop through each column
    for (let i = 0; i < drops.length; i++) {
        // Pick a random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        // Draw it at (x, y)
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Move the drop down
        drops[i]++;

        // Reset to top randomly when it goes off bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
    }
}

// 7) Animate (~30 fps)
setInterval(drawMatrix, 33);

// 8) Update canvas size on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
