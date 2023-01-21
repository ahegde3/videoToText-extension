import { printLine } from "./modules/print";

console.log("Content script works!");
console.log("Must reload extension for modifications to take effect.");

printLine("Using the 'printLine' function from the Print Module");

var notLoad = true;

// window.addEventListener("load", async function () {
//   console.log("inside load event");
if (notLoad) {
  inflateIframe();
  notLoad = false;
}

async function inflateIframe() {
  let iframe = document.createElement("iframe");
  const youTubeButtonUrl = chrome.runtime.getURL("youtubeButton.html");
  iframe.src = youTubeButtonUrl;
  iframe.id = "test";
  iframe.style.cssText =
    "background:#8b0000; position: fixed; height: 4%;  width: fit-content;  top: 45vh; transform:rotate(-90deg);-webkit-transform-origin-x: left;border: 2px;border-style: inset;border-radius: 10px;";
  document.body.appendChild(iframe);
}
