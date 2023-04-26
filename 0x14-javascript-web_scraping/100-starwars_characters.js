#!/usr/bin/node
// Use  Star wars API to get

const request = require('request');

function callback (error, response, body) {
  if (!error && response.statusCode === 200) {
    const characters = JSON.parse(body).characters;
    for (const character of characters) {
      // console.log(character);
      request(character, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          const info = JSON.parse(body);
          console.log(info.name);
        }
      });
    }
  }
}
request('https://swapi-api.hbtn.io/api/films/' + process.argv[2], callback);
