import Popup from 'reactjs-popup'
import {MdClose} from 'react-icons/md'
import './index.css'

const PopupButton = () => (
  <div>
    <Popup
      modal
      trigger={
        <button type="button" className="rules-btn">
          Rules
        </button>
      }
    >
      {close => (
        <>
          <div className="popup-bg">
            <div className="close-card">
              <MdClose type="button" onClick={() => close()} />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="popup-img"
              />
            </div>
          </div>
        </>
      )}
    </Popup>
  </div>
)

export default PopupButton
