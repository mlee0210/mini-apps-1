import React from 'react';

class Component1 extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	board:
	  	[
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ']
      ],
      counter: 0
	  };

    this.handleClick = this.handleClick.bind(this);
	}
  
  checkRowWinner(row) {
    let str = '';
    let copy = [
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ']
      ];
      
    for(let i = 0; i < row.length; i++) {
      str += row[i];
    }
    if(str.includes('OOOO')) {

      alert('Player One Wins!');

      this.setState({board: copy, counter: 0});

    } else if(str.includes('XXXX')) {

      alert('Player Two Wins!');

      this.setState({board: copy, counter: 0});
    }
  }

  checkColumnWinner(board, index) {
    let x = parseInt(index);
    let str = '';
    let copy = [
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ']
      ];

    for(let i = 0; i < board.length; i++) {
      str += board[i][x];
    }
    if(str.includes('OOOO')) {

      alert('Player One Wins!');

      this.setState({board: copy, counter: 0});

    } else if(str.includes('XXXX')) {

      alert('Player Two Wins!');

      this.setState({board: copy, counter: 0});
    }
  }

	handleClick(e) {

    // console.log(e.target.id);
    // console.log(e.target.dataset.x);
    // console.log(e.target.dataset.y);

    let y = e.target.dataset.x;
    let x = e.target.dataset.y;

    if(this.state.board[x][y] !== ' ') {
      console.log('Already Clicked');
    } else {
      this.state.counter++;
      if(this.state.counter % 2 !== 0) {
        let copy = this.state.board.slice();
        copy[x][y] = 'O';
        this.setState({board: copy});
        this.checkRowWinner(this.state.board[x]);
        this.checkColumnWinner(this.state.board, y);
        
      } else {
        let copy = this.state.board.slice();
        copy[x][y] = 'X';
        this.setState({board: copy});
        this.checkRowWinner(this.state.board[x]);
        this.checkColumnWinner(this.state.board, y);
      }
    }

  }

  render () {
    let row = [];
    for(let i = 0; i < 6; i++) {
      var column = [];
      for(let j = 0; j < 7; j++) {
        column.push(<div key={i,j} className="column" id={`${j}${i}`} data-x={j} data-y={i} onClick={(e) =>this.handleClick(e)}>{this.state.board[i][j]}</div>);
      }
      row.push(column);
    }


//this.state.board[j][i]
    return (
      <div id="gameBoard">
        <div> {row} </div>

        <div align="center"> Player One : O   Player Two : X </div>
      </div>
    );
  }
};

export default Component1;

