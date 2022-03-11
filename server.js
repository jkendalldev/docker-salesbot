const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');
const { ethers } = require('ethers');
require('dotenv').config();
 
// const tweet = require('./tweet'); //  new v2 tweet library
// const cache = require('./cache');

// use this with an if file exists kinda thing instead of cache.get...
// const lastSaleTime = cache.get('lastSaleTime', null) || moment().startOf('minute').subtract(3600, "seconds").unix();

const lastSaleTime = moment().unix();


console.log('Collection: ' + process.env.COLLECTION)
console.log('TEST_ENV_VARS1: ' + process.env.TEST_ENV_VARS1)
console.log('TEST_ENV_VARS2: ' + process.env.TEST_ENV_VARS2)

console.log(lastSaleTime);

const fs = require('fs');


// const { times } = require('lodash');

// const datafile = '/data/test.txt'
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
fs.writeFile("/data/test.txt", lastSaleTime, err => {
  if (err) {
    console.error(err)
      return
    }
    //file written successfully
  })
*/

// let data = "This is a file containing a collection of books.";
  /*
  fs.writeFile("/data/test.txt", lastSaleTime.toString(), (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("/data/test.txt", "utf8"));
    }
  });
*/
/*
fs.readFile(datafile, 'utf8', function(err, data){
  // Display the file content
  console.log("AFTER I WROTE TO /data/test.txt FILE:   ");
  console.log(data);
});
*/