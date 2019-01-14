
var b: string = "";// переменная для рекурсии

function Task_1() {
    var el = this.document.getElementById("content1");
    let s: string;
    s =this.document.getElementById("1").value.split("").reverse().join("");
    //alert(s);
    el.innerHTML = "Перевернутая строка: " + s;
   
}

function Task_2() {
    var el = this.document.getElementById("content2");
    let s: string;
    s = this.document.getElementById("2").value;
    reverse(s);


    function reverse(s: string) { // рекурсивная функция
        var a: string;

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
    let s: string;
    s = this.document.getElementById("3").value.split("").reverse().join("");
    if (s == this.document.getElementById("3").value) el.innerHTML = "YES"
    else el.innerHTML = "NO";
}

function Task_4() {
    var el = this.document.getElementById("content4");
    let s: string;
    s = this.document.getElementById("4").value;
    let array_s = s.split(",").map(Number);
    let c = Math.max.apply(null, array_s);
    //array_s.sort((a, b) => a - b);
    el.innerHTML = c;
}
function Task_7() {
    var el = this.document.getElementById("content7");
    let s: string;
    s = this.document.getElementById("7").value;
    let a = s.substr(0, 1);
    let b = s.substr(s.length - 1, 1);
    let c = s.substr(1, s.length - 2).length;
    el.innerHTML =a + c + b;
}
function Task_8() {
    var el = this.document.getElementById("content8");
    let s: string;
    let l: number;
    let lmax: number = 1;
    s = this.document.getElementById("8").value;
    let array_s = s.split(",").map(Number);
    for (let i: number = 1; i < array_s.length; i++) {
        l = 1;
        while (array_s[i] >= array_s[i - 1]) {
            i++;
            l++;
        }
        if (l > lmax) lmax = l;
    }
    el.innerHTML = lmax;
}

function Task_9() {
    var el = this.document.getElementById("content9");
    let s: string;
    s = this.document.getElementById("9").value;
    let array_s = s.split(",").map(Number);
    let total: number = 0;
    for (let i: number = 0; i < array_s.length; i++) {
        total += array_s[i];
    }
    let avg: number = total / array_s.length;
    el.innerHTML = avg;
}

function Task_10() {
    var el = this.document.getElementById("content10");
    let s: string;
    s = this.document.getElementById("10").value;
    let n: number = parseInt(s);
    let b: boolean = true;
    if (n > 100) {
        el.innerHTML = "TOO BIG NUMBER!";
        return;
    }
    for (let i: number = 2; i < n; i++) {
        if (n % i == 0) {
            b = false;
            break;
        }
    }
    if (b) el.innerHTML = "Простое"
    else el.innerHTML = "Не простое";
}




