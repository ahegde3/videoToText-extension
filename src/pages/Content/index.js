import { printLine } from "./modules/print";
import {chromeLocalStorage} from "../../helper/chromeLocalStorageHelper"


console.log("Content script works!");
console.log("Must reload extension for modifications to take effect.");

printLine("Using the 'printLine' function from the Print Module");

let  currentHref = document.location.href;

window.addEventListener("load", async function () {
  console.log("window load")
  inflateIframe();

})
//   console.log("inside load event");
// if (notLoad) {
//   inflateIframe();
//   notLoad = false;
// }

let bodyList = document.querySelector("body");

let observer = new MutationObserver(function (mutations) {
  mutations.forEach(async function (mutation) {
    if (currentHref !== document.location.href) {
      currentHref = document.location.href;
      inflateIframe()}
  })
})

let config = {
  childList: true,
  subtree: true,
};

observer.observe(bodyList, config);

async function inflateIframe() {
  console.log("inflate frame")
  let iframe = document.createElement("iframe");
  const youTubeButtonUrl = chrome.runtime.getURL("youtubeButton.html");
  iframe.src = youTubeButtonUrl;
  iframe.id = "test";
  iframe.style.cssText =
    "background:#8b0000; position: fixed; height: 7vh;  width: fit-content;  top: 45vh; transform:rotate(-90deg);-webkit-transform-origin-x: left;border: 2px;border-style: inset;border-radius: 10px;cursor:pointer;";
  document.body.appendChild(iframe);

  await chromeLocalStorage.setItemAsync(
    "youTubePageUrl",
    window.location.href
  );
}
