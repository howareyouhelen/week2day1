module.exports = function getHTML (options, callback) {

  var https = require("https")

const req = https.get(options, function (response) {
  const {statusCode} = response;
  const contentType = response.headers["content-type"];

  response.setEncoding("utf8");
  let rawData = "";
  response.on("data", (chunk) => {rawData += chunk;});
  response.on("end", function () {
    console.log(rawData);
  })

});
}





