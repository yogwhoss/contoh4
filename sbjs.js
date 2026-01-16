// Scroll ke About
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

// Scroll reveal
const sections = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      section.classList.add("show");
    }
  });
});
