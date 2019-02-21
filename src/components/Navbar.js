import React from 'react'
import { Link } from 'gatsby'
//import logo from '../img/Musikhaus-Aachen-2.svg'

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <h1 className="title h1-margin-fix">
            <Link to="/" className="navbar-item" title="Logo" style={{'color':'#FF2F1E'}}>
              Musikhaus-Aachen
            </Link>
            </h1>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item customnav" to="/about">
                Über uns
              </Link>
              <Link className="navbar-item customnav" to="/products">
                Das Sortiment
              </Link>
              <Link className="navbar-item customnav" to="/blog">
                Neuigkeiten
              </Link>
              <Link className="navbar-item customnav" to="/contact">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
