import React from 'react'
import './Topbar.css'
import pic1 from './images/onecell.png'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='logo'>
            <img src={pic1} alt='logo' width='90px' height='80px'/>
        </div>
        <div className='pages'>
          
              <Link to="/" style={{color:"white"}}>Home</Link>
              <Link to="/project" style={{marginLeft:"20px", color:"white"}}>Projects</Link>
           
        </div>
    </div>
  )
}

export default Topbar