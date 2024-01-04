let szamtol=Number(prompt("Add meg a kezdőértéket!"));
let szamig=Number(prompt("Add meg a határértékez"));;

for(let i=szamtol;i<=szamig;i++){
	if(i%2==0){
    	document.write(i+",");
    }
}