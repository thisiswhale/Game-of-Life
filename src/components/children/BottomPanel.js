import React, {Component} from 'react'

export default class BottomPanel extends Component {

  render() {
    const {
        gridSize,
        speedLvl,
        selectedSize,
        selectedSpeed,
        setSize,
        setSpeed,
      } = this.props;
      
      const smallGrid = gridSize[0]
      const mediumGrid = gridSize[1]
      const largeGrid = gridSize[2]

      const slow = speedLvl[0]
      const normal = speedLvl[1]
      const fast = speedLvl[2]

    return (
      <div className='btm-nav-bar'>
        <div className='panel board-size-panel'>
          <span className='board-size'>Board Size:
          </span>
          <button
            className={`btm-nav-btn ${selectedSize === smallGrid? 'selected-size-btn' : 'neutral-btn' }`}
            onClick= {() => setSize(smallGrid)}
            >{smallGrid[0]}x{smallGrid[1]}</button>
          <button
            className={`btm-nav-btn ${selectedSize === mediumGrid? 'selected-size-btn' : 'neutral-btn' }`}
            onClick={() => setSize(mediumGrid)}
            >{mediumGrid[0]}x{mediumGrid[1]}</button>
          <button
            className={`btm-nav-btn ${selectedSize === largeGrid? 'selected-size-btn' : 'neutral-btn' }`}
            onClick={() => setSize(largeGrid)}
            >{largeGrid[0]}x{largeGrid[1]}</button>
        </div>
        <div className='panel simulation-panel'>
          <span className='board-size'>Sim Speed:
          </span>
          <button
            className={`btm-nav-btn ${selectedSpeed === slow? 'selected-speed-btn' : 'neutral-btn' }`}
            onClick={() => setSpeed(slow)}
            >Slow</button>
          <button
            className={`btm-nav-btn ${selectedSpeed === normal ? 'selected-speed-btn' : 'neutral-btn' }`}
            onClick={() => setSpeed(normal)}
            >Normal</button>
          <button
            className={`btm-nav-btn ${selectedSpeed === fast ? 'selected-speed-btn' : 'neutral-btn' }`}
            onClick={() => setSpeed(fast)}
            >Fast</button>
        </div>
      </div>
    )
  }
}
