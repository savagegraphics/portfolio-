import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/residence_logo.png'

function Navbar() {
    return (
        <div>
            <div className="container">
                <div className='hero'>

                    <div className='heroimage'>
                        {<img src={Logo} alt='Logo'
                            className="logo" />}
                    </div>

                    <div className='heronavbar'>
                        <ul>
                            <li><Link to='/about' className='navbar-overlay'> About US</Link></li>
                            <li><Link to='/content' className='navbar-overlay'> Work </Link></li>
                            <li><Link to="/contact" className='navbar-overlay'> Contact </Link></li>

                        </ul>


                    </div>
                </div>




            </div>
        </div>
    )
}

export default Navbar