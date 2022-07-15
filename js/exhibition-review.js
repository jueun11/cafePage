import { main,menuColor } from "./form.js";

console.log(main);

main.addEventListener('mouseover',function(){
  menuColor.forEach(function(element){
    element.style.color = "#fff";
  });
  menuColor[2].style.color = "#FDE6B6";
});

const textColor = document.getElementsByClassName('textColor');
textColor[0].style.backgroundColor = "#DCA269";
textColor[1].style.backgroundColor = "#D3AFAA";
textColor[2].style.backgroundColor = "#E7CEB4";
textColor[3].style.backgroundColor = "#B4ADAD";
textColor[4].style.backgroundColor = "#FDE6B6";

