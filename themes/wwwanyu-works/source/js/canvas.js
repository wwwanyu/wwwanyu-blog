const canvas = document.querySelector("#canvas1");
const rectangles_canvas = document.querySelector("#rectangles");
const ctx = canvas.getContext('2d');
const rectangles_ctx = rectangles_canvas.getContext('2d');
const pentagramBase = { x: 200, y: 440 };
const radius = 200;
const mouse = new Image();
const fish = new Image();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
rectangles_canvas.width = window.innerWidth;
rectangles_canvas.height = window.innerHeight;
let mouseWidth = 100;
let mouseHeight = 100;
let fishWidth = 100;
let fishHeight = 100;
let fishX = canvas.width - fishWidth,
    fishY = mouseHeight + 10;
let mouseX = canvas.width - mouseWidth,
    mouseY = 0;
let draggable = false;
let overlay = false;
let vertexX = 0;

mouse.src = '/images/evil-pentagram/mouse.png';
fish.src = '/images/evil-pentagram/fish.png'

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.strokeStyle = '#00FF0A';
    ctx.moveTo(410, 260);
    ctx.arc(200, 240, 210, 0, Math.PI * 2);
    ctx.stroke();
    ctx.moveTo(pentagramBase.x, pentagramBase.y);
    ctx.beginPath();
    for (var i = 1; i <= 5; ++i) {
        var th = i * 4 * Math.PI / 5;
        var x = pentagramBase.x - radius * Math.sin(th);
        var y = pentagramBase.y - radius + radius * Math.cos(th);
        ctx.lineTo(x, y);
    }
    ctx.lineJoin = 'miter';
    ctx.closePath();
    ctx.stroke();
    for (var i = 1; i <= 5; ++i) {
        var th = i * 4 * Math.PI / 5;
        vertexX = pentagramBase.x - radius * Math.sin(th);
        var y = pentagramBase.y - radius + radius * Math.cos(th);
        rectangles_ctx.fillRect(vertexX - 50, y - 50, 100, 100);
    }
    ctx.drawImage(mouse, mouseX, mouseY, mouseWidth, mouseHeight);
    requestAnimationFrame(animate);
}
animate();

randomColors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
rectangles_ctx.fillStyle = `rgba(${randomColors}, 1)`;

window.addEventListener('mousedown', e => {
    if (
        e.layerX <= (mouseX + mouseWidth) &&
        e.layerX >= (mouseX) &&
        e.layerY <= (mouseY + mouseHeight) &&
        e.layerY >= (mouseY)
    ) {
        draggable = true;
    }
})

window.addEventListener('mousemove', e => {
    if (draggable) {
        mouseX = e.layerX - (mouseWidth / 2);
        mouseY = e.layerY - 40;
        mouseWidth = 140
        mouseHeight = 140
    }
})

window.addEventListener('mouseup', e => {
    const imageDatas = rectangles_ctx.getImageData(mouseX + 50, mouseY + 50, 1, 1).data;
    draggable = false;
    mouseWidth = 100;
    mouseHeight = 100;
    const r = imageDatas[0];
    const g = imageDatas[1];
    const b = imageDatas[2];
    const a = imageDatas[3] / 255;

    // Log the RGBA values
    console.log(`RGBA: (${r}, ${g}, ${b}, ${a})`);
    console.log(`mouse is at x:${mouseX}, y:${mouseY}`);
})

//Todo:
// 1. Add more objects
// 2. make canvas web page responsive
// 3. improve the drag&drop experience on mobile
