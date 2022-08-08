import React from 'react'

import LikeDislikeCounter from './LikeDislikeCounter'
import Search from './Search'

import logo from '../mylogo-template_blue.svg'

function Navbar(props) {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img className='logo__img' src={logo} alt="Logo" />
        <h1>Notes</h1>
      </div>
      <Search {...props} />
      {/* <button className={`buttons--account ${navButtonClasses}`}>Account</button> */}
      <LikeDislikeCounter />
    </nav>
  )
}

export default Navbar