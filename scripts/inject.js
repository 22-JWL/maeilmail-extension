chrome.storage.local.get(["image"], async function (result) {
  if (result.image) {
    console.log("result.image: ", result.image);
    document.body.style.backgroundImage = `url(${result.image})`;
    document.body.style.backgroundSize = `200px`;
    document.body.style.backgroundRepeat = "repeat";
    console.log("111111111111111111");
    // document.body.style.backgroundSize = "cover";
    // document.body.style.backgroundRepeat = "no-repeat";
  }
});
