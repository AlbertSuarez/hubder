var axios = require('axios');

const BASE_URL = "http://0.0.0.0:8081/";

function getUserCards(username) {
  return axios.get(BASE_URL + 'user/cards?username=' + username);
}

function putUserDescription(username, description) {
  return axios.put(BASE_URL + 'user', { username: username, description: description });
}

module.exports = { getUserCards, putUserDescription };