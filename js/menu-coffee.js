import { main,menuColor } from "./form.js";

console.log(main);

main.addEventListener('mouseover',function(){
  menuColor.forEach(function(element){
    element.style.color = "#fff";
  });
  menuColor[1].style.color = "#FDE6B6";
});

const color = document.getElementsByClassName('bgColor');
console.log(color);

color[0].style.backgroundColor = "#EEDAB5";
color[1].style.backgroundColor = "#B4ADAD";
color[2].style.backgroundColor = "#6D6666";
color[3].style.backgroundColor = "#855B5B";
color[4].style.backgroundColor = "#362323";
color[5].style.backgroundColor = "#E7CEB4";
color[6].style.backgroundColor = "#B4856E";
color[7].style.backgroundColor = "#51382A";
color[8].style.backgroundColor = "#D3AFAA";
color[9].style.backgroundColor = "#DCA269";
color[10].style.backgroundColor = "#E7CEB4";


