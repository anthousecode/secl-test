/*-------Mobile menu---------*/
let menuIcon = document.getElementById('menuIcon');
let menu = document.getElementById('menu');
menuIcon.addEventListener("click", showMenu);

function showMenu(){
  if(parseInt(menu.style.right) === -20){
    menu.style.right = `-260px`;
    menuIcon.style.right = `20px`;
  }else{
    menu.style.right = `-20px`;
    menuIcon.style.right = `250px`;
  }
}
