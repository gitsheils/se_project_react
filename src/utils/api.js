import processServerResp from "./utils";

const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then(processServerResp);
}

function addItem(name, weather, link) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      weather: weather,
      link: link,
    }),
  }).then(processServerResp);
}

function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(processServerResp);
}

export { getItems, addItem, deleteItem };
