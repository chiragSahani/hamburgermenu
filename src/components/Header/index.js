import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

// Add a blank line here

const Header = () => (
  <nav className="header-nav">
    <div className="header-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="hamburger-btn"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size={24} />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-menu">
            <button
              type="button"
              className="close-btn"
              onClick={close}
              data-testid="closeButton"
            >
              <IoMdClose size={24} />
            </button>
            <ul className="popup-list">
              <li>
                <Link to="/" className="popup-link" onClick={close}>
                  <AiFillHome size={24} className="popup-icon" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="popup-link" onClick={close}>
                  <BsInfoCircleFill size={24} className="popup-icon" />
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default withRouter(Header)
