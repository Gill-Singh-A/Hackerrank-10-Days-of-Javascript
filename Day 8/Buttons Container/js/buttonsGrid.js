var b = ["btn1", "btn2", "btn3", "btn6", "btn9", "btn8", "btn7", "btn4"];
var bvalues = [1, 2, 3, 6, 9, 8, 7, 4];
var j = 0;
document.getElementById("btn5").onclick = function() {
    var arr = bvalues.slice();
    for(var i = 0; i < 8; i++)
        if( i-1 < 0 )
            bvalues[i] = arr[8-i-1];
        else
            bvalues[i] = arr[i-1];
    for(var i = 0; i < 8; i++)
        document.getElementById(b[i]).innerHTML = bvalues[i];
    j++;
}