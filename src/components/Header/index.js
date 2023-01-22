import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="container">
      <ul>
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo"
          />
        </Link>
      </ul>
      <ul className="headerItems">
        <Link to="/" className="link-item">
          <li className=" home">Home</li>
        </Link>
        <Link to="/jobs" className="link-item">
          <li className="job home">Jobs</li>
        </Link>
      </ul>
      <ul>
        <button type="button" className="logoutBtn" onClick={onClickLogout}>
          Logout
        </button>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
