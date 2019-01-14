var b = ""; // переменная для рекурсии
function Task_1() {
    var el = this.document.getElementById("content1");
    var s;
    s = this.document.getElementById("1").value.split("").reverse().join("");
    //alert(s);
    el.innerHTML = "Перевернутая строка: " + s;
}
function Task_2() {
    var el = this.document.getElementById("content2");
    var s;
    s = this.document.getElementById("2").value;
    reverse(s);
    function reverse(s) {
        var a;
        if (s.length > 1) {
            a = s.substr(s.length - 1, 1);
            b = b + a;
            //alert(b);
            reverse(s.substr(0, s.length - 1));
        }
        else {
            b = b + s;
            el.innerHTML = b;
        }
    }
}
function Task_3() {
    var el = this.document.getElementById("content3");
    var s;
    s = this.document.getElementById("3").value.split("").reverse().join("");
    if (s == this.document.getElementById("3").value)
        el.innerHTML = "YES";
    else
        el.innerHTML = "NO";
}
function Task_4() {
    var el = this.document.getElementById("content4");
    var s;
    s = this.document.getElementById("4").value;
    var array_s = s.split(",").map(Number);
    var c = Math.max.apply(null, array_s);
    //array_s.sort((a, b) => a - b);
    el.innerHTML = array_s.indexOf(c);
}
function Task_7() {
    var el = this.document.getElementById("content7");
    var s;
    s = this.document.getElementById("7").value;
    var a = s.substr(0, 1);
    var b = s.substr(s.length - 1, 1);
    var c = s.substr(1, s.length - 2).length;
    el.innerHTML = a + c + b;
}
function Task_8() {
    var el = this.document.getElementById("content8");
    var s;
    var l;
    var lmax = 1;
    s = this.document.getElementById("8").value;
    var array_s = s.split(",").map(Number);
    for (var i = 1; i < array_s.length; i++) {
        l = 1;
        while (array_s[i] >= array_s[i - 1]) {
            i++;
            l++;
        }
        if (l > lmax)
            lmax = l;
    }
    el.innerHTML = lmax;
}
function Task_9() {
    var el = this.document.getElementById("content9");
    var s;
    s = this.document.getElementById("9").value;
    var array_s = s.split(",").map(Number);
    var total = 0;
    for (var i = 0; i < array_s.length; i++) {
        total += array_s[i];
    }
    var avg = total / array_s.length;
    el.innerHTML = avg;
}
function Task_10() {
    var el = this.document.getElementById("content10");
    var s;
    s = this.document.getElementById("10").value;
    var n = parseInt(s);
    var b = true;
    if (n > 100) {
        el.innerHTML = "TOO BIG NUMBER!";
        return;
    }
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            b = false;
            break;
        }
    }
    if (b)
        el.innerHTML = "Простое";
    else
        el.innerHTML = "Не простое";
}
//# sourceMappingURL=app.js.map