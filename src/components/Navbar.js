import React from 'react'
import PropTypes from'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
              <div className="container-fluid">
                  <a className="navbar-brand" href="/">{props.title}</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/about">About Us</Link>
                          </li>   
                      </ul>
                      <form className="d-flex mx-5" role="search">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                              <button className="btn btn-outline-success" type="submit">Search</button>
                      </form>
                      
              <div className='d-flex '>
                <div className='bg-primary rounded mx-2' onClick={()=>{props.toogleMode('primary')}} style={{height:'20px', width:'20px',cursor:'pointer'}}>

                </div>
                <div className='bg-success rounded mx-2' onClick={()=>{props.toogleMode('success')}} style={{height:'20px', width:'20px',cursor:'pointer'}}>

                </div>
                <div className='bg-danger rounded mx-2' onClick={()=>{props.toogleMode('danger')}} style={{height:'20px', width:'20px',cursor:'pointer'}}>

                </div>
              </div>
                      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'white'}`}>
                          <input className="form-check-input mx-3" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                              <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Toggle Mode </label>
                      </div>

                  </div>
              </div>
          </nav>

    </>
  )
}
Navbar.propTypes={
    title: PropTypes.string,
    aboutus: PropTypes.string,
}
