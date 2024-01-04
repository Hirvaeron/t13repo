let szam=Number(prompt("Add meg a vizsgálandó számot!"));
let oszto=Number(prompt("Add meg a vizsgálandó osztót!"));

if(szam%oszto==0){
	document.write(`A megadott ${szam} szám osztható a megadott ${oszto} osztóval úgy, hogy a maradékuk 0 legyen.`);
} else {
	document.write(`A megadott ${szam} szám nem osztható a megadott ${oszto} osztóval úgy, hogy a maradékuk 0 legyen.`);
}