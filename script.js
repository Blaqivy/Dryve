document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("navLinks");
  const signupButton = document.getElementById("signupButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("hidden");
    signupButton.classList.toggle("hidden");
    dropdownMenu.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const waitingListSection = document.getElementById("waitingListSection");
  const navLinks = document.querySelectorAll("#navLinks a");
  const signupButton = document.getElementById("signupButton");

  function scrollToWaitingList() {
    waitingListSection.scrollIntoView({ behavior: "smooth" });
  }
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToWaitingList();
    });
  });
  signupButton.addEventListener("click", function () {
    scrollToWaitingList();
  });
});
