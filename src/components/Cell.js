import React, {Component} from 'react';

export default class Cell extends Component {

  selectCell = () => {
    this.props.selectCell(this.props.row, this.props.col)
  }

  render() {
    return (
      <td
        className={this.props.cellClass}
        key={this.props.cellID}
        id={this.props.cellID}
        onClick={this.selectCell}></td>)
  }
}
