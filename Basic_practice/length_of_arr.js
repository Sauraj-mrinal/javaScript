console.log(" here we have to create tthe length of array")

var a = "Mrinal sauraj"
var count =0;
let i=0;
function cal_Length(str){

    // here we are working without length opt 
    
    while(a[i]!= undefined){
        count++;
        i++;
    }
    // return str.length;
    return count;
}
var l = cal_Length(a)
console.log(l);
console.log(a[0]);
//console.log(a[13]);



