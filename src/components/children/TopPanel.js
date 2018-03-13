import React, {Component} from 'react'

export default class TopPanel extends Component {

  render() {
    const {
        playButton,
        seedButton,
        pauseButton,
        clearButton,
        isPlaying,
        isPaused,
        generation
      } = this.props;
      
    return (
      <div className='top-nav-bar'>
        <button onClick={playButton} className={`top-nav-btn ${isPlaying ? 'selected-btn' : 'neutral-btn' }`}>Run</button>
        <button onClick={seedButton} className='top-nav-btn seed-btn neutral-btn'>Seed</button>
        <button onClick={pauseButton} className={`top-nav-btn ${isPaused ? 'selected-btn' : 'neutral-btn'}`}>Pause</button>
        <button onClick={clearButton} className='top-nav-btn clear-btn neutral-btn'>Clear</button>
        <span className='generation'>Generation:
        </span>
        <span className='generation-counter'>{generation}</span>
      </div>
    )
  }
}
