import { main,menuColor } from "./form.js";

console.log(main);

main.addEventListener('mouseover',function(){
  menuColor.forEach(function(element){
    element.style.color = "#fff";
  });
  menuColor[3].style.color = "#FDE6B6";
});

const clickmenu = document.getElementsByClassName('clickmenu');

clickmenu[0].style.backgroundColor = "#51382a";
clickmenu[0].style.color = "#E7CEB4";
