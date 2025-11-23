/**** Dark mode********/

const html = document.querySelector("html");
const btn = document.querySelector("#theme-btn");

if (localStorage.getItem("darkmode")) {
  html.classList.toggle("dark");
  btn.textContent = "Light";
}
function toggleTheme() {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    btn.textContent = "Light";
    localStorage.setItem("darkmode", true);
  } else {
    btn.textContent = "Dark";
    localStorage.setItem("darkmode", false);
  }
}

btn.addEventListener("click", toggleTheme);
