const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');
const { ethers } = require('ethers');
 
// const tweet = require('./tweet'); //  new v2 tweet library
// const cache = require('./cache');

const timeStamp = moment().unix();
console.log('Collection: ' + process.env.COLLECTION)
console.log('VARONE: ' + process.env.VARONE)
console.log('VARTWO: ' + process.env.VARTWO)
console.log(timeStamp);


const fs = require('fs')

const datafile = '/data/test.txt'
/*
if (fs.existsSync(datafile)) {
  fs.readFile(datafile, 'utf8', function(err, data){
    // Display the file content
    console.log("BEFORE I WROTE TO /data/test.txt FILE:   ");
    console.log(data);
  });
}
*/

/*
fs.writeFile("/data/test.txt", timeStamp, err => {
  if (err) {
    console.error(err)
      return
    }
    //file written successfully
  })
*/

let data = "This is a file containing a collection of books.";
  
  fs.writeFile("/data/test.txt", data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("/data/test.txt", "utf8"));
    }
  });

/*
fs.readFile(datafile, 'utf8', function(err, data){
  // Display the file content
  console.log("AFTER I WROTE TO /data/test.txt FILE:   ");
  console.log(data);
});
*/