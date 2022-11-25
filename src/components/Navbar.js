import React from 'react'

const Navbar = ({brand}) => {
  return (
    //header
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">{brand}</a>
      </div>
    </nav>
  )
}

export default Navbar