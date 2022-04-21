const up = document.getElementById('up');
const down = document.getElementById('down');
const Images = document.querySelector('.image-box');
up.addEventListener('click', function() {
    for (let i = 0; i < Images.length; i++) {
        Images[i].style.transform = 'translate(0, -100px)';
    }
});