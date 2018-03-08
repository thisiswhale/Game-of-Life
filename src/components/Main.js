import React, {Component} from 'react'
import GridGame from './Grid'

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      gridSize: [
        [
          50, 30
        ],
        [
          70, 50
        ],
        [
          100, 80
        ]
      ],
      selectedSize: [],
      counter: 0,
      runGame: false,
      pauseGame: false,
      simulationSpeed: [10, 20, 30]
    }

  }
  componentDidMount() {
    this.setState({selectedSize: this.state.gridSize[0]})
  }

  setSelectedSize(gridSize) {
    this.setState({ selectedSize: gridSize })
  }

  render() {
    return (<div>
      <div className='top-nav-bar'>
        <button className='top-nav-btn'>Run</button>
        <button className='top-nav-btn'>Pause</button>
        <button className='top-nav-btn'>Clear</button>
        <span className='generation'>Generation:
        </span>
        <span className='generation-counter'>{this.state.counter}</span>
      </div>
      <GridGame size={this.state.selectedSize}/>
      <div className='btm-nav-bar'>
        <div className='panel board-size-panel'>
          <span className='board-size'>Board Size:
          </span>
          <button
            className={`btm-nav-btn ${this.state.selectedSize === this.state.gridSize[0]? 'selected-size-btn' : 'neutral-btn' }`}
            onClick= {() => this.setSelectedSize(this.state.gridSize[0])}
            >50x30</button>
          <button
            className={`btm-nav-btn ${this.state.selectedSize === this.state.gridSize[1]? 'selected-size-btn' : 'neutral-btn' }`}
            onClick={() => this.setSelectedSize(this.state.gridSize[1])}
            >70x50</button>
          <button
            className={`btm-nav-btn ${this.state.selectedSize === this.state.gridSize[2]? 'selected-size-btn' : 'neutral-btn' }`}
            onClick={() => this.setSelectedSize(this.state.gridSize[2])}
            >100x80</button>
        </div>
        <div className='panel simulation-panel'>
          <span className='board-size'>Sim Speed:
          </span>
          <button className='btm-nav-btn'>slow</button>
          <button className='btm-nav-btn'>Normal</button>
          <button className='btm-nav-btn'>Fast</button>
        </div>
      </div>
    </div>);
  }
}
