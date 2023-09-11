#!/usr/bin/node
const callMeMoby = require('./101-call_me_moby').callMeMoby;

callMeMoby(5, function () {
  console.log('Where I am!');
});
