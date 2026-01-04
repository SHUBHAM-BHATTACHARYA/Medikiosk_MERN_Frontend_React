import React, { useState } from 'react'
import '../css/Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    const handleButtonToggle = () =>{
        setShowMenu(!showMenu)
    }

  return (
    <div className='navbar-main'>
        <div className='navbar-container'>
            <div className='grid navbar-grid'>
                <div className='navbar-logo'>
                    <h1>Medikiosk</h1>
                </div>
                <div className={showMenu?'nav-content nav-menu-mobile':'nav-content nav-menu-web'}>
                    <ul>
                        <li>
                            <a>Clinics</a>
                        </li>
                        <li>
                            <a>Hospitals</a>
                        </li>
                    </ul>
                </div>
                {showMenu?(
                    <div className='navbar-ham-menu'>
                        <button onClick={handleButtonToggle}>
                            <IoMdClose />
                        </button>
                    </div>
                ):(
                    <div className='navbar-ham-menu'>
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar