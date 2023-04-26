#!/usr/bin/node
// Use  Star wars API to get

const request = require('request');

function callback (error, response, body) {
  if (error) throw error;
  const users = {};
  for (const user of JSON.parse(body)) {
    if (user.completed) {
      if (users[user.userId]) {
        users[user.userId]++;
      } else {
        users[user.userId] = 1;
      }
    }
  }
  console.log(users);
}

request(process.argv[2], callback);
