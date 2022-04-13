const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const grid = document.querySelector(".grid");
const mobGridItems = document.querySelectorAll(".mob-grid-items");
const deskGridItems = document.querySelectorAll(".desk-grid-item");
const mobileMenuBtn = document.querySelectorAll(".menu");
const menuList = document.querySelector(".menu-list");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuList = document.querySelector(".mobile-menu-list");

// Mobile menu width height and position properties
mobileMenuList.style.height = `${
  mobGridItems[0].getBoundingClientRect().height * 25 - .5
}px`;
mobileMenuList.style.width = `${
  mobGridItems[0].getBoundingClientRect().width * 15 - .5
}px`;
mobileMenuList.style.top = `${
  mobGridItems[0].getBoundingClientRect().height * 4
}px`;
mobileMenuList.style.left = `${
  mobGridItems[0].getBoundingClientRect().width * 1
}px`;
// mobileMenuList.style.borderRight = `.5px solid var(--ligh-gray)`;
// mobileMenuList.style.backgroundColor = 'red'

// Generating grid text for mobile
if (mobGridItems) {
  mobGridItems.forEach((gridItem) => {
    const gridText = document.createElement("div");
    gridText.className = "grid-txt";
    gridText.textContent = letters[Math.trunc(Math.random() * 27)];
    gridItem.append(gridText);
  });
}

//remove dynamic text from logo text for mobile device
document.querySelector(".menu .grid-txt").textContent = "";

// Generating grid text for desktop
if (deskGridItems) {
  deskGridItems.forEach((gridItem) => {
    const gridText = document.createElement("div");
    gridText.className = "grid-txt";
    gridText.textContent = letters[Math.trunc(Math.random() * 27)];
    gridItem.append(gridText);
  });
}

//remove dynamic text from logo text for mobile desktop device
document.querySelector(".desktop-menu .grid-txt").textContent = "";
document.querySelectorAll(".privacy .grid-txt").forEach(el=>{
  el.textContent = "PRIVACY NOTICE";
})
document.querySelectorAll(".sc-media-icon").forEach(el=>{
  el.children[1].textContent = ""
});

// document.querySelector(".menu-list .grid-text").textContent = "";

document.querySelectorAll(".logo .grid-txt").forEach((el) => el.remove());

// Menu Btn functions
mobileMenuBtn.forEach((menuBtn) => {
  menuBtn.addEventListener("click", function () {
    document.querySelectorAll(".menu .grid-txt").forEach((el) => {
      // toggling btn rotation
      el.classList.toggle("rotate-menu");
    });
  });
});

// Mobile menu btn action
mobileMenuBtn[0].addEventListener("click", function () {
  mobileMenuList.classList.toggle("hide");
});

// Desktop menu action
const gridItems = document.querySelectorAll(".menu-list~.desk-grid-item");
desktopMenu.addEventListener("click", function () {
  if (this) menuList.classList.toggle("hide");
  document.querySelector(".menu-list .grid-txt").textContent = "";
  console.log(!menuList.classList.contains("hide"));
  if (!menuList.classList.contains("hide")) {
    for (let i = 0; i < 23; i++) {
      gridItems[i].remove();
    }
  } else {
    console.log("hello");
    for (let i = 0; i < 23; i++) {
      grid.append(gridItems[i]);
    }
  }
});
