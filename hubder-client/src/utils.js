// import sjcl from 'sjcl';
var sjcl = require('sjcl');
var axios = require('axios');

const BASE_URL = "http://0.0.0.0:8081/";

const utils = {

  getUserCards: function(username) {
    return axios.get(BASE_URL + 'user/cards?username=' + username);
  },

  putUserDescription: function(username, description) {
    return axios.put(BASE_URL + 'user', { username: username, description: description });
  },

  postUser: function(username, firstName, lastName, accountType, specialization, email, password) {
    const out = sjcl.hash.sha256.hash(password);
    const hash = sjcl.codec.hex.fromBits(out);
    console.log(hash);
    return axios.post(BASE_URL + 'user', {
      username: username,
      description: '',
      first_name: firstName,
      last_name: lastName,
      account_type: accountType,
      specialization: specialization,
      email: email,
      password: hash
    });
  },

  mapToCard: function(card) {
    var title = card.project_title;
    var fullName = card.first_name + " " + card.last_name;
    var tags = [];
    var descripcion = card.descripcion || "";
    if (card.project_title == null) {
      title = card.first_name + " " + card.last_name;
      fullName = "";
    }
    if (card.project_tags != null) {
      tags = card.project_tags.split(',');
    }
    var cardd = {
      title: title,
      tags: tags,
      descripcion: descripcion,
      fullName: fullName,
      specialization: card.specialization
    }
    return cardd;
  },

  getCookie: function(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },

  setCookie: function(cname, cvalue, exdays=10) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

}

export default utils;
