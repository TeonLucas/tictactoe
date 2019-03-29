import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Game from './game';
import Settings from './settings';
import '../css/app.css';

class App extends Component {

  componentDidMount() {
    let id = Math.random().toString(36).substr(2);

    if (typeof(newrelic) === 'object') { // eslint-disable-next no-use-before-define
      console.log('setCustomAttribute: gameId', id);
      newrelic.setCustomAttribute('gameId', id); // eslint-disable-line no-undef
    }
    else {
      console.log('Mock setCustomAttribute: gameId', id);
    }
  }

  about() {
    return (
      <div>
        <p>React tutorial example</p>
        <p>Modified to add routes and New Relic monitoring</p>
      </div>
    );
  }

  game() {
    return <Game/>;
  }

  won({match}) {
    // update gameId when we have a winner
    let id = Math.random().toString(36).substr(2);

    if (typeof(newrelic) === 'object') { // eslint-disable-line no-use-before-define
      console.log('setCustomAttribute: gameId', id);
      newrelic.setCustomAttribute('gameId', id); // eslint-disable-line no-undef
    }
    else {
      console.log('Mock setCustomAttribute: gameId', id);
    }

    return (
      <div>
        <h1>Winner: {match.params.winner}</h1>
      </div>
    );
  }

  settings() {
    return <Settings/>;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <div className="avatar"></div>
          Tic Tac Toe
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/game">Game</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Route path="/" exact component={this.about} />
        <Route path="/game" component={this.game} />
        <Route path="/won/:winner" component={this.won} />
        <Route path="/settings" component={this.settings} />
      </BrowserRouter>
    );
  }
}

export default App;
