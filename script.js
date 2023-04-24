/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */


document.getElementById("menuBtn").addEventListener("click", openNav)
document.getElementById("closeBtn").addEventListener("click", closeNav)

function openNav() {
    if(document.getElementById("mySidebar").style.width == "22vw"){
      closeNav()
    }
    else{ 
    document.getElementById("mySidebar").style.width = "22vw";
    document.getElementById("menuBtn").style.marginLeft = "23vw"
  }
}

  function closeNav() {
    document.getElementById("menuBtn").style.marginLeft = "1vw"
    document.getElementById("mySidebar").style.width = "0";
    return x=0
  }

