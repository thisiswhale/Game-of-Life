import React, {Component} from 'react';
import Cell from './Cell'
//rows, column
export default class Grid extends Component {

  render() {
    console.log(this.props.size);
    const columnSize = this.props.size[0];
    const  rowSize = this.props.size[1];
    let grid = [];

    for(let i = 0; i < rowSize; i++){
      let rowID = `row${i}`
      let rowOfCells = []

      for(let j = 0; j < columnSize; j++){
        let cellID = `cell${i}-${j}`
        rowOfCells.push(<Cell key={cellID} id={cellID}/>)
      }
      grid.push(<tr key={i} id={rowID}>{rowOfCells}</tr>)
    }

    return (
      <table>
        <tbody className='grid'>
          {grid}
        </tbody>
      </table>

  );
  }
}
