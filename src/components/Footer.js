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
            alt="Musikhaus-Aachen"
            style={{ width: '50%', height: 'auto' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-one-third has-text-centered">
                <section className="menu">
                    <ul className="menu-list no-margin">
                      <li><Link to="/" className="navbar-item text-center">Startseite</Link></li>
                      <li><Link className="navbar-item text-center" to="/about">Über uns</Link></li>
                      <li><Link className="navbar-item text-center" to="/products">
                        Sortiment
                      </Link>
                    </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-one-third has-text-centered">
                <section>
                  <ul className="menu-list no-margin">
                  <li>
                    <Link className="navbar-item text-center" to="/blog">
                      Neuigkeiten
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item text-center" to="/contact">
                      Kontakt
                    </Link>
                  </li>
                    <li>
                      <Link className="navbar-item text-center" to="/impressum">
                        Impressum
                      </Link>
                    </li>
                  </ul>
                </section>
                </div>
                <div className="column is-one-third text-center">
                  <ul className="menu-list text-center no-margin">
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
