const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const windowHalfWidth = windowWidth / 2;

var eyes = document.getElementsByClassName("eye");
var balls = document.getElementsByClassName("ball");

document.onmousemove = () => {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let x = (mouseX * 100) / windowWidth;
    let y = (mouseY * 100) / windowHeight;
    let refFrameWidth = windowWidth;
    let eyeLeft = 0;

    for (let i = 0; i < eyes.length; i++) {

    let eyeWidth = eyes[i].offsetWidth;
    let eyeStyles = window.getComputedStyle(eyes[i]);

    if (i === 0) {
        let eyeCenter = windowHalfWidth - (eyeWidth / 2) - parseInt(eyeStyles.marginRight);
        eyeLeft = eyeCenter - (eyeWidth / 2);
        refFrameWidth = eyeWidth; // + (eyeLeft * 2); 
    } else if (i === 1) {
        let eyeCenter = windowHalfWidth + (eyeWidth / 2) + parseInt(eyeStyles.marginLeft);
        eyeLeft = eyeCenter - (eyeWidth / 2);
        let refFrameLeft = eyeCenter - (eyeWidth / 2);
    }

    let mouseXRel = mouseX - eyeLeft;
    x = (mouseXRel * 100) / refFrameWidth;
    if (x > 85) x = 85;
    if (x < 15) x = 15;
    if (y > 80) y = 80;
    if (y < 20) y = 20;

    balls[i].style.left = x + "%";
    balls[i].style.top = y + "%";
    balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";

    }
};