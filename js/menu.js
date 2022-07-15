import { main,menuColor } from "./form-basic.js";

console.log(main);

main.addEventListener('mouseover',function(){
  menuColor.forEach(function(element){
    element.style.color = "#fff";
  });
  menuColor[1].style.color = "#FDE6B6";
});