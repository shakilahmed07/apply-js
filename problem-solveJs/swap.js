var c = 10;
var d = 20;

var temp = c;
c = d;
d = temp;
// console.log(`After Swap: c =`, c, `d =`, d);

var x = 5;
var y = 7;

x = x + y;
y = x - y;
x = x - y;
// console.log(`After Swap: x =`, x, `y =`, y);

var p = 10;
var q = 5;

[p, q] = [q, p];
console.log(`After Swap: p =`, p, `q =`, q);
