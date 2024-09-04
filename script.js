let cols;let rows;let size =50;
let arrows = [];
let xoff = 0; let yoff = 0;let increment = 0.1;

function setup() {
    createCanvas(400, 400);
    cols = width/size;
    rows = height/size;
}

function draw() {
    background(220);
    xoff = 0;
    for (let i = 0; i < cols; i++) {
        arrows[i] = [];
        yoff = 0;
        for(let j = 0; j < rows; j++) {
            let angle = noise(xoff, yoff);
            text(round(angle, 2), size/2+i*size, size/2+j*size);
            yoff += increment;
        }
        xoff += increment
    }
}
