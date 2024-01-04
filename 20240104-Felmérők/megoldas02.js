let alap=Number(prompt("Add meg a hatványalapot!"));
let kitevo=Number(prompt("Add meg a hatványkitevőt!"));;
document.write(`${alap}<sup>${kitevo}</sup>=`+Math.pow(alap,kitevo));