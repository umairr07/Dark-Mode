const btn = document.querySelector('.circle');
const text = document.querySelector('.head1');

btn.addEventListener("click", function () {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';

    head1.style.color = head1.style.color === 'white' ? 'black' : 'white';
});

let moveRight = false;
function toggle() {
    var div = document.getElementById("myCir");

    if (!moveRight) {
        div.style.transform = "translateX(70px)";
    } else {
        div.style.transform = "none";
    }
    moveRight = !moveRight;

}

const sunBtn = document.querySelector('#sunImg')
sunBtn.addEventListener("click", function () {
    var div = document.getElementById("myCir");

    if (!moveRight) {
        div.style.transform = "translateX(70px)";
    } else {
        div.style.transform = "none";
    }
    moveRight = !moveRight;

    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';

    head1.style.color = head1.style.color === 'white' ? 'black' : 'white';
})


const moonBtn = document.querySelector('#moonImg')

moonBtn.addEventListener("click", function () {
    var div = document.getElementById("myCir");

    if (!moveRight) {
        div.style.transform = "translateX(70px)";
    } else {
        div.style.transform = "none";
    }
    moveRight = !moveRight;

    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';

    head1.style.color = head1.style.color === 'white' ? 'black' : 'white';
}) 
