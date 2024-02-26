const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// dark or light images
function imageMode(color) {
  image1.src = `img/loading${color}.svg`;
  image2.src = `img/results${color}.svg`;
  image3.src = `img/complete${color}.svg`;
}

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0  / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("_dark") : imageMode("_day");
}

// //  Dark Mode Styles
// function darkMode() {
//   nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
//   textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
//   toggleIcon.children[0].textContent = "Dark Mode";
//   toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
//   imageMode("_dark");
// }

// //  Light Mode Styles
// function lightMode() {
//   nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
//   textBox.style.backgroundColor = "rgb(0 0 0  / 50%)";
//   toggleIcon.children[0].textContent = "Light Mode";
//   toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
//   imageMode("_day");
// }

// Switch theme Dynamicaly
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("them", "dark");
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("them", "light");
    toggleDarkLightMode(false);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);
