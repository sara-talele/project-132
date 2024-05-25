img = "";
Status = "";

function preload() {
    img = loadImage("bed.png");
}

function setup() {
    canvas = createCanvas(640, 340);
    canvas.center();
    ObjectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status : Detected Object";
}

function modelloaded() {
    console.log("cocossd is loaded");
    Status = true;
    ObjectDetector.detect(img, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("red");
    noFill();
    stroke("red");
    rect(120, 70, 450, 320);
    text("Bed", 130, 85);
    fill("red");
    noFill();
    stroke("red");
    rect(10, 90, 150, 200);
    text("Tea Table", 20, 100);
    fill("red");
    noFill();
    stroke("red");
    rect(470, 180, 150, 200);
    text("Table", 480, 190);
}