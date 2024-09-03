// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {time: 0}
    this.intervalId = null
  }

  clickingStart = () => {
    this.intervalId = setInterval(this.incrementTime, 1000)
  }

  incrementTime = () => {
    this.setState(prevState => ({time: prevState.time + 1}))
  }

  clickStop = () => {
    clearInterval(this.intervalId)
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({time: 0})
  }

  formatTime = time => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const stringifiedMin = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSec = seconds > 9 ? seconds : `0${seconds}`
    return {stringifiedMin, stringifiedSec}
  }

  render() {
    const {time} = this.state
    const {stringifiedMin, stringifiedSec} = this.formatTime(time)
    return (
      <div className="stopwatch-container">
        <h1>Stopwatch</h1>
        <div className="timer-card">
          <div className="timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>
            {stringifiedMin}:{stringifiedSec}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="start-button"
              onClick={this.clickingStart}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-button"
              onClick={this.clickStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
