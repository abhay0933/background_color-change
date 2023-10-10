let body= document.querySelector('body');
body.style.backgroundColor= 'red';

let btn= document.querySelector("#btn");

let colors= ['black', 'blue', 'cyan', 'white', 'gray', 'yellow', 'purple', 'darkblue', 'pink', 'brown', 'orange', 'darkgreen', 'violet', 'salmon'];

btn.addEventListener('click', function(){
    
    let colorindex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor= colors[colorindex];
})


