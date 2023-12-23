var bulb = document.querySelector('.bulb-container');
var b1= document.querySelector('.light-filament');
var b2 = document.querySelector('.bulb-neck');
var btn = document.querySelector("button")


var flag=0;
btn.addEventListener("click", function(){
  if(flag == 0){
    bulb.style.backgroundColor = "yellow"
    b2.style.backgroundColor = "black"
    b1.style.backgroundColor = "pink"
    flag=1;

  }else{
    bulb.style.backgroundColor = "transparent"
    b1.style.backgroundColor = "transparent"
    flag = 0;
  }
})