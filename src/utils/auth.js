import processServerResp from "./utils";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrtriple.jumpingcrab.com"
    : "http://localhost:3001";

function signup({ email, password, name, avatarUrl }) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar: avatarUrl }),
  }).then(processServerResp);
}

function authorize(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(processServerResp);
}

export { signup, authorize };
