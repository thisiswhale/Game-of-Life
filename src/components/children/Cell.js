import React, {Component} from 'react';

export default class Cell extends Component {

  selectCell = () => {
    this.props.selectCell(this.props.row, this.props.col)
  }

  render() {
    const {
      cellClass,
      cellID
    } = this.props

    return (
      <td
        className={cellClass}
        key={cellID}
        id={cellID}
        onClick={this.selectCell}></td>)
  }
}
