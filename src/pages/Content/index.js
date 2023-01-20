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
//   }
//   //  setInterval(resetCheckEmailButton, 10000);
//   //   if (currentHref.includes(LINKEDIN_URLS.PEOPLE_SEARCH)) {
//   //     peopleSearchButton();
//   //     checkEmailButtonPresent = true;
//   //   } else if (currentHref.includes(LINKEDIN_URLS.PROFILE)) {
//   //     addEmailButton(currentHref);
//   //     checkEmailButtonPresent = true;
//   //   } else if (
//   //     currentHref.includes(LINKEDIN_URLS.TALENT_PROFILE) ||
//   //     currentHref.includes(LINKEDIN_URLS.TALENT_SEARCH_PROFILE) ||
//   //     currentHref.match(LINKEDIN_URLS_REGEX.PIPELINE) ||
//   //     currentHref.match(LINKEDIN_URLS_REGEX.RECRUITER_SEARCH)
//   //   ) {
//   //     await addTalentMailButton();
//   //     checkEmailButtonPresent = true;
//   //   }

//   //   let bodyList = document.querySelector("body");

//   //   let observer = new MutationObserver(function (mutations) {
//   //     mutations.forEach(async function (mutation) {
//   //       if (currentHref !== document.location.href) {
//   //         currentHref = document.location.href;
//   //         if (
//   //           currentHref.includes(LINKEDIN_URLS.PEOPLE_SEARCH) &&
//   //           !checkEmailButtonPresent
//   //         ) {
//   //           checkEmailButtonPresent = true;
//   //           peopleSearchButton();
//   //         } else if (currentHref.includes(LINKEDIN_URLS.PROFILE)) {
//   //           addEmailButton(currentHref);
//   //           checkEmailButtonPresent = true;
//   //         } else if (
//   //           currentHref.includes(LINKEDIN_URLS.TALENT_PROFILE) ||
//   //           currentHref.includes(LINKEDIN_URLS.TALENT_SEARCH_PROFILE) ||
//   //           currentHref.match(LINKEDIN_URLS_REGEX.PIPELINE) ||
//   //           currentHref.match(LINKEDIN_URLS_REGEX.RECRUITER_SEARCH)
//   //         ) {
//   //           await addTalentMailButton();
//   //           checkEmailButtonPresent = true;
//   //         }
//   //       }
//   //     });
//   //   });

//   //   let config = {
//   //     childList: true,
//   //     subtree: true,
//   //   };

//   //   observer.observe(bodyList, config);
// });

async function inflateIframe() {
  console.log("inflateIframe");

  var button = document.createElement("button");
  button.id = "test";
  button.backgroundColor = "blue";
  button.style.cssText =
    " position: fixed; height: 8%;  width: 2%;background: blue;  top: 45%;  float: left; left: 0;";
  document.body.appendChild(button);
  notLoad = false;

  //   var iframe = document.createElement("iframe");

  //   const FloatingLayout = fetch(chrome.runtime.getURL("floating.html"))
  //     .then((response) => {
  //       return response.url;
  //     })
  //     .catch((error) => console.log(error));

  //   chrome.runtime.sendMessage({
  //     url: window.location.href,
  //     message: "WEEKDAY_PROFILE_VISIT",
  //   });

  //   iframe.src = await FloatingLayout;
  //   iframe.id = "Weekday-button";

  //   iframe.style.cssText =
  //     "background:#55EFC4;position:fixed;top:131px;right:0;display:block;" +
  //     "height:74px;width:178px;border-radius:20px 20px 0px 0px;float:right;z-index:1000;transform:rotate(-90deg) translateY(100%)";
  //   iframe.setAttribute("scrolling", "no");
  //   iframe.setAttribute("frameborder", "1");

  //   document.body.appendChild(iframe);
}
