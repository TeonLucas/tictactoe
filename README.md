# tictactoe
React Node.js demo based on the [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html) which builds a Tic Tac Toe game. This variant adds:
* Route changes to illustrate a Single Page App (SPA)
* Express Node.js for production server
* Webpack for development
* Configuration for New Relic monitoring

The monitoring configuration includes both APM for Node.js, and Browser for the SPA.

## How to build
First build the production server.  The same index.html will be used for both flows.
```sh
npm install
npm run build
```
The latter step creates a new directory `public` with the production`main.js` and `index.html` files.

## Webpack development flow
To start the development server, type:
```sh
npm test
```
This leverages `public/index.html`, and runs `react-scripts start` in development mode.

## Express production flow
Once you are done developing, update the build and then run Express:
```sh
npm run build
npm start
```

