# tictactoe
React Node.js demo based on the [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html) which builds a Tic Tac Toe game. This variant adds:
* Route changes to illustrate a Single Page App (SPA)
* Express Node.js for production server
* Webpack for development
* Configuration for New Relic monitoring

## Pre-requisites
This demo assumes you have Node.js and Git installed. To install the demo, type:
```sh
git clone https://github.com/DavidSantia/tictactoe
cd tictactoe
npm install
```

## Configuring monitoring
The monitoring configuration includes both APM for Node.js, and Browser for the SPA.  To configure monitoring, copy the template:
```sh
cp newrelic.template.js newrelic.js
```

Then edit newrelic.js and add your license key:
```
license_key: 'license key here',
```

This project reports both APM and Browser metrics:
### APM Metrics
* Default Transaction events from the Node.js server
* An custom attribute is added to identify each render of the index template

The custom attribute was added to provide a more complete illustration for instrumenting a Node.js server. Let's say for example we want to know the average number of times each user renders the html page for our single page app.  This metric is generated in [server.js](https://github.com/DavidSantia/tictactoe/blob/master/src/server/server.js) like so:
```
let id = Math.random().toString(36).substr(2);
newrelic.addCustomAttribute('indexRenderId', id);
```

* Default PageView and Browser interaction events from the SPA
* A custom attribute to identify each game "session"

The game session was needed to create a funnel revealing the user journey.  We were interested in how involved the user was, as follows:
# Land on home page
# Start game
# Win game

A browser session ID is a common metric used to see how many unique users access a site, and is included with default Browser monitoring.  However, since a session ID does not update when the same user accesses a site more than once, we need a new metric to accuartely count the start of each game. This metric is generated in [app.js](https://github.com/DavidSantia/tictactoe/blob/master/src/js/app.js) like so:
```
let id = Math.random().toString(36).substr(2);
newrelic.setCustomAttribute('gameId', id);
```

Notice the function name for APM is `addCustomAttribute()` vs. `setCustomAttribute()` for Browser.

## Webpack development flow
First build the project:
```sh
npm run build
```

The build step creates a new directory `public` containing the `index.html` file, needed for this flow.
Then to start developing, type:
```sh
npm test
```
This runs `react-scripts start`, providing a setup similar to the React tutorial.

## Express server flow
This flow uses the [doT template engine](https://www.npmjs.com/package/express-dot-engine) to render the index file containing the New Relic Browser timing header.

Once you are done developing, update the build.
```sh
npm run build
```

This creates a directory `dist` with the `main.js` output file, static assets and doT views.  Then you can start the Express server as follows:
```sh
npm start
```

