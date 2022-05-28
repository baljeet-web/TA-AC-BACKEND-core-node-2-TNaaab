let http = require(`http`);
let fs = require(`fs`);

http
  .createServer((request, response) => {
    fs.createReadStream(`./readme.txt`).pipe(response.end(`Khatam`));
  })
  .listen(5000, () => {
    console.log(`I am at 5000`);
  });
