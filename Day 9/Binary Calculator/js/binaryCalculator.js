var res = document.getElementById("res");
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btnClr = document.getElementById("btnClr");
var btnEql = document.getElementById("btnEql");
var btnSum = document.getElementById("btnSum");
var btnSub = document.getElementById("btnSub");
var btnMul = document.getElementById("btnMul");
var btnDiv = document.getElementById("btnDiv");

var str = "", str2 = "";
var i = [], a = 0;
var f = "";

function zero() {
    str += "0";
    str2 += "0";
    res.innerHTML = str;
}
function one() {
    str += "1";
    str2 += "1";
    res.innerHTML = str;
}
function clr() {
    str = "";
    res.innerHTML = str;
}
function eql() {
    i[a] = parseInt(str2, 10);
    str2 = "";
    a++;
    var r = i[0];
    for(var j = 1; j < a; j++)
        switch(f[j-1]) {
            case "+":
                r += i[j];
                break;
            case "-":
                r -= i[j];
                break;
            case "*":
                r *= i[j];
                break;
            case "/":
                r /= i[j];
                r = Math.floor(r);
                break;
        }
    a = 0;
    i = [];
    f = "";
    str = r.toString(2);
    res.innerHTML = str;
    str = "";
}
function sm() {
    i[a] = parseInt(str2, 2);
    str2 = "";
    a++;
    str += "+";
    f += "+";
    res.innerHTML = str;
}
function sb() {
    i[a] = parseInt(str2, 2);
    str2 = "";
    a++;
    str += "-";
    f += "-";
    res.innerHTML = str;
}
function ml() {
    i[a] = parseInt(str2, 2);
    str2 = "";
    a++;
    str += "*";
    f += "*";
    res.innerHTML = str;
}
function dv() {
    i[a] = parseInt(str2, 2);
    str2 = "";
    a++;
    str += "/";
    f += "/";
    res.innerHTML = str;
}

btn0.onclick = zero;
btn1.onclick = one;
btnClr.onclick = clr;
btnEql.onclick = eql;
btnSum.onclick = sm;
btnSub.onclick = sb;
btnMul.onclick = ml;
btnDiv.onclick = dv;
