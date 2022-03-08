const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');
const { ethers } = require('ethers');
// const tweet = require('./tweet'); //  new v2 tweet library
// const cache = require('./cache');

const timeStamp = moment().unix();
console.log('Collection: ' + process.env.COLLECTION)
console.log(timeStamp);