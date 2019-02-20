import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
}) => (
    <div>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
    >
  <div style={{
        display: 'flex',
        height: '150px',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column' }}>
      <h1
        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        style={{
          boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
          backgroundColor: 'rgb(255, 68, 0)',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em'
        }}
      >
        {title}
      </h1>
      <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em'
          }}
      >
        {subheading}
      </h3>
      </div>
    </div>
      <div id="youtube-video">
        <iframe id="iframe" width="560" height="315" src="https://www.youtube-nocookie.com/embed/eh6DYJT_kpE"
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="" title="youtube-video"></iframe>
      </div>
  <section className="section section--gradient">
    <div class="column is-10 is-offset-1">
      <div>
        <h1 className="h1 is-size-1">Warum Musikhaus Aachen?</h1>
      </div>
      <div>
        <h4 className="subtitle">Flautissimo ist das Musikgesch&auml;ft in Aachen mit einem umfangreichen Sortiment in
          den Bereichen <strong>Blockfl&ouml;te, Gitarre, Ukulele, Musiknoten und vieles weitere </strong>.</h4>
        <h4 className="subtitle">F&uuml;r einen Eindruck von unserem Sortiment schauen Sie gerne in das
          Vorstellungsvideo.</h4>
        <h3 className="has-text-weight-semibold is-size-2">Musikgesch&auml;ft im Herzen Burtscheids</h3>
        <br/>
        <ul>
          <li className="subtitle"><strong>Bei uns k&ouml;nnen Sie in entspannter, familienfreundlicher Atmosph&auml;re
            Musikinstrumente ausprobieren.</strong></li>
          <li className="subtitle"><strong>Falls Sie sich f&uuml;r ein Instrument entscheiden, k&ouml;nnen Sie es zu
            fairen Preisen erwerben.</strong></li>
          <li className="subtitle"><strong>Sie profitieren dar&uuml;berhinaus von unserem kulanten Service falls es mal
            zu einem Problem kommen sollte.</strong></li>
        </ul>
        <p>&nbsp;</p>
      </div>
    </div>
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="columns">
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/products">
                  Zum Sortiment
                </Link>
                </div>
              </div>
              <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Die neusten Geschichten
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/blog">
                    Mehr lesen
                  </Link>
                  </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        subheading
        mainpitch {
          title
          description
        }
      }
    }
  }
`
