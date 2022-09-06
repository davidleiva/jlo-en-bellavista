import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Jennifer Lopez en Bellavista" />
      <div 
        className="container"
      >
        <div
          style={{ display: 'flex' }}
        >
          <h1 
            style={{ color: 'white', textShadow: '0 4px 4px #000' }}
          >Jennifer López: <br />¿Se ha mudado a Bellavista?</h1>
          <div>video container</div>
        </div>

        <div style={{ backgroundColor: '#fde000', padding: '16px', display: 'inline-block', marginBottom: '20px' }}>
          <h3 style={{ margin: 0 }}>ESTÁ GRABANDO <span style={{ color: '#eb0084' }}>NUEVO DISCO</span></h3>
          <p>Dicen que <span style={{ color: '#eb0084' }}>se mudó en busca de inspiración</span></p>
        </div>

        <br />
        
        <div style={{ backgroundColor: '#356732', color: 'white', padding: '16px', display: 'inline-block' }}>
          <h3 style={{ margin: 0 }}>EXCLUSIVA: <br />¡Habrá presentación de su nuevo single!</h3>
          <div>
            <img src="" />
            <p>Domingo 2 Octubre<br />16:00hh · Bar Libra <br />( Provença 29 )</p>
          </div>
        </div>

      </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
