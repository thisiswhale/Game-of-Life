import React, {Component} from 'react';
import Cell from './Cell'
//rows, column
export default class Grid extends Component {

  render() {
    const columnSize = this.props.size[0];
    const  rowSize = this.props.size[1];
    let grid = [];
    let cellClass = '';
    for(let i = 0; i < rowSize; i++){
      let rowID = `row${i}`
      let rowOfCells = []

      for(let j = 0; j < columnSize; j++){
        let cellID = `cell${i}_${j}`
        cellClass = this.props.gridFull[i][j] ? 'new-cell': 'empty-cell';
        rowOfCells.push(<Cell
                          key={cellID}
                          id={cellID}
                          cellClass = {cellClass}
                          row={i}
                          col={j}
                          selectCell={this.props.selectCell}
                          />)
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
