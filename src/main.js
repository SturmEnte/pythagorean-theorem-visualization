const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

ctx.translate(0, canvas.height);
ctx.scale(1, -1);

let a = 2;
let b = 1;

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let w = 2 * a + b;
    let h = a + 2 * b;

    let unit, xOff, yOff;

    if (canvas.width < canvas.height) {
        unit = canvas.width / w;
        xOff = 0;
        yOff = (canvas.height - canvas.width) / 2;
    } else {
        unit = canvas.height / h;
        xOff = (canvas.width - canvas.height) / 2;
        yOff = 0;
    }

    a = a * unit;
    b = b * unit;

    // Base Trigangle
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