const Rx = require('rx');
const superagent = require('superagent');
const moment = require('moment');


const intervalStream = Rx.Observable.interval(5000).startWith(1);

const magicNumbersStream = intervalStream
  .flatMap(() => Rx.Observable.fromPromise(superagent('http://127.0.0.1:3005/api')))
  .map(data => data.body.magicNumber)
  .distinctUntilChanged();

const subscription = magicNumbersStream.subscribe(
  (magicNumber) => console.log(`${moment().format('HH:mm:ss')}    Magic number is: ${magicNumber}`),
  (err) => console.log(`Error: ${err}`),
  () => console.log('Completed.')
);
