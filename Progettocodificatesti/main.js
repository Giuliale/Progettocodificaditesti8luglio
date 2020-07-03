function gestoreApriMenu(){
  try {
    nodoMenu.style.width = "250px";
    nodoMain.style.marginLeft = "250px";
  } catch (e) {
    alert("gestoreApriMenu " + e);
  }
}

function gestoreChiudiMenu(){
  try {
    nodoMenu.style.width = "0";
    nodoMain.style.marginLeft = "0";
  } catch (e) {
    alert("gestoreApriMenu " + e);
  }
}


var nodoMenu;
var nodoMain;
var nodoApriMenu;
var nodoChiudiMenu;




function gestoreLoad() {
  try {
    nodoMenu = document.getElementById("menu");
    nodoMain = document.getElementById("principale");
    nodoApriMenu = document.getElementById("apriMenu");
    nodoChiudiMenu = document.getElementById("chiudi");
    nodoApriMenu.onclick = gestoreApriMenu;
    nodoChiudiMenu.onclick = gestoreChiudiMenu;
  } catch (e) {
    alert("gestoreLoad " + e);
  }
}



window.onload = gestoreLoad;