let http = require(`http`);
var qs = require(`querystring`);

http
  .createServer((request, response) => {
    let dataType = request.headers[`content-type`];
    console.log(`The request type is ${dataType}`);
    var store = ``;
    request.on(`data`, (chunk) => {
      store = store + chunk;
    });

    request.on(`end`, () => {
      if (dataType === `application/json`) {
        var data = qs.parse(store);
        console.log(data);
        response.write(qs.stringify(data));
        response.end();
      }
      if (dataType === `application/x-www-form-urlencoded`) {
        var data = qs.parse(store);
        response.write(qs.stringify(data));
        response.end();
      }
    });
  })
  .listen(7000, () => {
    console.log(`listening on port 7000`);
  });
