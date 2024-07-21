let students=["akhil","markandeya","Aish"]
console.log(students);
let info=["akhil",22,89.3];
//empty array 
let emptyarray=[];
console.log(emptyarray);
let n = prompt("enter any number");
n=parseInt(n);
for(let i=n;i<=n*10;i=i+n){
    console.log(i);
}



for(let i=1;i<=3;i++){
console.log("inner loop");
    for(j=1;j<=3;j++){
        console.log(i);
    }
}