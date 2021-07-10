import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            <h1 style={{'textAlign': 'center'}}>Hier finden Sie uns:</h1>
            <div className="map"><iframe width="420" height="400" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBD_fqDXZj27CQ3Rehaxc2MxxG247Ae7xM&q=Krugenofen%2019%2C%2052066%20Aachen+(Musikhaus-Aachen)" allowfullscreen> </iframe>
            </div>
            <div className='zeiten'>
              <br/>
              <a href="tel:004924195451475"> <h4> Telefon: +49 241 95451475 </h4> </a>
              <br/>
              <h4>Öffnungszeiten:</h4>
              <pre>Montag:   Geschlossen<br />Dienstag:  10:00&ndash;13:00<br />Mittwoch:  10:00&ndash;13:00, 15:00&ndash;18:00<br />Donnerstag:  10:00&ndash;13:00, 15:00&ndash;18:00<br />Freitag:   10:00&ndash;13:00, 15:00&ndash;18:00<br />Samstag: 10:00&ndash;14:00<br />Sonntag: Geschlossen</pre>
            </div>
            </div>
            <div className="content">
              <h1 style={{'text-align':'center' ,'color':'#D64000'}}>Kontakt</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Ihr Name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Ihre E-mail Adresse
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Anfrage
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Senden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
