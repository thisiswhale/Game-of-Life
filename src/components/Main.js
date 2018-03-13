import React, {Component} from 'react'
import Grid from './Grid'

export default class Main extends Component {

  constructor() {
    super();

    this.state = {
      gridSize: [
        [
          10, 30
        ],
        [
          20, 40
        ],
        [
          30, 50
        ]
      ],
      gridFull: [],
      selectedSize: [],
      selectedSpeed: '',
      generation: 0,
      runGame: false,
      pauseGame: false,
      simulationSpeed: [100, 200, 300]
    }

  }
  componentWillMount() {
    let defaultSize = this.state.gridSize[0]
    let defaultSpeed = this.state.simulationSpeed[0]
    this.setState({
      selectedSize: defaultSize,
      selectedSpeed: this.state.simulationSpeed[0],
      gridFull: Array(defaultSize[0]).fill(Array(defaultSize[1]).fill(false))
    })

  }
  componentDidMount(){
    this.seed();
  }

  playButton = () =>{
    clearInterval(this.intervalID)
    this.intervalId = setInterval(this.play, 100)
  }

  play = () => {
    let grid = this.state.gridFull;
    let grid2 = arrayClone(this.state.gridFull)
    let rows = this.state.selectedSize[0]
    let cols = this.state.selectedSize[1]

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let count = 0
        //check top row
        if (i > 0) if (grid[i - 1][j]) count++
        if (i > 0 && j > 0) if (grid[i - 1][j - 1]) count++
        if (i > 0 && j < cols - 1) if (grid[i - 1][j + 1]) count++

        if (j < cols - 1) if (grid[i][j + 1]) count++
        if (j > 0) if (grid[i][j - 1]) count++

        if (i < rows - 1) if (grid[i + 1][j]) count++
        if (i < rows - 1 && j > 0) if (grid[i + 1][j - 1]) count++
        if (i < rows - 1 && cols - 1) if (grid[i + 1][j + 1]) count++
        
        //false when there more or less than three neighbors
        if (grid[i][j] && (count < 2 || count > 3)) grid2[i][j] = false
        //true when there are three neighbors
        if (!grid[i][j] && count === 3) grid2[i][j] = true
      }
    }
    this.setState({
      gridFull: grid2,
      generation: this.state.generation + 1
      });
  }

  seed = () => {
    let gridCopy = arrayClone(this.state.gridFull)
    console.log(gridCopy)
    for(let i = 0; i < this.state.selectedSize[0]; i++){
      for(let j = 0; j < this.state.selectedSize[1]; j++){
        if(Math.floor(Math.random() * 4) === 1){
          gridCopy[i][j] = true
        }
      }
    }
    this.setState({gridFull:gridCopy})

  }
  pause = () => {
    clearInterval(this.intervalID)
  }

  clear = () => {
    this.setState({
      gridFull: Array(gridSize[0]).fill(Array(gridSize[1]).fill(false)) })
  }

  selectCell = (row,col) => {
    let gridCopy = arrayClone(this.state.gridFull)
    gridCopy[row][col] = !gridCopy[row][col]
    this.setState({
      gridFull: gridCopy
    })
  }

  setSelectedSize(gridSize) {
    this.setState({
      selectedSize: gridSize,
      gridFull: Array(gridSize[0]).fill(Array(gridSize[1]).fill(false)) })
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
        <button onClick={this.playButton} className='top-nav-btn'>Run</button>
        <button onClick={this.pause} className='top-nav-btn'>Pause</button>
        <button onClick={this.clear} className='top-nav-btn'>Clear</button>
        <span className='generation'>Generation:
        </span>
        <span className='generation-counter'>{this.state.generation}</span>
      </div>
      <Grid
        row={this.state.selectedSize[0]}
        cols={this.state.selectedSize[1]}
        gridFull={this.state.gridFull}
        selectCell={this.selectCell}/>
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
  return JSON.parse(JSON.stringify(arr))
}
