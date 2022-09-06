import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      color: 'white',
      margin: `0 auto`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      backgroundColor: '#eb0084',
    }}
  >
    <div
      style={{
        top: '-8px',
        display: 'flex',
        maxWidth: '1000px',
        alignItems: 'center',
        position: 'relative',
        width: 'calc(100vw - 48px)',
      }}
    >
      <h4 style={{ fontSize: '80px', margin: '0 20px 0 0' }}>amore</h4>
      <h5 style={{ color: '#231f20', margin: 0, fontSize: '28px', lineHeight: '28px' }}>Una revista <br />de Bellavista</h5>
    </div>  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
