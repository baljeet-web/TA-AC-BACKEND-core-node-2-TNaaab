let http = require(`http`);
let fs = require(`fs`);
let url = require(`url`);

http
  .createServer((request, response) => {
    if (request.method === `GET` && request.url === `/form`) {
      response.setHeader(`content-type`, `text/html`);
      fs.createReadStream(`./server.html`).pipe(response);
    }
    if(request.method === `POST` && request.url === `/form`){
        
    }
  })
  .listen(5678, () => {
    console.log(`At port 5678`);
  });
