const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const contLink = document.getElementById('cont-link');
const bar = document.getElementById('bar');
const list = document.getElementById('list');

const home = document.getElementById('home');
const about = document.getElementById('about');
const cont = document.getElementById('cont');

about.style.display = 'none';
cont.style.display = 'none';

anime({
    targets: '.home',
    opacity: [0,1],
    duration: 10000
});
let isClicked = true;
let listSh = function() {
    if(isClicked){
        list.classList.add('show');
        isClicked = false;
        anime({
            targets: '.ul',
            opacity: [0,1],
            duration: 15000
        });
    } else {
        list.classList.remove('show');
        isClicked = true;
    }
}
let homeSh = function() {
    home.style.display = 'block';
    about.style.display = 'none';
    cont.style.display = 'none';
    anime({
        targets: '.home',
        opacity: [0,1],
        duration: 10000
    });
}
let aboutSh = function() {
    home.style.display = 'none';
    about.style.display = 'block';
    cont.style.display = 'none';
    anime({
        targets: '.about',
        opacity: [0,1],
        duration: 10000
    });
    anime({
        targets: '.special',
        scale: [0,1],
        duration: 10000,
        delay: 1000,
        direction: 'linear'
    });
}
let contSh = function() {
    home.style.display = 'none';
    about.style.display = 'none';
    cont.style.display = 'block';
    anime({
        targets: '.cont',
        opacity: [0,1],
        duration: 10000
    });
}
bar.addEventListener('click', listSh);
homeLink.addEventListener('click', homeSh);
aboutLink.addEventListener('click', aboutSh);
contLink.addEventListener('click', contSh);

let counter = 1;
setInterval(function() {
    document.getElementById(`radio${counter}`).checked = true;
    counter++
    if(counter > 4){
        counter = 1;
    }
},5000)