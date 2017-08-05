# Icepeek
source code for icepeek

### Start developping:

Note: Most of these commands only need to be run once. The others might take a while thefirst time, but will be faster after that.

Go to your terminal, and:
``` bash
# move to your projects directory (where the icepeek's folder will be)
cd rachid/my/projects
# get the code from github
git clone https://github.com/bgirschig/icepeek.git
# move to the icepeek folder
cd icepeek/
# install project dependencies
npm install
# starts a 'dev environment': runs tests, combines files, etc... each time a file is modified
npm run dev

# next time you want to work on the project, just:
cd rachid/my/projects
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

### stack
The project is built using:
- node + npm
- gulp, sass, pug, ...
- cordova
- heroku
- mocha