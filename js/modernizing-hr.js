clock_compare = document.getElementById("clock-compare");

const clock_image = [];
clock_image[0] = "/img/modernizing-hr/clock-tile-ab.001.jpeg";
clock_image[1] = "/img/modernizing-hr/clock-tile-ab.002.jpeg";
clock_image[2] = "/img/modernizing-hr/clock-tile-ab.003.jpeg";
var x = -1;

function displayNextImage() {
    x = (x === clock_image.length - 1) ? 0 : x + 1;
    clock_compare.src = clock_image[x];
}

function startTimer() {
    setInterval(displayNextImage, 4000);
}

startTimer();
