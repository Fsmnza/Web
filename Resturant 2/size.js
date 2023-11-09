document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
        const image = document.getElementById('logo');
        const currentWidth = parseInt(getComputedStyle(image).width, 10);
        const currentHeight = parseInt(getComputedStyle(image).height, 10);
        const newWidth = currentWidth * 1.2; 
        const newHeight = currentHeight * 1.2;
        image.style.width = newWidth + 'px';
        image.style.height = newHeight + 'px';
    }
});