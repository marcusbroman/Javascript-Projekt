function action() {
  document.getElementById("menuBtn").addEventListener("click", openNav);
  document.getElementById("closeBtn").addEventListener("click", closeNav);
  if (document.title == "Contact") {
    document.getElementById("contactsubmit").addEventListener("click", submit);
  }
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  function openNav() {
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
  }

  function submit(event) {
    if (
      !firstName.value ||
      !lastName.value ||
      !subject.value ||
      !message.value
    ) {
      alert("Please fill in all the fields");
      event.preventDefault();
    } else {
      alert("Thank You For Your Message");
    }
  }

  document.onkeydown = function (e) {
    const key = e.key;
    switch (key) {
      case "Escape":
        closeNav();
    }
  };
}

document.addEventListener("DOMContentLoaded", action);
