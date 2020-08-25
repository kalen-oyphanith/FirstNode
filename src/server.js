//import
const myData = require("./myData.js");
const Polygon = require("./Polygon.js");
const _ = require('underscore');
const http = require('http');

console.log("hello world");

const helloFunction = () => {
    console.log('hello function');
}

helloFunction();

myData.getMessage();

const myPolygon = new Polygon(10, 15);
console.dir(myPolygon.height);
console.dir(myPolygon.width);

const myArray = [1, 2, 3, 4, 5];
const found = _.contains(myArray, 3);
console.log(found); // true

// process.env.PORT: environment variables
// process.env.NODE_PORT: node port
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// request handler
const onRequest = (request, response) => {
    if (request.url === '/favicon.ico') {
        console.log('favicon request');
    }

    // header info/ meta data 
    // write function that writes to the body, to the user
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    }); // status code 200: ok
    console.log('request received');

    response.write(myData.getMessage());
    response.end();
};

http.createServer(onRequest).listen(port);
