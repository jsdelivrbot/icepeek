
### Start developping:
``` bash
# move to the project's directory
cd where/you/want/the/project/to/be
# get the code from github
git clone ...
# installs project dependencies
npm install
# starts a 'dev environment': runs tests, combines files, etc... each time a file is modified
npm run dev
```
Then go to 'http://localhost:5000/index.html' in a browser


### test on a device (or emulator)
Note: You'll need to have the android SDK installed for that

``` bash
# move to the project's directory
cd folder/of/the/project
# make sure the device is detected (the result should not be empty)
adb devices
# test, build and deploy to device
npm start
```