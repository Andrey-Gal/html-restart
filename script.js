const aboutButton = document.getElementById("about-button");
const aboutText = document.getElementById("about-text");
aboutButton.addEventListener("click", function () {
  aboutText.hidden = !aboutText.hidden;
    if (!aboutText.hidden) {
    aboutText.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});