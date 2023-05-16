function action() {
  document.getElementById("menuBtn").addEventListener("click", openNav);
  document.getElementById("closeBtn").addEventListener("click", closeNav);
  document.getElementById("contactsubmit").addEventListener("click", submit);
  
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  function openNav() {
    console.log(document.body.clientWidth);
    if (document.getElementById("mySidebar").style.width == "22vw") {
      closeNav();
    } else if (document.body.clientWidth <= 670) {
      document.getElementById("mySidebar").style.width = "101vw";
      document.getElementById("menuBtn").style.marginLeft = "100vw";
      document.getElementById("menuBtn").style.display = "none";
    } else {
      document.getElementById("mySidebar").style.width = "22vw";
      document.getElementById("menuBtn").style.marginLeft = "23vw";
    }
  }

  function closeNav() {
    document.getElementById("menuBtn").style.marginLeft = "1vw";
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("menuBtn").style.display = "block";
    return (x = 0);
  }

  function submit(event) {
    if (!firstName.value || !lastName.value || !subject.value || !message.value) {
      alert("Please fill in all the fields");
      event.preventDefault();
    } else {
      alert("Thank You For Your Message");
    }
  }
}

document.addEventListener("DOMContentLoaded", action);
