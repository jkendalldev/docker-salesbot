// TODOS
// 1. INSTALL DOCKER ON THE PIXA EC2 INSTANCE NEXT
// 2. PUSH FRESH IMAGE TO DOCKER HUB, AND TRY TO PULL IT ONTO THE PIXA EC2, AND TRY TO RUN IT
// 3. DOCKER RUN...BUT TRY TO RUN IT WITH THE -v FLAG AND NOT --volume
// 4. docker run --rm --volume pixa-vol:/data --name salesbot -e COLLECTION=pixawizards --env-file ~/pixa-salesbot/.secrets jkendall1975/pixa-salesbot:latest
// 5. TBD

const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');
const { ethers } = require('ethers');
 
// const tweet = require('./tweet'); //  new v2 tweet library
// const cache = require('./cache');

// use this with an if file exists kinda thing instead of cache.get...
// const lastSaleTime = cache.get('lastSaleTime', null) || moment().startOf('minute').subtract(3600, "seconds").unix();

const lastSaleTime = moment().unix();


console.log('Collection: ' + process.env.COLLECTION)
console.log('VARONE: ' + process.env.VARONE)
console.log('VARTWO: ' + process.env.VARTWO)
console.log(lastSaleTime);


const fs = require('fs');
// const { times } = require('lodash');

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
fs.writeFile("/data/test.txt", lastSaleTime, err => {
  if (err) {
    console.error(err)
      return
    }
    //file written successfully
  })
*/

// let data = "This is a file containing a collection of books.";
  
  fs.writeFile("/data/test.txt", lastSaleTime.toString(), (err) => {
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