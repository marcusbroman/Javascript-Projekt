/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */


document.getElementById("menuBtn").addEventListener("click", openNav)
document.getElementById("closeBtn").addEventListener("click", closeNav)

function openNav() {
  console.log(document.body.clientWidth)
    if(document.getElementById("mySidebar").style.width == "22vw"){
      closeNav()
    }
    else if(document.body.clientWidth <= 670){
      document.getElementById("mySidebar").style.width = "101vw"
      document.getElementById("menuBtn").style.marginLeft = "100vw"
      document.getElementById("menuBtn").style.display = "none"
    }
    else{ 
    document.getElementById("mySidebar").style.width = "22vw"
    document.getElementById("menuBtn").style.marginLeft = "23vw"
  }
}

  function closeNav() {
    document.getElementById("menuBtn").style.marginLeft = "1vw"
    document.getElementById("mySidebar").style.width = "0"
    document.getElementById("menuBtn").style.display = "block"
    return x=0
  }

