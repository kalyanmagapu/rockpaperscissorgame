import {Component} from 'react'
import GameResult from './component/GameResult/GameResult'
import GameButton from './component/GameButtons/GameButton'
import PopupButton from './component/PopupButton/PopupButton'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isGameOn: true,
    options: [],
    gameResult: '',
  }

  getPoints = (first, second) => {
    let Score = 0

    if (first[0].id === 'Rock') {
      switch (second.id) {
        case 'PAPER':
          Score = -1
          break
        case 'SCISSORS':
          Score = 1
          break
        default:
          Score = 0
          break
      }
    } else if (first[0].id === 'PAPER') {
      switch (second.id) {
        case 'ROCK':
          Score = 1
          break
        case 'SCISSORS':
          Score = -1
          break
        default:
          Score = 0
          break
      }
    } else if (first[0].id === 'SCISSORS') {
      switch (second.id) {
        case 'ROCK':
          Score = -1
          break
        case 'PAPER':
          Score = 1
          break
        default:
          Score = 0
          break
      }
    }
    return Score
  }

  getResultText = points => {
    let Text
    switch (points) {
      case 1:
        Text = 'YOU WON'
        break
      case -1:
        Text = 'YOU LOSE'
        break
      default:
        Text = 'IT IS DRAW'
        break
    }
    return Text
  }

  getResult = Id => {
    const N = Math.floor(Math.random() * choicesList.length)
    const choice1 = choicesList.filter(each => each.id === Id)
    const choice2 = choicesList[N]
    const points = this.getPoints(choice1, choice2)
    const result = this.getResultText(points)

    this.setState(prevState => ({
      score: prevState.score + points,
      gameResult: result,
      options: [choice1[0].imageUrl, choice2.imageUrl],
      isGameOn: false,
    }))
  }

  resetGame = () => {
    this.setState({options: [], isGameOn: true, gameResult: ''})
  }

  renderGame = () => (
    <div className="btn-card">
      <div>
        <GameButton
          BtnDetails={choicesList[0]}
          getResult={this.getResult}
          data-testid="rockButton"
        />
      </div>
      <div>
        <GameButton
          BtnDetails={choicesList[1]}
          getResult={this.getResult}
          data-testid="scissorsButton"
        />
      </div>
      <div>
        <GameButton
          BtnDetails={choicesList[2]}
          getResult={this.getResult}
          data-testid="paperButton"
        />
      </div>
    </div>
  )

  render() {
    const {score, isGameOn, options, gameResult} = this.state
    return (
      <div className="main-bg">
        <div>
          <div className="header-card">
            <div>
              <h1 className="header-text">Rock Paper Scissors</h1>
            </div>
            <div className="score-card">
              <p className="score-text">Score</p>
              <p className="num-text">{score}</p>
            </div>
          </div>
          <div className="main-card">
            {isGameOn ? (
              this.renderGame()
            ) : (
              <GameResult
                resetGame={this.resetGame}
                FinalImages={options}
                FinalResult={gameResult}
              />
            )}
          </div>
        </div>
        <div className="button-card">
          <PopupButton />
        </div>
      </div>
    )
  }
}

export default App
