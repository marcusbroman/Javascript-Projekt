/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */


document.getElementById("menuBtn").addEventListener("click", openNav)
document.getElementById("closeBtn").addEventListener("click", closeNav)

function openNav() {
    if(document.getElementById("mySidebar").style.width == "250px"){
      closeNav()
    }
    else{ 
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";}
}

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    return x=0
  }

