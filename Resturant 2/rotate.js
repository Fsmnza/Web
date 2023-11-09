const rotatingImage = document.getElementById('rotatingImage');
let rotationAngle = 0;

function rotateImage() {
    rotationAngle = (rotationAngle + 1) % 360;
    rotatingImage.style.transform = `rotate(${rotationAngle}deg)`; 
    requestAnimationFrame(rotateImage); 
}

rotatingImage.addEventListener('mouseover', () => {
    rotateImage(); 
});

