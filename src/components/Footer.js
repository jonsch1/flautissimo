import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/Musikhaus-Aachen-2.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '50%', height: 'auto' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-3">
                <section className="menu">
                    <ul className="menu-list">
                      <li><Link to="/" className="navbar-item">Home</Link></li>
                      <li><Link className="navbar-item" to="/about">About</Link></li>
                      <li><Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-3">
                <section>
                  <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                    <li>
                      <Link className="navbar-item" to="/impressum">
                        Impressum
                      </Link>
                    </li>
                  </ul>
                </section>
                </div>
                <div className="column is-3">
                  <ul className="menu-list">
                    <li>
                     Adresse:
                    </li>
                    <li>
                      Krugenofen 19
                    </li>
                    <li>
                      52066 Aachen
                    </li>
                  </ul>

                </div>
              </div>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
