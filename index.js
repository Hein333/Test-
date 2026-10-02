console.log("apple");
let textHolder = document.getElementById("apple");
textHolder.textContent = "0";
let counter = 0;

document.getElementById("plus").onclick = function(){
    counter += 1;
    textHolder.textContent = counter;
}

document.getElementById("minus").onclick = function(){
    counter -= 1;
    textHolder.textContent = counter;
}

document.getElementById("reset").onclick = function(){
    counter = 0;
    textHolder.textContent = counter;
}

