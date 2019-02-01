# Proximity Sensor Simulator

This module is used in testing the api for the robot server.

Every interval it posts a json object to the server, this object is a random number
from 1 to 100

The interval time can be changed but will also need to be changed in the UI app because of the css transition used.

Install the dependencies:

```javascript
npm install
```

You **Will** now need to change the URI in the app.js file to match that of your server.

To run

```javascript
node app.js --websocket_address="192.168.55.11:5001"
```
