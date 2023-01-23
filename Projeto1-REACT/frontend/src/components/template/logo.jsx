import './logo.css'
import logo from '../../imgs/LOGO2.png'
import React from 'react'
import { Link } from 'react-router-dom'
export default props =>
    <aside className='logo'>
        <Link to='/' className='logo'>
            <img src={logo} alt="logo"></img>
        </Link>
    </aside>