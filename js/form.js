const menu = Array.from(document.querySelectorAll('#menu >li>h2')); 
const menuSub = document.getElementsByClassName('menu_sub');
const menuBg = document.getElementById('menuBg');
const menuSubli = Array.from(document.querySelectorAll('.menu_sub > li'));

let BGheightValue = 0;
let LIheightValue = 0;
let mouseEvent = true;

function fadeInBG (event){
  // console.log('메뉴위에 마우스 올림');
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
  // console.log("밖으로");
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


  //스크롤 아래로 내렸을때 메뉴 바 뒤에 배경생기는 기능

  const firstDiv = document.getElementById('headBg');
  // console.log(firstDiv.clientHeight);
  
  const divBg = document.createElement('div');
  divBg.id = 'divBg';

  divBg.style.width = 100+"vw";
  divBg.style.height = 12+"vh";
  divBg.style.backgroundColor = "black";
  divBg.style.position = "fixed";
  divBg.style.top = 0;
  divBg.style.opacity = 0;
  divBg.style.transition = "0.5s";

  main.appendChild(divBg);


  document.body.addEventListener('wheel',function(){
    console.log(main);
    let winY = window.pageYOffset;
    console.log(winY);
    if(winY > firstDiv.clientHeight-firstDiv.clientHeight/2){
      divBg.style.opacity = 0.7;
    } else if(winY < firstDiv.clientHeight-firstDiv.clientHeight/2){
      divBg.style.opacity = 0;
    }
  });