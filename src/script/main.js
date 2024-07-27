// jump to top scope
// ##jump to top button
let jumpToUpButton = document.getElementById("jumpToUp");
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  scroll > 50
    ? jumpToUpButton.classList.remove("hidden")
    : jumpToUpButton.classList.add("hidden");
});
// loading scope
// ##remove loading function
let removeLoading = () => {
  document.querySelector(".loading").remove();
  document.getElementById("body").classList.remove("bodyLoading");
};
// ##window loaded event started
window.addEventListener("load", () => {
  setTimeout(() => {
    removeLoading();
  }, 1000);
});
