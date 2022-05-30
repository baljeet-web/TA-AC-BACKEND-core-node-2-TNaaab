var path = require(`path`);
var http = require(`http`);
let buffer = require(`buffer`);

// console.log(`The route of file, where currently i am working is ${__filename}`);
// console.log(`The route of file, where app.js is, is ${__dirname + `./app.js`}`);
// let indexPath = path.join(__dirname, `./index.html`)
// console.log(indexPath);

http
  .createServer((request, response) => {
    var store = ``;
    request.on(`data`, (chunk) => {
      store = store + chunk;
    });
    request.on(`end`, () => {
      var dataType = request.headers[`content-type`];
      if (dataType === `application/json`) {
        let data = JSON.parse(store);
        response.end(JSON.stringify(data));
      }
    });
  })
  .listen(5000, () => {
    console.log(`Displaying at port 5000`);
  });
