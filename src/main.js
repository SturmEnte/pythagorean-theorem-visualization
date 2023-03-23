const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

canvas.onresize = resize;
resize();