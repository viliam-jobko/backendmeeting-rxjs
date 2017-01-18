const superagent = require('superagent');
const moment = require('moment');
let lastMagicNumber = null;
let jobIntervalHandler;


const doJob = async () => {
  const data = await getDataFromApi();
  const magicNumber = data.magicNumber;

  if (magicNumber > 100) {
    console.log(`${moment().format('HH:mm:ss')}    Magic number is too high! I better quit checking it. It's: ${magicNumber}`);
    clearInterval(jobIntervalHandler);
  } else if (magicNumber !== lastMagicNumber) {
    console.log(`${moment().format('HH:mm:ss')}    Magic number is: ${magicNumber}`);
    lastMagicNumber = magicNumber;
  }
};

const getDataFromApi = async () => {
  const data = await superagent('http://127.0.0.1:3005/api');
  return data.body;
};


jobIntervalHandler = setInterval(doJob, 5000);
doJob();
process.on('SIGINT', doJob);
