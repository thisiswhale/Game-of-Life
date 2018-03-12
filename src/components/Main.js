import React, {Component} from 'react'
import Grid from './Grid'

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      gridSize: [
        [
          30, 10
        ],
        [
          40, 20
        ],
        [
          50, 30
        ]
      ],
      gridFull: [],
      selectedSize: [],
      selectedSpeed: '',
      generation: 0,
      runGame: false,
      pauseGame: false,
      simulationSpeed: [10, 20, 30]
    }

  }
  componentDidMount() {
    let defaultSize = this.state.gridSize[0];
    let defaultSpeed = this.state.simulationSpeed[0]
    this.setState({
      selectedSize: defaultSize,
      selectedSpeed: this.state.simulationSpeed[0],
      gridFull: Array(defaultSize[0]).fill().map(()=> Array(defaultSize[1]).fill(false))
    })
  }

  selectCell = (row,col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy
    })
  }

  setSelectedSize(gridSize) {
    this.setState({ selectedSize: gridSize, gridFull: Array(gridSize[0]).fill().map(()=> Array(gridSize[1]).fill(false)) })
  }

  setSelectedSpeed(speed) {
    this.setState({ selectedSpeed: speed })
  }

  render() {
    const smallGrid = this.state.gridSize[0]
    const mediumGrid = this.state.gridSize[1]
    const largeGrid = this.state.gridSize[2]

    const slow = this.state.simulationSpeed[0]
    const normal = this.state.simulationSpeed[1]
    const fast = this.state.simulationSpeed[2]
    
    return (<div>
      <div className='top-nav-bar'>
        <button className='top-nav-btn'>Run</button>
        <button className='top-nav-btn'>Pause</button>
        <button className='top-nav-btn'>Clear</button>
        <span className='generation'>Generation:
        </span>
        <span className='generation-counter'>{this.state.generation}</span>
      </div>
      <Grid
        size={this.state.selectedSize}
        gridFull={this.state.gridFull}
        selectCell= {this.selectCell}/>
      <div className='btm-nav-bar'>
        <div className='panel board-size-panel'>
          <span className='board-size'>Board Size:
          </span>
          <button
            className={`btm-nav-btn ${this.state.selectedSize === smallGrid? 'selected-size-btn' : 'neutral-btn' }`}
            onClick= {() => this.setSelectedSize(smallGrid)}
            >{smallGrid[0]}x{smallGrid[1]}</button>
          <button
            className={`btm-nav-btn ${this.state.selectedSize === mediumGrid? 'selected-size-btn' : 'neutral-btn' }`}
            onClick={() => this.setSelectedSize(mediumGrid)}
            >{mediumGrid[0]}x{mediumGrid[1]}</button>
          <button
            className={`btm-nav-btn ${this.state.selectedSize === largeGrid? 'selected-size-btn' : 'neutral-btn' }`}
            onClick={() => this.setSelectedSize(largeGrid)}
            >{largeGrid[0]}x{largeGrid[1]}</button>
        </div>
        <div className='panel simulation-panel'>
          <span className='board-size'>Sim Speed:
          </span>
          <button
            className={`btm-nav-btn ${this.state.selectedSpeed === slow? 'selected-speed-btn' : 'neutral-btn' }`}
            onClick={() => this.setSelectedSpeed(slow)}
            >Slow</button>
          <button
            className={`btm-nav-btn ${this.state.selectedSpeed === normal ? 'selected-speed-btn' : 'neutral-btn' }`}
            onClick={() => this.setSelectedSpeed(normal)}
            >Normal</button>
          <button
            className={`btm-nav-btn ${this.state.selectedSpeed === fast ? 'selected-speed-btn' : 'neutral-btn' }`}
            onClick={() => this.setSelectedSpeed(fast)}
            >Fast</button>
        </div>
      </div>
    </div>);
  }
}

function arrayClone(arr){
  return JSON.parse(JSON.stringify(arr));
}
