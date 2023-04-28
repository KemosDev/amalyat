const choose =document.getElementById('choose');
const ind =document.getElementById('ind');
const comp =document.getElementById('comp');

ind.style.display = 'none';
comp.style.display = 'none';

function show(value) {
    if (value == 1){
        ind.style.display = 'flex';
        comp.style.display = 'none';
        anime({
            targets: '.ind',
            opacity: [0,1],
            duration: 10000
        });
    } else if (value == 2){
        ind.style.display = 'none';
        comp.style.display = 'flex';
        anime({
            targets: '.comp',
            opacity: [0,1],
            duration: 10000
        });
    } else if (value == 0){
        alert('من فضلك اختر من القائمة');
        ind.style.display = 'none';
        comp.style.display = 'none';
    }
}
