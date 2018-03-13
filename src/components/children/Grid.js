import React, {Component} from 'react';
import Cell from './Cell'
//rows, column
export default class Grid extends Component {

  render() {
    const rows = this.props.selectedSize[0];
    const cols = this.props.selectedSize[1];
    let grid = [];
    let cellClass = '';

    for(let i = 0; i < rows; i++){
      let rowID = `row${i}`
      let rowOfCells = []

      for(let j = 0; j < cols; j++){
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
