let http = require(`http`);

http
  .createServer((request, response) => {
    var store = ``;
    request.on(`data`, (chunk) => {
      store = store + chunk;
    });
    request.on(`end`, () => {
      console.log(store);
    });
    response.end(`Dta stored Successfully`);
  })
  .listen(3456, () => {
    console.log(`Port at 3456`);
  });
