import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <ul className="nav justify-content-center mt-4 mr-4">
            <Link className="navbar-brand text-dark" to='/'>Aletheia Fellowship</Link>
            <li className="nav-item">
                <Link className="nav-link text-secondary" to='/'>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-secondary" to='/about'>About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-secondary" to='/sermons'>Sermons</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-secondary" to='/giving'>Giving</Link>
            </li>
        </ul>
    </header>
)

export default Header
