// 13. Create a program to **reverse an array**.

// 
// first i want to create the array 
a = [1,2,3,4,5,6];

console.log("Befor revrse my array is ->"+a);

let i=0; 
let j =a.length-1;

function rev(arr){
 while( i<j){
 var t = a[i];
     a[i] = a[j];
     a[j] = t;

    i++;
    j--;
 }
}

rev(a);
console.log("after reversing the element of array "+a);

