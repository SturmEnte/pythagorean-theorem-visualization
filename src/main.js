const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

resize();
render();

let a = 1;
let b = 1;

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const unit = (path = new Path2D());
    path.moveTo(75, 50);
    path.lineTo(100, 75);
    path.lineTo(100, 25);
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