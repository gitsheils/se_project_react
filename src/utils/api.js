import processServerResp from "./utils";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrtriple.jumpingcrab.com"
    : "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then(processServerResp);
}

function getUserInfo(token) {
  return fetch(`${baseUrl}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResp);
}
function updateUserInfo(token, name, avatar) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(processServerResp);
}

function createItem(token, name, weather, imageUrl) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then(processServerResp);
}
function deleteItem(token, itemId) {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResp);
}
function likeItem(token, itemId) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResp);
}
function dislikeItem(token, itemId) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResp);
}

export {
  getItems,
  getUserInfo,
  updateUserInfo,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
};
