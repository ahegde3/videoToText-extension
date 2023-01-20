console.log("This is the background page.");
console.log("Put the background scripts here.");

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.message) {
    console.log("inside");
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //   let tab = tabs[0];
    //   chrome.tabs.sendMessage(tab.id, "WEEKDAY_EXTENSION_CLICK");
    // });
  }
});
