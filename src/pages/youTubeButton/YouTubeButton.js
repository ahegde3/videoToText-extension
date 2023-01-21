import React, { Component } from "react";
import { convertToText } from "../../api";

export default class YouTubeButton extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
        }}
        onClick={() => {
          console.log(document.referrer);
          convertToText("test");
        }}
      >
        {console.log("youtube component rendered")}
        <h1 style={{ color: "white" }}>Download Video Caption</h1>
      </div>
    );
  }
}
