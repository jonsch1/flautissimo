import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
}) => (
  <section className="section section--gradient margin-bottom">
    <div className="container">
      <div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${
                    !!image.childImageSharp
                      ? image.childImageSharp.fluid.src
                      : image
                  })`,
                }}
              >
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  {title}
                </h2>
              </div>
              <div className="columns">
                <div>
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>F&uuml;r unseren ausf&uuml;hrlichen Katalog im Bereich Blockfl&ouml;ten schauen Sie bei unserer alten Website vorbei <a href="http://flautissimo.de/katalog.php4">--&gt;!</a>.</p>
                  <p>In unserem Musikgesch&auml;ft in Aachen, Burtscheid verkaufen wir unter anderem <strong>Blockfl&ouml;ten der Marken:</strong> Moeck, Mollenhauer, Kueng, Fehr, Huber, Dolmetsch, Kunath, Coolsma, Yamaha, Zen-On, Woodnote, Aulos, Paetzold, Hohner, Hopf, Susato, Flautissimo.</p>
                  <p>Sollte eine f&uuml;r Sie interessante Marke nicht dabei sein, stellen Sie gerne eine <a href="/contact">Anfrage!</a>.</p>
                  <p><strong>Unsere Marken im Bereich Gitarre:</strong></p>
                  <ol>
                    <li>Aranjuez und Stanford sind zwei Gitarren-Marken des engagierten Kirchheimer Musikvertriebs imusic network, die wir hier in Aachen repr&auml;sentieren.</li>
                    <li>Kantare ist eine finnische Gitarrenmarke die wir hier in Aachen vertreten. Sie ist verbunden mit dem bekannten finnischen Gitarrenbauer Likaanen. Herausragendes Feature dieser Gitarren ist die patentierte "Sound lense", eine spezielle Gestaltung der Decke im Bereich des Steges, die den Instrumenten eine leichte Ansprache und einen besonderen Sustain verleiht.</li>
                    <li>Besonders stolz sind wir auch , dass wir hier in Aachen die Marke "La Mancha" vom Musikvertrieb Reinhard repr&auml;sentieren. La Mancha wird allen ein Begriff sein, die in den letzten Jahren die Instrumentenpr&auml;mierungen der EGTA (europ&auml;ische Vereinigung der Gitarrenlehrer) verfolgt haben; hier hat die La Mancha meist in allen Kategorien die vorderen Pl&auml;tze belegt.</li>
                  </ol>
                <br/>
                  <p><strong>Unser weiteres Sortiment umfasst Ukulelen, Percussions, Gitarrenverst&auml;rker und vieles mehr (siehe Video).</strong></p>
                <br/>
                <br/>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        intro {
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
