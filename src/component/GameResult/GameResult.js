import './index.css'

const GameResult = props => {
  const {FinalImages, FinalResult, resetGame} = props

  const playAgain = () => {
    resetGame()
  }

  return (
    <div>
      <div className="result-card">
        <div className="final-card">
          <h1 className="text-us">YOU</h1>
          <img src={FinalImages[0]} alt="your" className="final-img" />
        </div>
        <div className="final-card">
          <h1 className="text-us">OPPONENT</h1>
          <img src={FinalImages[1]} alt="opponent" className="final-img" />
        </div>
      </div>
      <div className="final-card-btn">
        <h1 className="result-text">{FinalResult}</h1>
        <button type="button" onClick={playAgain} className="play-agin-btn">
          Play Again
        </button>
      </div>
    </div>
  )
}

export default GameResult
