import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Board extends Component {
  renderSquare(i) {
    return (
      <button className="square" onClick={() => this.props.onClick(i)}>
        {this.props.squares[i]}
      </button>
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Board;