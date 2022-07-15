const menu = Array.from(document.querySelectorAll('#menu >li>h2')); 
const menuSub = document.getElementsByClassName('menu_sub');
const menuBg = document.getElementById('menuBg');
const menuSubli = Array.from(document.querySelectorAll('.menu_sub > li'));

let BGheightValue = 0;
let LIheightValue = 0;
let mouseEvent = true;

function fadeInBG (event){
  console.log('메뉴위에 마우스 올림');
  mouseEvent = true;
    menuBg.style.display = "flex";
    for(let i = 0; i < menuSubli.length; i++){
      menuSubli[i].style.display = "block";
      let fadeInBG = setInterval(function(){
      menuBg.style.height = BGheightValue + "vh";
        if(BGheightValue < 30 ){
          BGheightValue = BGheightValue + 0.05;
          if(mouseEvent == false){
            clearInterval(fadeInBG);
          }
        }
        else {
          BGheightValue = 30;
          clearInterval(fadeInBG);
        }
      },0.1);

      let fadeInSub = setInterval(function(){
        menuSubli[i].style.height = LIheightValue + "vh";
          if(LIheightValue < 4 ){
            LIheightValue = LIheightValue+ 0.02;
            if(mouseEvent == false){
              clearInterval(fadeInBG);
            }
          }
          else {
            LIheightValue = 4;
            clearInterval(fadeInSub);
          }
        },0.1);
    }
}


function fadeOutBG (event){
  console.log("밖으로");
  mouseEvent = false;
  let fadeOutBG = setInterval(function(){
    menuBg.style.height = BGheightValue + "vh";
    if(BGheightValue > 0 ){
        BGheightValue = BGheightValue - 1;
        if(mouseEvent == true){
          clearInterval(fadeOutBG);
        }
      }
      else {
        BGheightValue = 0;
        clearInterval(fadeOutBG);
      }
    },0.1);
    for(let i = 0; i < menuSubli.length; i++){
    let fadeOutSub = setInterval(function(){
      menuSubli[i].style.height = LIheightValue + "vh";
      if(LIheightValue > 0 ){
        LIheightValue = LIheightValue - 1;
          if(mouseEvent == true){
            clearInterval(fadeOutSub);
          }
        }
        else {
          LIheightValue = 0;
          menuSubli[i].style.display = "none";
          clearInterval(fadeOutSub);
        }
      },0.1);
    }
}

for(let i =0; i< menu.length; i++){
  menu[i].addEventListener('mouseover', fadeInBG);
  
}
  const main = document.querySelector('main');
  main.addEventListener('mouseover', fadeOutBG);


  // 메뉴 색상 변경
  let menuColor = Array.from(document.querySelectorAll('#menu > li > h2 > a'));

  function colorValue(event){
    menuColor.forEach(function(element){
      element.style.color = "#fff";
    });
    event.target.style.color = "#FDE6B6";
  }

  for(let i = 0; i<menuColor.length; i++){
    menuColor[i].addEventListener('mouseover',colorValue);
  }

  export {main,menuColor};


