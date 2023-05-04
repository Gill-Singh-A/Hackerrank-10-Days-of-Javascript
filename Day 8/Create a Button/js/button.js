var x = document.createElement("button");
x.id = 'btn';
x.innerHTML = '0';
document.body.appendChild(x);
x.onclick = function() {
    x.innerHTML++;
}