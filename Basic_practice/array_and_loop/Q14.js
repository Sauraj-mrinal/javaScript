// **Find the smallest number** in an array.

var b = [23,45,21,45,67,8];
var i=0;
let big = b[0];
function rev(arr){

    while( i<arr.length){
        if(big<arr[i]){
            big = arr[i];
        }

        i++;
    }
    return big;
   }

   console.log(rev(b));
   

