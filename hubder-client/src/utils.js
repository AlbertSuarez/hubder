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

  postGetUsers: function(username, password) {
    const out = sjcl.hash.sha256.hash(password);
    const hash = sjcl.codec.hex.fromBits(out);
    return axios.post(BASE_URL + 'user/login', { username: username, password: hash });
  },

  mapToCard: function(card) {
    var title = card.project_title;
    var fullName = card.first_name + " " + card.last_name;
    var tags = [];
    var description = card.description;
    if (card.project_title == null) {
      title = card.first_name + " " + card.last_name;
      fullName = "";
    }
    var tags = card.project_tags != null ?
      card.project_tags.split(',') :
      [];
    var description = card.description == null ?
      "": card.description;
    var cardd = {
      title: title,
      tags: tags,
      description: description,
      fullName: fullName,
      specialization: card.specialization,
      username: card.username
    }
    return cardd;
  },

  getCookie: function(cname) {
    // return 'felix';
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
  },

  like: function(from, to) {
    return axios.post(BASE_URL + 'like', {
      user_from: from,
      user_to: to
    });
  },

  getUserData: function(username) {
    return axios.get(BASE_URL + 'user?username=' + username);
  },

  editProfile: function(description, first_name, last_name, account_type, specialization, email) {
    return axios.put(BASE_URL + 'user', {
      description: description,
      first_name: first_name,
      last_name: last_name,
      account_type: account_type,
      specialization: specialization,
      email: email,
    });
  },

  createProject: function(title, description, tags, project_username) {
    console.log(title, description, tags, project_username);
    return axios.post(BASE_URL + 'project', {
      title: title,
      description: description,
      tags: tags || "",
      project_username: project_username
    });
  },

  getProject: function(username) {
    return axios.get(BASE_URL + 'project?username= ' + username);
  },
 
  getUserMatches: function(username) {
    return axios.get(BASE_URL + 'match_by_user?username=' + username);
  }

}

export default utils;
