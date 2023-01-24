import React, { Component } from "react";
import { convertToText } from "../../api";
import {chromeLocalStorage } from "../../helper/chromeLocalStorageHelper"

export default class YouTubeButton extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          cursor:"pointer"
        }}
        onClick={async() => {
          const url=await chromeLocalStorage .getItemAsync("youTubePageUrl")
          convertToText(url).then(blob=>{
            const videoId = url.split("v=")[1]?.split("&")?.[0];
            let anchorTag = document.createElement('a');
            anchorTag.href = blob;
            anchorTag.download = `${videoId}.txt`;
            anchorTag.click();
          })
        }}
      >
        <h1 style={{ color: "white" }}>Download Video Caption</h1>
      </div>
    );
  }
}
