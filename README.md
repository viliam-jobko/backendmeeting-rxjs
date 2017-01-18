# Backend meeting - RxJS

There is an API for the Magic Number. You can fetch it from `http://127.0.0.1:3005/api`.

TODO list:
- [ ] We want to always see current Magic Number. **Every 5 second fetch Magic Number from API and print it.** (Solution: [Promises](https://github.com/viliam-jobko/backendmeeting-rxjs/commit/005804b426ae22a092bc91614ec07b82e18479c2), [Observables](https://github.com/viliam-jobko/backendmeeting-rxjs/commit/326be769b3b90c5179a444395ffc1c0e91e434cb))
- [ ] **Remove the 5 seconds delay on start of program.** (Solution: [Promises](https://github.com/viliam-jobko/backendmeeting-rxjs/commit/8a0585ebdf9f72b99e51857765ddc76d023b2fed), [Observables](https://github.com/viliam-jobko/backendmeeting-rxjs/commit/16c3f93e441ae47eb119235c65a48b566b807281))
- [ ] That's too many lines of output. **Only print the Magic Number when it is changed.** (Solution: [Promises](https://github.com/viliam-jobko/backendmeeting-rxjs/commit/9864b30dd4c7476827251f4641d847d5a659e05c), [Observables](https://github.com/viliam-jobko/backendmeeting-rxjs/commit/c743ec4648ef4be3a6b9918994872ed4abcb9938))
- [ ] Magic Numbers over 100 are dangerous. **Stop watching Magic Numbers when you encounter value over 100.** (Solution: [Promises](https://github.com/viliam-jobko/backendmeeting-rxjs/commit/12b31ed37eb672126fd2c912f2fad2601225af4c), [Observables](https://github.com/viliam-jobko/backendmeeting-rxjs/commit/6a01d8b911a5bc014501eaff29f893a3bc660748))
- [ ] Bonus: **Fetch current Magic Number on keyboard shortcut** (Solution: [Promises](https://github.com/viliam-jobko/backendmeeting-rxjs/commit/5ffce4c6b740e5435a3cb559f05b8a7c7b094e45), [Observables](https://github.com/viliam-jobko/backendmeeting-rxjs/commit/852ad941ef52ed6612328fc76d079e6990a571a3))
