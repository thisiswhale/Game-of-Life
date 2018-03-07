import React, {Component} from 'react';

export default class Cell extends Component {
  constructor(){
    super();
    this.state = {
      color: 'empty-cell'
    }
  }

  addLife = () =>{
    this.setState({color: 'new-cell'})
  }
  render() {
    return (
      <td
        className={this.state.color}
        key={this.props.cellID}
        id={this.props.cellID}
        onClick={this.addLife}></td>)
  }
}
