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

## Webpack development flow
The run build step creates a new directory `public` with `index.html` file, needed for the development flow.
To start the development server, type:
```sh
npm test
```
This runs `react-scripts start` in development mode.

## Express server flow
Once you are done developing, update the build and then run Express:
```sh
npm run build
```

This creates a directory `dist` with the `main.js` output file, static assets and doT views.
Then you can start the Express server as follows:
```sh
npm start
```

This flow uses the [doT template engine](https://www.npmjs.com/package/express-dot-engine) to render the New Relic Browser timing header.
It also reports custom attributes to identify a game "session", since a browser "session" does not update
when the same user starts another game.

