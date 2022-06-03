let square = document.getElementById('squareID');

window.addEventListener('load', () =>{
    square.style.position = 'absolute';
    square.style.right = 0;
});

var myVar = setInterval(moove, 2);

function moove() {
    if (square.style.right == (1920-250)+'px'){
        return;
    }
    square.style.right = parseInt(square.style.right) + 1 + 'px';
}