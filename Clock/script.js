let clock = document.querySelector('.clock');
let p = document.createElement('p');
setInterval(function(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    p.innerHTML = time;
    p.style.color = 'white';
    p.style.fontSize = '120px';
    p.style.marginLeft = '10px';
    clock.appendChild(p);

}, 1000);