let canvas = document.getElementById("stadiumCanvas");
let ctx = canvas.getContext("2d");
let elements = [];

function drawStadium() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    // Dibuja el campo de fútbol
    ctx.fillStyle = "#32CD32"; // Césped
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibuja los elementos (gradas, porterías, etc.)
    elements.forEach(el => {
        ctx.fillStyle = el.color;
        ctx.fillRect(el.x, el.y, el.width, el.height);
    });
}

function addSeats() {
    elements.push({
        x: Math.random() * (canvas.width - 100),
        y: Math.random() * (canvas.height - 50),
        width: 100,
        height: 50,
        color: "#FF6347" // Color de las gradas
    });
    drawStadium();
}

function addGoal() {
    elements.push({
        x: canvas.width / 2 - 50,
        y: 10,
        width: 100,
        height: 20,
        color: "#FFD700" // Color de la portería
    });
    drawStadium();
}

function changeColor() {
    elements.forEach(el => {
        el.color = el.color === "#FF6347" ? "#1E90FF" : "#FF6347"; // Cambiar entre dos colores
    });
    drawStadium();
}

function resetStadium() {
    elements = [];
    drawStadium();
}

drawStadium();
