import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">{props.aboutText}</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        {/* // eslint-disable-next-line */}
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>

      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'  }


    // {
    //   "homepage": "https://AmanSuryavanshi-1.github.io/TextUtils",
    //   "name": "textutils",
    //   "version": "0.1.0",
    //   "private": true,
    //   "dependencies": {
    //     "@testing-library/jest-dom": "^5.16.5",
    //     "@testing-library/react": "^13.3.0",
    //     "@testing-library/user-event": "^13.5.0",
    //     "gh-pages": "^4.0.0",
    //     "react-dom": "^18.2.0",
    //     "react-router-dom": "^6.3.0",
    //     "react-scripts": "^2.1.8",
    //     "web-vitals": "^2.1.4"
    //   },
    //   "scripts": {
    //     "start": "react-scripts --openssl-legacy-provider start",
    //     "build": "react-scripts --openssl-legacy-provider build",
    //     "test": "react-scripts test",
    //     "eject": "react-scripts eject"
    //   },
    //   "eslintConfig": {
    //     "extends": [
    //       "react-app",
    //       "react-app/jest"
    //     ]
    //   },
    //   "browserslist": {
    //     "production": [
    //       ">0.2%",
    //       "not dead",
    //       "not op_mini all"
    //     ],
    //     "development": [
    //       "last 1 chrome version",
    //       "last 1 firefox version",
    //       "last 1 safari version"
    //     ]
    //   }
    // }