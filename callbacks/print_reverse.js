var getHTML = require('./http-functions');



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  let printReverse = [];
  for (let i = 0; i < html.length; i++) {
    printReverse.unshift(html[i]);
  }
  console.log(html);
}

getHTML(requestOptions, printReverse)