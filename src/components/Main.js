import React, {Component} from 'react'
import TopPanel from './children/TopPanel'
import Grid from './children/Grid'
import BottomPanel from './children/BottomPanel'

export default class Main extends Component {

  constructor() {
    super();

    this.state = {
      gridSize: [
        [
          30, 50
        ],
        [
          35, 70
        ],
        [
          40, 80
        ]
      ],
      gridFull: [],
      selectedSize: [],
      selectedSpeed: '',
      generation: 0,
      speedLvl: [500, 300, 100],
      isPlaying: false,
      isPaused: false
    }

  }

  playButton = () =>{
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.play, this.state.selectedSpeed)
    this.setState({isPlaying: true, isPaused: false})
  }

  play = () => {
    let grid = this.state.gridFull
    let grid2 = arrayClone(this.state.gridFull)
    let rows = this.state.selectedSize[0]
    let cols = this.state.selectedSize[1]

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let count = 0
        //check this position [i,j], and check all its neighbors
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
      })
  }

  seedButton = () => {
    this.setState({
      gridFull: Array(this.state.selectedSize[0]).fill(Array(this.state.selectedSize[1]).fill(false)),
    })
    this.seed()
  }

  seed = () => {
    let gridCopy = arrayClone(this.state.gridFull)
    for(let i = 0; i < this.state.selectedSize[0]; i++){
      for(let j = 0; j < this.state.selectedSize[1]; j++){
        if(Math.floor(Math.random() * 4) === 1){
          gridCopy[i][j] = true
        }
      }
    }
    this.setState({gridFull:gridCopy})
  }

  pauseButton = () => {
    clearInterval(this.intervalId)
    this.setState({isPlaying: false, isPaused: true})
  }

  clearButton = () => {
    this.setState({
      gridFull: Array(this.state.selectedSize[0]).fill(Array(this.state.selectedSize[1]).fill(false)),
      isPlaying: false,
      isPaused: false,
      generation: 0})
    clearInterval(this.intervalId)
  }

  setSize(gridSize) {
    clearInterval(this.intervalId)
    this.setState({
      selectedSize: gridSize,
      generation: 0,
      isPlaying: false,
      isPaused: false,
      gridFull: Array(gridSize[0]).fill(Array(gridSize[1]).fill(false)) })
  }

  setSpeed(speed) {
    this.setState({ selectedSpeed: speed, isPlaying: false, isPaused: false })
    clearInterval(this.intervalId)
  }

  selectCell = (row,col) => {
    let gridCopy = arrayClone(this.state.gridFull)
    gridCopy[row][col] = !gridCopy[row][col]
    this.setState({
      gridFull: gridCopy
    })
  }

  componentWillMount() {
    let defaultSize = this.state.gridSize[0]
    let defaultSpeed = this.state.speedLvl[1]
    this.setState({
      selectedSize: defaultSize,
      selectedSpeed: defaultSpeed,
      gridFull: Array(defaultSize[0]).fill(Array(defaultSize[1]).fill(false))
    })
  }

  componentDidMount(){
    this.seed()
    this.playButton()
  }

  render() {

    return (<div>
      <TopPanel
        playButton={this.playButton}
        seedButton={this.seedButton}
        pauseButton={this.pauseButton}
        clearButton={this.clearButton}
        isPlaying={this.state.isPlaying}
        isPaused={this.state.isPaused}
        generation={this.state.generation}
      />
      <Grid
        selectedSize={this.state.selectedSize}
        gridFull={this.state.gridFull}
        selectCell={this.selectCell}/>
      <BottomPanel
        gridSize = {this.state.gridSize}
        speedLvl = {this.state.speedLvl}
        selectedSize = {this.state.selectedSize}
        selectedSpeed = {this.state.selectedSpeed}
        setSize = {this.setSize}
        setSpeed = {this.setSpeed}
      />
    </div>);
  }
}

function arrayClone(arr){
  return JSON.parse(JSON.stringify(arr))
}
