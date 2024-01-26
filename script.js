let switchThemeBtn = document.querySelector(".switch");

switchThemeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.onload = function () {
    //get data from localstorage
  let localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme === "dark") {
    document.body.classList.add("dark");
  }
};
