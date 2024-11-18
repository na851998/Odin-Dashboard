let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("expanded");
  sidebar.style.display = "block";
  toggleBtn.style.display = "none";
  toggleOverlay();
});

document.querySelector(".close-btn").addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("expanded");
  // set to empty to allow media query to overide display
  sidebar.style.display = "";
  toggleBtn.style.display = "";
  toggleOverlay();
});

function toggleOverlay() {
  const overlay = document.querySelector(".overlay");
  overlay.classList.toggle("active");
}
