import {Button} from './styledComponents'
import './index.css'

const GameButton = props => {
  const {BtnDetails, getResult} = props
  const {id, imageUrl} = BtnDetails

  const clickForResult = () => {
    getResult(id)
  }

  return (
    <div>
      <Button type="button" onClick={clickForResult}>
        <img src={imageUrl} alt={id} className="btn-image" />
      </Button>
    </div>
  )
}

export default GameButton
