import { main,menuColor } from "./form.js";

console.log(main);

main.addEventListener('mouseover',function(){
  menuColor.forEach(function(element){
    element.style.color = "#fff";
  });
  menuColor[5].style.color = "#FDE6B6";
});

const contacBox = document.getElementsByClassName('contactBox');

contacBox[0].style.backgroundColor = "#E7CEB4";
contacBox[1].style.backgroundColor = "#DCA269";
contacBox[2].style.backgroundColor = "#FDE6B6";
contacBox[3].style.backgroundColor = "#D3AFAA";
