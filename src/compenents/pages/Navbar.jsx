import React from 'react'
import imageNav from '../images/imageNav.png'

function Navbar({ Toggle }) {
    return (
        <div>
            <nav className="navbar navbar-light bg-white shadow-sm">
                <a className='navbar-brand  d-md-block' href='#toggle' onClick={Toggle} >
                    <i className='bi bi-justify'></i>
                </a>
                <a className="navbar-brand" href="#search">
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <span className="input-group-text border-0 bg-transparent">
                                <i class="bi bi-search"></i>
                                <input type="text" className="form-control border-0 bg-transparent" placeholder="Search Data" />
                            </span>
                        </div>
                    </div>
                </a>
                <div className="ml-auto nav-end d-flex align-items-center me-5">
                    <span className="me-3">
                        <i class="bi bi-bell-fill "></i>
                    </span>
                    <img
                        src={imageNav}
                        alt=""
                        style={{ width: '35px', height: '35px', borderRadius: '50%', marginRight: '10px' }}
                    />
                    <span className="d-md-block">
                        <h6 style={{ marginRight: '10px', fontSize: '14px' }}> Ashley H.</h6>
                    </span>
                    <span>
                        <i class="bi bi-caret-down-fill"></i>
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
