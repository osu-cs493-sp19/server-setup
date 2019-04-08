console.log("Hello world!");

console.log("process.env.PORT:", process.env.PORT);
console.log("__dirname:", __dirname);
console.log("__filename:", __filename);
// console.log("process.env:", process.env);

const fs = require('fs');

const circle = require('./lib/circle');
console.log("circle.circumference(5):", circle.circumference(5));
console.log("circle.area(5):", circle.area(5));

const figlet = require('figlet');
figlet("Hello CS 493!", (err, data) => {
  if (!err) {
    console.log(data);
  }
});

// figlet("Hello CS 493!", function(err, data) {
//
// });
