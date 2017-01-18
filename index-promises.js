const superagent = require('superagent');
const moment = require('moment');
let lastMagicNumber = null;


const doJob = async () => {
  const data = await getDataFromApi();
  const magicNumber = data.magicNumber;

  if (magicNumber !== lastMagicNumber) {
    console.log(`${moment().format('HH:mm:ss')}    Magic number is: ${magicNumber}`);
    lastMagicNumber = magicNumber;
  }
};

const getDataFromApi = async () => {
  const data = await superagent('http://127.0.0.1:3005/api');
  return data.body;
};


setInterval(doJob, 5000);
doJob();
