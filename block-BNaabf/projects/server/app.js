let path = require(`path`);

console.log(path.relative(`server`,`client/index.js`));

console.log(__dirname + `/app.js`);