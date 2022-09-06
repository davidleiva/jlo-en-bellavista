import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import libraImg from './../images/2x/libra@2x-8.png'
import JLO from './../images/2x/JLO@2x-8.png'

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { fixed } from "gatsby-plugin-sharp"

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
            style={{ color: 'white', textShadow: '0 4px 4px #000', width: '50%' }}
          >Jennifer López: <br />¿Se ha mudado a Bellavista?</h1>
          <div
            style={{     
              width: '50%',
              backgroundColor: '#e2e2e2',
              padding: '16px',
              height: '240px',
            }}
          >video container</div>
        </div>

        <div
          style={{ 
            backgroundColor: '#fde000', 
            padding: '16px', 
            display: 'inline-block', 
            marginBottom: '20px',
            position: 'relative',
            left: '40px'
          }}
          >
          <h3 style={{ margin: 0 }}>ESTÁ GRABANDO <span style={{ color: '#eb0084' }}>NUEVO DISCO</span></h3>
          <p>Dicen que <span style={{ color: '#eb0084' }}>se mudó en busca de inspiración</span></p>
        </div>

        <br />
        
        <div style={{ 
          backgroundColor: '#356732', 
          color: 'white', 
          padding: '16px', 
          display: 'inline-block',
          position: 'relative',
          left: '20px'
        }}>
          <h3 style={{ margin: '0 0 16px 0' }}>EXCLUSIVA: <br />¡Habrá presentación de su nuevo single!</h3>
          <div style={{ display: 'flex' }}>
            <img src={ libraImg } style={{ marginRight: '16px', width: '96px' }} />
            <h3 style={{ margin: 0 }}>Domingo 2 Octubre<br />16:00hh · Bar Libra <br />( Provença 29 )</h3>
          </div>
        </div>

      </div>
      
      <img 
        src={ JLO } 
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          height: '75vh'
        }}
      />

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
