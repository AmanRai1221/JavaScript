const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
// console.log(randomColor());

let intervalId;
const startChangeColor = function(){
    intervalId = setInterval(changeBgColor, 2000);
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
    changeBgColor();
}

const stopChangeColor = function(){
    clearInterval(intervalId);
}

document.querySelector('#start').addEventListener('click', startChangeColor)

document.querySelector('#stop').addEventListener('click', stopChangeColor)
