let eletkor=Number(prompt("Add meg az életkorod!"));

if(eletkor==0 || eletkor<6){
	document.write("Kisgyermekkor");
} else if (eletkor==6 || eletkor<12) {
	document.write("Gyermekkor");
} else if (eletkor==12 || eletkor<16) {
	document.write("Serdülőkor");
} else if (eletkor==16 || eletkor<20) {
	document.write("Ifjúkor");
} else if (eletkor==20 || eletkor<30) {
	document.write("Fiatal felnőtt kor");
} else if (eletkor==30 || eletkor<60) {
	document.write("Felnőtt kor");
} else if (eletkor>=60 || eletkor<=120) {
	document.write("Aggkor");
} else {
	document.write("Hibás érték");
}