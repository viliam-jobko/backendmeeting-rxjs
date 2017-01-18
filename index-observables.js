const Rx = require('rx');
const superagent = require('superagent');
const moment = require('moment');


const intervalStream = Rx.Observable.interval(5000).startWith(1);
const sigintStream = Rx.Observable.fromEvent(process, 'SIGINFO');
const jobStream = intervalStream.merge(sigintStream);

const magicNumbersStream = jobStream
  .flatMap(() => Rx.Observable.fromPromise(superagent('http://127.0.0.1:3005/api')))
  .map(data => data.body.magicNumber)
  .distinctUntilChanged()
  .takeWhile(magicNumber => magicNumber < 101);

const subscription = magicNumbersStream.subscribe(
  (magicNumber) => console.log(`${moment().format('HH:mm:ss')}    Magic number is: ${magicNumber}`),
  (err) => console.log(`Error: ${err}`),
  (magicNumber) => console.log(`${moment().format('HH:mm:ss')}    Magic number is too high! I better quit checking it. It's: ${magicNumber}`)
);
