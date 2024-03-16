const images = Array.from(document.querySelectorAll("img"));
const title = document.querySelector("h1.hello");

title.innerText = "Hello from popup.js";

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseover", handleTitleMouseOver);
title.addEventListener("mouseout", handleTitleMouseOut);

// window.addEventListener("resize", handlewindowResize);
window.addEventListener("copy", handlewindowCopy);
window.addEventListener("offline", handelOffline);
window.addEventListener("online", handelOnline);

function handelOffline() {
  console.log("out of service!");
}

function handelOnline() {
  console.log("we are back!");
}

function handleTitleClick() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  title.style.color = newColor;
}

function handleTitleMouseOver() {
  title.innerText = "Mouse is here!";
}

function handleTitleMouseOut() {
  title.innerText = "Mouse is gone!";
}

// function handlewindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }
function handlewindowCopy() {
  alert("copied!");
}

images.forEach((img) => {
  img.addEventListener("click", () => {
    chrome.storage.local.set({ image: img.src });
  });
});
