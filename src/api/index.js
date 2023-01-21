import { BASE_URL } from "../constants";

function convertToText(url) {
  return fetch(`${BASE_URL}/convertToText`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
    }),
  }).then((result) => {
    return result.json();
  });
}

export { convertToText };
