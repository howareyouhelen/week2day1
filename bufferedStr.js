function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var https = require("https")

https.get(requestOptions, function (response) {
  const {statusCode} = response;
  const contentType = response.headers["content-type"];

  response.setEncoding("utf8");
  let rawData = "";
  response.on("data", (chunk) => {rawData += chunk;});
  response.on("end", function () {
    console.log(rawData);
  })

});


};


getAndPrintHTML();