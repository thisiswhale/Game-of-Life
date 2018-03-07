import React, {Component} from 'react'
import GridGame from './Grid'

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      gridSize: [[50,30], [7,5], [10,8]],
      currentSize: [],
      counter: 0,
      runGame: false,
      pauseGame: false,
      simulationSpeed: [10,20,30]
    }

  }
  componentDidMount(){
    this.setState({currentSize: this.state.gridSize[0]})
  }

  render() {
    return (
      <div>
        <div className='control-time-bar'>
            <button
              className='control-time-btn'>Run</button>
            <button
              className='control-time-btn'
            >Pause</button>
            <button
              className='control-time-btn'
            >Pause</button>
            <span
              className='generation'
            >Generation: </span>
            <span
              className='generation-counter'
            >{this.state.counter}</span>
        </div>
        <GridGame size={this.state.currentSize}/>

      </div>
    );
  }
}
