const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

ctx.translate(0, canvas.height);
ctx.scale(1, -1);

let aV = 2;
let bV = 2;

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let w = 2 * aV + bV;
    let h = aV + 2 * bV;
    let ratio = w / h;
    console.log(ratio);

    let unit, xOff, yOff;

    if (canvas.width < canvas.height) {
        xOff = 0;
        yOff = (canvas.height - canvas.width) / 2;
    } else {
        xOff = (canvas.width - canvas.height) / 2;
        yOff = 0;
    }

    // Draw offset
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, xOff, canvas.height);
    ctx.fillRect(canvas.width - xOff, 0, xOff, canvas.height);
    ctx.fillRect(0, 0, canvas.width, yOff);
    ctx.fillRect(0, canvas.height - yOff, canvas.width, yOff);

    if (w > h) {
        unit = (canvas.width - 2 * xOff) / w;
    } else {
        unit = (canvas.height - 2 * yOff) / h;
    }

    let a = aV * unit;
    let b = bV * unit;

    // Base Trigangle
    ctx.fillStyle = "black";
    let path = new Path2D();
    path.moveTo(a + xOff, b + yOff);
    path.lineTo(a + xOff, a + b + yOff);
    path.lineTo(a + b + xOff, a + b + yOff);
    ctx.fill(path);

    // a²
    ctx.fillStyle = "red";
    ctx.fillRect(0 + xOff, b + yOff, a, a);

    // b²
    ctx.fillStyle = "blue";
    ctx.fillRect(a + xOff, a + b + yOff, b, b);

    // c²
    ctx.fillStyle = "orange";
    path = new Path2D();
    path.moveTo(a + xOff, b + yOff);
    path.lineTo(2 * a + xOff, 0 + yOff);
    path.lineTo(2 * a + b + xOff, a + yOff);
    path.lineTo(a + b + xOff, a + b + yOff);
    ctx.fill(path);
}

function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

new ResizeObserver(() => {
    resize();
    render();
}).observe(canvas);

resize();
render();

setInterval(() => {
    bV += 0.005;
    render();
}, 100);