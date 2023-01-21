import React from "react";

import { createRoot } from "react-dom/client";

import YouTubeButton from "./YouTubeButton";

const container = document.getElementById("youtube-button");
if (container) {
  const root = createRoot(container);
  root.render(<YouTubeButton />);
}
